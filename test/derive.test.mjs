import fs from 'node:fs';
import assert from 'node:assert/strict';

const source = fs.readFileSync(new URL('../client.js', import.meta.url), 'utf8');
let loaded;
globalThis.window = {
  __ModuleLoader__: {
    load(definition) {
      const module = { exports: {} };
      const definitionExports = definition.factory((name) => {
        if (name === 'react') {
          return {
            createElement() {},
            Fragment: 'Fragment',
            useState() {},
            useEffect() {},
            useCallback() {},
            useMemo() {},
            useSyncExternalStore() {},
          };
        }
        throw new Error('unexpected require: ' + name);
      });
      Object.assign(module.exports, definitionExports);
      loaded = { id: definition.id, exports: module.exports };
    },
  },
};
new Function('window', source)(globalThis.window);

assert.equal(loaded.id, '@local/dsh-site-view');
const { deriveSite, buildFloors, redact } = loaded.exports.__test;
assert.equal(typeof deriveSite, 'function');
assert.equal(typeof buildFloors, 'function');
assert.match(redact('api_key=sk-secret'), /api_key=\*\*\*/);
assert.match(redact('--token abc123'), /--token \*\*\*/);

const idle = deriveSite([], {}, null, null, '');
assert.equal(idle.progress, 0);
assert.equal(idle.mood, 'idle');
assert.equal(idle.stage, -1);
assert.equal(idle.total, 0);

const running = deriveSite(
  [{ event: { type: 'tool/call', seq: 1, time: 1000, data: { callId: 'c1', name: 'read', arguments: '{"file_path":"a.js"}' } } }],
  { running: true, promptAttempted: true },
  null,
  null,
  '',
);
assert.equal(running.mood, 'working');
assert.equal(running.stage, 1);
assert.equal(running.tools.length, 1);
assert.equal(running.recent.length, 1);
assert.match(running.recent[0].args.file_path, /a\.js/);

const partial = deriveSite(
  [
    { event: { type: 'todo/write', seq: 1, time: 1000, data: { todos: [
      { content: 'A', status: 'completed' },
      { content: 'B', status: 'completed' },
      { content: 'C', status: 'in_progress' },
    ] } } },
  ],
  { running: true, promptAttempted: true },
  [
    { content: 'A', status: 'completed' },
    { content: 'B', status: 'completed' },
    { content: 'C', status: 'in_progress' },
  ],
  null,
  'Build something',
);
assert.equal(partial.progress, 85);
assert.equal(partial.total, 3);
assert.equal(partial.completed, 2);
assert.equal(partial.inProgress, 1);
assert.equal(partial.stage, 1);
assert.equal(partial.title, 'Build something');

const done = deriveSite(
  [],
  { running: false, promptAttempted: true },
  [
    { content: 'A', status: 'completed' },
    { content: 'B', status: 'completed' },
  ],
  { goal: { objective: 'Ship it' } },
  '',
);
assert.equal(done.progress, 100);
assert.equal(done.mood, 'done');
assert.equal(done.stage, 3);
assert.equal(done.goalObjective, 'Ship it');
assert.equal(done.paused, undefined);

const failed = deriveSite(
  [{ event: { type: 'turn/end', seq: 4, time: 4000, data: { reason: { kind: 'error', error: { message: 'boom' } } } } }],
  { running: false, promptAttempted: true },
  null,
  null,
  '',
);
assert.equal(failed.mood, 'alert');
assert.equal(failed.stage, 2);
assert.equal(failed.progress, 74);
assert.match(failed.currentTurnError, /boom/);

const many = Array.from({ length: 9 }, (_, index) => ({
  content: 'task ' + index,
  status: index < 4 ? 'completed' : index === 4 ? 'in_progress' : 'pending',
}));
const floors = buildFloors(many, 51, 1);
assert.equal(floors.length, 6);
assert.equal(floors[0].state, 'done');
assert.equal(floors.at(-1).state, 'pending');
assert.equal(floors[0].count, 1);

const fallbackFloors = buildFloors([], 50, 1);
assert.equal(fallbackFloors.length, 4);
assert.equal(fallbackFloors[0].state, 'done');
assert.equal(fallbackFloors[1].state, 'done');
assert.equal(fallbackFloors[2].state, 'active');

const registrations = [];
const dictionaries = [];
const fakeEventSource = { subscribe() { return () => {}; }, getSnapshot() { return { entries: [] }; } };
const ctx = {
  effect(callback, label) {
    dictionaries.push({ label, dispose: callback() });
  },
  locale: {
    register(namespace, values) {
      assert.equal(namespace, 'dsh-site-view');
      assert.equal(typeof values.zh['view.label'], 'string');
      assert.equal(typeof values.en['view.label'], 'string');
      return () => {};
    },
    bind(namespace) {
      assert.equal(namespace, 'dsh-site-view');
      return (key, params) => key + (params ? JSON.stringify(params) : '');
    },
  },
  slots: {
    inject(name, callback) {
      assert.equal(name, 'conversation.view');
      callback();
    },
    register(options, component) {
      registrations.push({ options, component });
      return () => {};
    },
  },
  sessions: {
    binding(sessionId) {
      if (sessionId !== 'session-1') return undefined;
      return { eventSource: fakeEventSource };
    },
  },
};

loaded.exports.apply(ctx);
assert.equal(registrations.length, 1);
const registration = registrations[0];
assert.equal(registration.options.name, 'conversation.view');
assert.equal(registration.options.id, 'site-view');
assert.equal(registration.options.order, 30);
assert.equal(registration.options.locale, 'dsh-site-view');
assert.equal(typeof registration.options.label, 'function');
assert.equal(registration.options.inject('session-1').eventSource, fakeEventSource);
assert.equal(registration.options.inject('missing').eventSource, undefined);
assert.equal(typeof registration.component, 'function');
assert.equal(dictionaries.length, 1);
assert.match(dictionaries[0].label, /dsh-site-view/);

console.log('deriveSite/buildFloors/apply checks passed');
