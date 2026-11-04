window.__ModuleLoader__.load({
  id: '@local/dsh-site-view',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const NS = 'dsh-site-view';

    const zh = {
      'view.label': '工程现场',
      'site.kicker': 'DSH · 会话工地',
      'site.title': '工程现场',
      'site.untitled': '未命名工程',
      'site.subtitle': '把会话里的每一步，浇筑成看得见的进度。',
      'site.estimate': '进度由任务清单、工具活动与会话状态实时估算',
      'site.code.live': 'LIVE',
      'site.code.done': 'DONE',
      'site.code.idle': 'STANDBY',
      'site.code.paused': 'HOLD',
      'site.code.alert': 'ISSUE',
      'site.code.review': 'REVIEW',
      'site.status.running': '施工中',
      'site.status.done': '已交付',
      'site.status.idle': '待开工',
      'site.status.paused': '现场待命',
      'site.status.alert': '需要处理',
      'site.status.review': '待复核',
      'phase.idle': '等待开工',
      'phase.brief': '图纸会审',
      'phase.build': '主体施工',
      'phase.verify': '质量验收',
      'phase.ship': '交付使用',
      'phase.paused': '现场待命',
      'phase.alert': '问题返工',
      'phase.done': '竣工交付',
      'speech.idle': '图纸还没铺开。给我一个目标，我就开工。',
      'speech.thinking': '正在审图，把目标拆成能落地的工序…',
      'speech.working': '正在推进「{task}」这道工序。',
      'speech.workingTool': '正在用 {tool} 推进「{task}」。',
      'speech.workingGeneric': '正在现场作业，工具已经开动。',
      'speech.review': '主体已完成，正在逐项核对交付物。',
      'speech.done': '所有工序完成，现场清理完毕，交付！',
      'speech.paused': '现场暂停。材料和进度都保留着，随时可以复工。',
      'speech.alert': '现场遇到问题，先别盖下一层，返工排查。',
      'mascot.name': '小匠',
      'mascot.role': '现场工程师',
      'mascot.id': 'SITE-07',
      'progress.label': '综合进度',
      'progress.hint': '任务清单主导；无清单时按工序与会话阶段估算',
      'progress.aria': '工程进度 {pct}%',
      'tower.title': '施工塔',
      'tower.subtitle': '每一层，都是一项已落地的工作。',
      'tower.floor': 'F{floor}',
      'tower.done': '已完',
      'tower.active': '施工',
      'tower.pending': '待建',
      'tower.activeTask': '当前作业面',
      'tower.lastTask': '最后一道工序',
      'tower.noTask': '等待第一道工序',
      'stage.title': '工序航线',
      'stage.0': '图纸会审',
      'stage.1': '主体施工',
      'stage.2': '质量验收',
      'stage.3': '交付使用',
      'stats.tools': '工序',
      'stats.edits': '改图',
      'stats.turns': '轮次',
      'stats.elapsed': '用时',
      'stats.tokens': '令牌',
      'stats.errors': '异常',
      'activity.title': '现场动态',
      'activity.subtitle': '最近的工序与工具调用',
      'activity.empty': '还没有工序记录。开工后，这里会亮起来。',
      'activity.running': '进行中',
      'activity.done': '已完成',
      'activity.error': '有异常',
      'activity.noDetail': '无附加参数',
      'todos.title': '施工清单',
      'todos.count': '{done}/{total} 完成',
      'todos.empty.title': '还没有施工清单',
      'todos.empty.body': '模型尚未调用 todo_write。本视图会继续按会话阶段估算进度。',
      'todos.more': '还有 {n} 项未展开',
      'todos.inProgress': '进行中',
      'todos.done': '已完成',
      'todos.pending': '待施工',
      'goal.title': '工程目标',
      'goal.badge': 'GOAL',
      'tool.edit': '改图',
      'tool.read': '看图',
      'tool.scan': '勘测',
      'tool.shell': '施工',
      'tool.web': '外勤',
      'tool.plan': '排期',
      'tool.delegate': '分包',
      'tool.deliver': '交付',
      'tool.tool': '作业',
      'time.justNow': '刚刚',
      'time.secondsAgo': '{n} 秒前',
      'time.minutesAgo': '{n} 分前',
      'time.hoursAgo': '{n} 小时前',
      'time.daysAgo': '{n} 天前',
      'time.none': '—',
    };

    const en = {
      'view.label': 'Worksite',
      'site.kicker': 'DSH · SESSION WORKSITE',
      'site.title': 'Worksite',
      'site.untitled': 'Untitled project',
      'site.subtitle': 'Pour every step of the session into visible progress.',
      'site.estimate': 'Progress is estimated live from todos, tool activity, and session state.',
      'site.code.live': 'LIVE',
      'site.code.done': 'DONE',
      'site.code.idle': 'STANDBY',
      'site.code.paused': 'HOLD',
      'site.code.alert': 'ISSUE',
      'site.code.review': 'REVIEW',
      'site.status.running': 'On site',
      'site.status.done': 'Delivered',
      'site.status.idle': 'Waiting',
      'site.status.paused': 'Standing by',
      'site.status.alert': 'Needs attention',
      'site.status.review': 'In review',
      'phase.idle': 'Waiting for a brief',
      'phase.brief': 'Drawing review',
      'phase.build': 'Main build',
      'phase.verify': 'Quality check',
      'phase.ship': 'Handover',
      'phase.paused': 'Site on hold',
      'phase.alert': 'Rework',
      'phase.done': 'Completed',
      'speech.idle': 'The blueprint is still rolled up. Give me a goal and I will break ground.',
      'speech.thinking': 'Reading the drawings and splitting the goal into buildable steps…',
      'speech.working': 'Building “{task}” right now.',
      'speech.workingTool': 'Using {tool} to push “{task}” forward.',
      'speech.workingGeneric': 'Tools are running and the site is moving.',
      'speech.review': 'The main build is done. I am checking every deliverable.',
      'speech.done': 'Every step is complete, the site is clean, and the work is delivered!',
      'speech.paused': 'The site is paused. Materials and progress are safe; we can resume anytime.',
      'speech.alert': 'Something broke on site. Hold the next floor and fix it first.',
      'mascot.name': 'Xiao Jiang',
      'mascot.role': 'Site engineer',
      'mascot.id': 'SITE-07',
      'progress.label': 'Overall progress',
      'progress.hint': 'Todos lead; without a list, tool activity and stage decide',
      'progress.aria': 'Worksite progress {pct}%',
      'tower.title': 'Build tower',
      'tower.subtitle': 'Every floor is work that landed.',
      'tower.floor': 'F{floor}',
      'tower.done': 'Done',
      'tower.active': 'Building',
      'tower.pending': 'Planned',
      'tower.activeTask': 'Current work face',
      'tower.lastTask': 'Last operation',
      'tower.noTask': 'Waiting for the first task',
      'stage.title': 'Stage rail',
      'stage.0': 'Drawing review',
      'stage.1': 'Main build',
      'stage.2': 'Quality check',
      'stage.3': 'Handover',
      'stats.tools': 'Operations',
      'stats.edits': 'Edits',
      'stats.turns': 'Turns',
      'stats.elapsed': 'Elapsed',
      'stats.tokens': 'Tokens',
      'stats.errors': 'Issues',
      'activity.title': 'Site feed',
      'activity.subtitle': 'Recent operations and tool calls',
      'activity.empty': 'No operations yet. This feed lights up when work starts.',
      'activity.running': 'Running',
      'activity.done': 'Done',
      'activity.error': 'Error',
      'activity.noDetail': 'No extra arguments',
      'todos.title': 'Work list',
      'todos.count': '{done}/{total} done',
      'todos.empty.title': 'No work list yet',
      'todos.empty.body': 'The model has not called todo_write. The view keeps estimating from session stages.',
      'todos.more': '{n} more item(s) hidden',
      'todos.inProgress': 'In progress',
      'todos.done': 'Completed',
      'todos.pending': 'Planned',
      'goal.title': 'Project goal',
      'goal.badge': 'GOAL',
      'tool.edit': 'Edit',
      'tool.read': 'Inspect',
      'tool.scan': 'Survey',
      'tool.shell': 'Build',
      'tool.web': 'Field',
      'tool.plan': 'Plan',
      'tool.delegate': 'Delegate',
      'tool.deliver': 'Deliver',
      'tool.tool': 'Operation',
      'time.justNow': 'just now',
      'time.secondsAgo': '{n}s ago',
      'time.minutesAgo': '{n}m ago',
      'time.hoursAgo': '{n}h ago',
      'time.daysAgo': '{n}d ago',
      'time.none': '—',
    };

    const STAGES = 4;
    const EMPTY_EVENTS = { entries: [] };

    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }

    function asArray(value) {
      return Array.isArray(value) ? value : [];
    }

    function number(value, fallback) {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : fallback;
    }

    function truncate(text, max) {
      const value = String(text == null ? '' : text).replace(/\s+/gu, ' ').trim();
      const limit = max == null ? 72 : max;
      return value.length > limit ? value.slice(0, Math.max(0, limit - 1)) + '…' : value;
    }

    function parseJson(text) {
      if (typeof text !== 'string') return text;
      try {
        return JSON.parse(text);
      } catch {
        return null;
      }
    }

    function normalizeTodo(value) {
      if (!value || typeof value !== 'object') return null;
      const content = typeof value.content === 'string' ? value.content.trim() : '';
      if (!content) return null;
      const status = value.status === 'completed' || value.status === 'in_progress' ? value.status : 'pending';
      return { content, status };
    }

    function displayError(error) {
      if (error == null) return '';
      if (typeof error === 'string') return error;
      if (typeof error.message === 'string') return error.message;
      if (typeof error.name === 'string') return error.name;
      return truncate(JSON.stringify(error), 160);
    }

    function categoryOf(name) {
      const value = String(name || '').toLowerCase();
      if (/(^|_)(write|edit|apply_patch|multi_edit|create_file|replace)(_|$)/u.test(value)) return 'edit';
      if (/(^|_)(read|view|open|cat)(_|$)/u.test(value)) return 'read';
      if (/(^|_)(glob|grep|search|find|list)(_|$)/u.test(value)) return 'scan';
      if (/(^|_)(pwsh|powershell|bash|shell|exec|command|terminal|run)(_|$)/u.test(value)) return 'shell';
      if (/(^|_)(web_search|web_fetch|fetch|browser)(_|$)/u.test(value)) return 'web';
      if (/(^|_)(todo_write|todo|plan|update_plan)(_|$)/u.test(value)) return 'plan';
      if (/(^|_)(task|subagent|workflow|delegate|agent)(_|$)/u.test(value)) return 'delegate';
      if (/(^|_)(present|deliver|deliverable|publish)(_|$)/u.test(value)) return 'deliver';
      return 'tool';
    }

    function pickArg(args, keys) {
      if (!args || typeof args !== 'object') return '';
      for (const key of keys) {
        if (typeof args[key] === 'string' && args[key].trim()) return args[key];
      }
      return '';
    }

    function redact(text) {
      return String(text)
        .replace(
          /((?:token|secret|password|passwd|api[_-]?key|authorization|credential)s?\s*[:=]\s*)[^\s'",}]+/giu,
          '$1***',
        )
        .replace(
          /((?:--?)?(?:token|secret|password|passwd|api[_-]?key|authorization)\s+)[^\s'",}]+/giu,
          '$1***',
        );
    }

    function describeCall(call) {
      if (!call) return '';
      const args = call.args;
      if (typeof args === 'string') return truncate(redact(args), 88);
      const picked = pickArg(args, [
        'command', 'file_path', 'path', 'query', 'url', 'pattern',
        'description', 'prompt', 'objective', 'name',
      ]);
      if (picked) return truncate(redact(picked), 88);
      if (args && typeof args === 'object') {
        for (const value of Object.values(args)) {
          if (typeof value === 'string' && value.trim()) return truncate(redact(value), 88);
        }
      }
      return call.rawArgs ? truncate(redact(String(call.rawArgs)), 88) : '';
    }

    function isVerifyCall(call) {
      if (!call) return false;
      const text = (String(call.name || '') + ' ' + describeCall(call)).toLowerCase();
      return /(^|[^a-z])(test|tests|build|lint|typecheck|check|verify|validate|pytest|vitest|jest|tsc)([^a-z]|$)/u.test(text);
    }

    function formatClock(milliseconds) {
      if (!Number.isFinite(milliseconds) || milliseconds < 0) return '—';
      const total = Math.floor(milliseconds / 1000);
      const hours = Math.floor(total / 3600);
      const minutes = Math.floor((total % 3600) / 60);
      const seconds = total % 60;
      const mm = String(minutes).padStart(2, '0');
      const ss = String(seconds).padStart(2, '0');
      return hours > 0 ? hours + ':' + mm + ':' + ss : mm + ':' + ss;
    }

    function formatCompact(value) {
      const n = number(value, 0);
      if (n < 1000) return String(Math.round(n));
      if (n < 1000000) return (n / 1000).toFixed(n < 10000 ? 1 : 0) + 'k';
      return (n / 1000000).toFixed(1) + 'M';
    }

    function ago(time, now, t) {
      const value = number(time, 0);
      if (!value) return t('time.none');
      const delta = Math.max(0, now - value);
      if (delta < 10000) return t('time.justNow');
      if (delta < 60000) return t('time.secondsAgo', { n: Math.floor(delta / 1000) });
      if (delta < 3600000) return t('time.minutesAgo', { n: Math.floor(delta / 60000) });
      if (delta < 86400000) return t('time.hoursAgo', { n: Math.floor(delta / 3600000) });
      return t('time.daysAgo', { n: Math.floor(delta / 86400000) });
    }

    /**
     * Fold the resident session window into the small set of construction
     * signals this view paints. Pure and deterministic; the React layer only
     * supplies the current session window, todos, goal, and title.
     */
    function deriveSite(entries, snapshot, todos, goal, title) {
      const tools = [];
      const byId = new Map();
      let eventTodos = null;
      let userTurns = 0;
      let turnStarts = 0;
      let turnEnds = 0;
      let errors = 0;
      let currentTurnError = '';
      let firstTime = null;
      let lastTime = null;
      let tokens = 0;
      let compactions = 0;
      let titleFromEvents = '';

      for (const entry of asArray(entries)) {
        const event = entry && entry.event ? entry.event : entry;
        if (!event || typeof event.type !== 'string') continue;
        const data = event.data || {};
        const time = number(event.time, 0);
        if (time > 0) {
          if (firstTime === null) firstTime = time;
          lastTime = time;
        }

        if (event.type === 'tool/call') {
          const id = String(data.callId == null ? 'call-' + String(event.seq == null ? tools.length : event.seq) : data.callId);
          const call = {
            id,
            name: String(data.name || 'tool'),
            args: parseJson(data.arguments),
            rawArgs: typeof data.arguments === 'string' ? data.arguments : '',
            status: 'running',
            time,
            endTime: null,
            category: categoryOf(data.name),
          };
          tools.push(call);
          byId.set(id, call);
          continue;
        }

        if (event.type === 'tool/result') {
          const message = data.message || {};
          const id = String((message.source && message.source.callId) || data.callId || '');
          const call = byId.get(id);
          if (call) {
            const failed = message.isError === true || data.error !== undefined;
            call.status = failed ? 'error' : 'done';
            call.endTime = time;
            call.error = failed ? displayError(data.error || message.error) : '';
            if (failed) errors += 1;
          }
          continue;
        }

        if (event.type === 'turn/start') {
          turnStarts += 1;
          currentTurnError = '';
          continue;
        }

        if (event.type === 'turn/end') {
          turnEnds += 1;
          const reason = data.reason || {};
          if (reason.kind === 'error') {
            errors += 1;
            currentTurnError = displayError(reason.error) || 'error';
          } else {
            currentTurnError = '';
          }
          continue;
        }

        if (event.type === 'user/message') {
          const source = data.source || {};
          if (source.kind !== 'compact-checkpoint') userTurns += 1;
          continue;
        }

        if (event.type === 'assistant/message') {
          const usage = data.usage || (data.message && data.message.usage);
          if (usage && typeof usage === 'object') {
            tokens += number(usage.inputTokens != null ? usage.inputTokens : (usage.promptTokens != null ? usage.promptTokens : usage.input), 0);
            tokens += number(usage.outputTokens != null ? usage.outputTokens : (usage.completionTokens != null ? usage.completionTokens : usage.output), 0);
          }
          continue;
        }

        if (event.type === 'todo/write') {
          if (Array.isArray(data.todos)) {
            eventTodos = data.todos.map(normalizeTodo).filter(Boolean);
          }
          continue;
        }

        if (event.type === 'compaction/start') {
          compactions += 1;
          continue;
        }

        if (event.type === 'session/title' && typeof data.title === 'string') {
          titleFromEvents = data.title;
        }
      }

      const projectionTodos = Array.isArray(todos) ? todos.map(normalizeTodo).filter(Boolean) : todos === null ? null : eventTodos;
      const list = Array.isArray(projectionTodos) ? projectionTodos : [];
      const total = list.length;
      const completed = list.filter((todo) => todo.status === 'completed').length;
      const inProgress = list.filter((todo) => todo.status === 'in_progress').length;
      const pending = list.filter((todo) => todo.status === 'pending').length;
      const allDone = total > 0 && completed === total;
      const running = Boolean(snapshot && snapshot.running);
      const promptAttempted = Boolean(snapshot && snapshot.promptAttempted);
      const promptError = Boolean(snapshot && snapshot.promptError);
      const agentError = Boolean(snapshot && snapshot.lastAgentError);
      const lastTool = tools.length > 0 ? tools[tools.length - 1] : null;
      const activeTool = tools.length > 0 ? tools.slice().reverse().find((call) => call.status === 'running') || null : null;
      const interrupted = Boolean(currentTurnError || promptError || agentError);
      const activeTodo = list.find((todo) => todo.status === 'in_progress') || null;
      const nextTodo = list.find((todo) => todo.status === 'pending') || null;
      const goalRecord = goal && goal.goal ? goal.goal : goal;
      const goalObjective = goalRecord && typeof goalRecord.objective === 'string' ? goalRecord.objective : '';
      const verifySignal = Boolean(lastTool && isVerifyCall(lastTool));

      let stage = -1;
      if (interrupted) stage = 2;
      else if (allDone) stage = 3;
      else if (running) {
        if (verifySignal && lastTool.status === 'running') stage = 2;
        else if (total > 0) stage = completed > 0 || inProgress > 0 ? 1 : 0;
        else stage = tools.length === 0 ? 0 : 1;
      } else if (promptAttempted || userTurns > 0) {
        if (total > 0 && !allDone) stage = completed > 0 || inProgress > 0 ? 1 : 0;
        else stage = 3;
      }

      let progress;
      if (total > 0) {
        progress = Math.round(((completed + inProgress * 0.55) / total) * 100);
        if (running && progress < 5) progress = 5;
        if (allDone) progress = 100;
        if (interrupted && allDone) progress = 96;
        if (!running && !allDone && progress >= 100) progress = 99;
      } else if (running) {
        progress = clamp(16 + Math.min(52, tools.length * 5) + Math.min(12, turnEnds * 4), 12, 94);
        if (tools.length === 0) progress = 22;
      } else if (interrupted) {
        progress = 74;
      } else if (promptAttempted) {
        progress = 100;
      } else {
        progress = 0;
      }
      progress = clamp(progress, 0, 100);

      let mood;
      if (interrupted) mood = 'alert';
      else if (running) mood = tools.length === 0 ? 'thinking' : activeTool ? 'working' : 'thinking';
      else if (total > 0 && !allDone) mood = 'paused';
      else if (allDone) mood = 'done';
      else if (promptAttempted || userTurns > 0) mood = 'done';
      else mood = 'idle';

      const currentTask = activeTodo ? activeTodo.content : nextTodo ? nextTodo.content : allDone && total > 0 ? list[total - 1].content : '';
      const recent = tools.slice(-5).reverse();
      const edits = tools.filter((call) => call.category === 'edit').length;

      return {
        tools,
        recent,
        lastTool,
        activeTool,
        userTurns,
        turnStarts,
        turnEnds,
        errors,
        currentTurnError,
        interrupted,
        firstTime,
        lastTime,
        tokens,
        compactions,
        title: String(title || titleFromEvents || ''),
        todos: list,
        total,
        completed,
        inProgress,
        pending,
        allDone,
        activeTodo,
        nextTodo,
        currentTask,
        goalObjective,
        running,
        promptAttempted,
        stage,
        progress,
        mood,
        edits,
      };
    }

    function buildFloors(todos, progress, stage) {
      const list = asArray(todos);
      if (list.length > 0) {
        const count = Math.min(6, list.length);
        const floors = [];
        for (let index = 0; index < count; index += 1) {
          const start = Math.floor((index * list.length) / count);
          const end = Math.max(start + 1, Math.floor(((index + 1) * list.length) / count));
          const slice = list.slice(start, end);
          const done = slice.every((todo) => todo.status === 'completed');
          const active = !done && slice.some((todo) => todo.status === 'in_progress');
          floors.push({
            floor: index + 1,
            state: done ? 'done' : active ? 'active' : 'pending',
            detail: slice.map((todo) => todo.content).join(' / '),
            count: slice.length,
          });
        }
        return floors;
      }

      const thresholds = [20, 45, 70, 90];
      let activeIndex = -1;
      if (stage >= 0) {
        activeIndex = thresholds.findIndex((threshold) => progress < threshold);
        if (activeIndex < 0) activeIndex = 4;
      }
      return thresholds.map((threshold, index) => ({
        floor: index + 1,
        state: progress >= threshold ? 'done' : index === activeIndex ? 'active' : 'pending',
        detail: '',
        count: 1,
      }));
    }

    function useNow(active) {
      const [now, setNow] = React.useState(() => Date.now());
      React.useEffect(() => {
        if (!active) {
          setNow(Date.now());
          return undefined;
        }
        const timer = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(timer);
      }, [active]);
      return now;
    }

    function speechFor(base, t) {
      const task = base.currentTask ? truncate(base.currentTask, 30) : '';
      if (base.mood === 'working') {
        if (task) return t('speech.workingTool', { tool: t('tool.' + (base.lastTool ? base.lastTool.category : 'tool')), task });
        return t('speech.workingGeneric');
      }
      return t('speech.' + base.mood);
    }

    function statusOf(base) {
      if (base.mood === 'alert') return 'alert';
      if (base.running) return 'running';
      if (base.mood === 'done') return 'done';
      if (base.mood === 'paused') return 'paused';
      if (base.mood === 'review') return 'review';
      return 'idle';
    }

    function phaseOf(base, t) {
      if (base.mood === 'alert') return t('phase.alert');
      if (base.mood === 'paused') return t('phase.paused');
      if (base.mood === 'idle') return t('phase.idle');
      if (base.mood === 'done' || base.allDone) return t('phase.done');
      const keys = ['phase.brief', 'phase.build', 'phase.verify', 'phase.ship'];
      return t(keys[clamp(base.stage, 0, 3)]);
    }

    function MascotEyes({ mood }) {
      if (mood === 'done') {
        return h(
          'g',
          { className: 'sitev-happy-eyes' },
          h('path', { d: 'M94 102 q8 -9 16 0', fill: 'none', stroke: '#24324a', strokeWidth: 2.6, strokeLinecap: 'round' }),
          h('path', { d: 'M130 102 q8 -9 16 0', fill: 'none', stroke: '#24324a', strokeWidth: 2.6, strokeLinecap: 'round' }),
        );
      }
      if (mood === 'alert') {
        return h(
          'g',
          null,
          h('ellipse', { cx: 102, cy: 101, rx: 8, ry: 9, fill: '#fff' }),
          h('ellipse', { cx: 138, cy: 101, rx: 8, ry: 9, fill: '#fff' }),
          h('circle', { cx: 102, cy: 101, r: 3.1, fill: '#24324a' }),
          h('circle', { cx: 138, cy: 101, r: 3.1, fill: '#24324a' }),
        );
      }
      const lookX = mood === 'thinking' ? 2 : 0;
      const lookY = mood === 'thinking' ? -2 : 0;
      return h(
        'g',
        { className: 'sitev-eye-blink' },
        h('ellipse', { cx: 102, cy: 101, rx: 7, ry: 8.5, fill: '#fff' }),
        h('ellipse', { cx: 138, cy: 101, rx: 7, ry: 8.5, fill: '#fff' }),
        h('circle', { cx: 102 + lookX, cy: 101 + lookY, r: 3.8, fill: '#24324a' }),
        h('circle', { cx: 138 + lookX, cy: 101 + lookY, r: 3.8, fill: '#24324a' }),
        h('circle', { cx: 103.6 + lookX, cy: 99 + lookY, r: 1.2, fill: '#fff' }),
        h('circle', { cx: 139.6 + lookX, cy: 99 + lookY, r: 1.2, fill: '#fff' }),
      );
    }

    function MascotMouth({ mood }) {
      if (mood === 'done') return h('path', { d: 'M109 116 q11 12 22 0', fill: 'none', stroke: '#9a4f3a', strokeWidth: 2.4, strokeLinecap: 'round' });
      if (mood === 'alert') return h('path', { d: 'M112 120 q8 -6 16 0', fill: 'none', stroke: '#9a4f3a', strokeWidth: 2.3, strokeLinecap: 'round' });
      if (mood === 'thinking') return h('circle', { cx: 120, cy: 118, r: 3, fill: '#9a4f3a' });
      if (mood === 'working') return h('path', { d: 'M111 117 q9 6 18 0', fill: 'none', stroke: '#9a4f3a', strokeWidth: 2.2, strokeLinecap: 'round' });
      return h('path', { d: 'M110 115 q10 7 20 0', fill: 'none', stroke: '#9a4f3a', strokeWidth: 2.2, strokeLinecap: 'round' });
    }

    function MascotEffects({ mood }) {
      if (mood === 'thinking') {
        return h(
          'g',
          { className: 'sitev-thoughts' },
          h('circle', { className: 'sitev-thought-dot', cx: 172, cy: 62, r: 4.5, fill: '#93c5fd' }),
          h('circle', { className: 'sitev-thought-dot', cx: 184, cy: 50, r: 6, fill: '#60a5fa' }),
          h('circle', { className: 'sitev-thought-dot', cx: 199, cy: 35, r: 8, fill: '#3b82f6' }),
        );
      }
      if (mood === 'working') {
        return h(
          'g',
          { className: 'sitev-sparks', stroke: '#f59e0b', strokeWidth: 2.2, strokeLinecap: 'round' },
          h('path', { className: 'sitev-spark', d: 'M196 172 l10 -8' }),
          h('path', { className: 'sitev-spark', d: 'M202 186 l12 2' }),
          h('path', { className: 'sitev-spark', d: 'M190 200 l8 10' }),
          h('path', { className: 'sitev-spark', d: 'M183 163 l4 -12' }),
        );
      }
      if (mood === 'done') {
        return h(
          'g',
          { className: 'sitev-confetti' },
          h('rect', { className: 'sitev-confetti-bit', x: 44, y: 42, width: 5, height: 11, rx: 1, fill: '#22c55e' }),
          h('rect', { className: 'sitev-confetti-bit', x: 66, y: 25, width: 5, height: 9, rx: 1, fill: '#f59e0b' }),
          h('rect', { className: 'sitev-confetti-bit', x: 188, y: 34, width: 5, height: 12, rx: 1, fill: '#3b82f6' }),
          h('circle', { className: 'sitev-confetti-bit', cx: 178, cy: 60, r: 3.5, fill: '#ef4444' }),
          h('circle', { className: 'sitev-confetti-bit', cx: 52, cy: 66, r: 3, fill: '#60a5fa' }),
        );
      }
      if (mood === 'alert') {
        return h(
          'g',
          { className: 'sitev-sweat' },
          h('path', { d: 'M160 76 q6 8 0 13 q-6 -5 0 -13', fill: '#93c5fd', stroke: '#60a5fa', strokeWidth: 1 }),
        );
      }
      return null;
    }

    function Mascot({ mood, label }) {
      return h(
        'div',
        { className: 'sitev-mascot', 'data-mood': mood },
        h(
          'svg',
          { viewBox: '0 0 240 270', role: 'img', 'aria-label': label },
          h('ellipse', { cx: 120, cy: 252, rx: 70, ry: 9, fill: '#0f172a', opacity: 0.12 }),
          h(
            'g',
            { className: 'sitev-mascot-body' },
            h('rect', { x: 98, y: 208, width: 18, height: 38, rx: 8, fill: '#253a63' }),
            h('rect', { x: 124, y: 208, width: 18, height: 38, rx: 8, fill: '#253a63' }),
            h('rect', { x: 91, y: 238, width: 31, height: 12, rx: 6, fill: '#1b2a47' }),
            h('rect', { x: 118, y: 238, width: 31, height: 12, rx: 6, fill: '#1b2a47' }),
            h('path', {
              d: 'M84 152 Q84 136 100 132 L140 132 Q156 136 156 152 L162 214 Q162 226 150 226 L90 226 Q78 226 78 214 Z',
              fill: '#2f5fd0',
            }),
            h('path', { d: 'M84 152 Q84 136 100 132 L106 132 L106 150 L92 158 Z', fill: '#f7f9ff' }),
            h('path', { d: 'M156 152 Q156 136 140 132 L134 132 L134 150 L148 158 Z', fill: '#f7f9ff' }),
            h('rect', { x: 102, y: 150, width: 36, height: 52, rx: 6, fill: '#244bb0' }),
            h('rect', { x: 96, y: 148, width: 8, height: 34, rx: 4, fill: '#244bb0' }),
            h('rect', { x: 136, y: 148, width: 8, height: 34, rx: 4, fill: '#244bb0' }),
            h('circle', { cx: 100, cy: 154, r: 3, fill: '#ffd166' }),
            h('circle', { cx: 140, cy: 154, r: 3, fill: '#ffd166' }),
            h('rect', { x: 112, y: 170, width: 16, height: 12, rx: 2, fill: '#1b3f96' }),
            h('rect', { x: 117, y: 166, width: 6, height: 10, rx: 2, fill: '#ffd166', transform: 'rotate(12 120 171)' }),
            h('text', {
              x: 120,
              y: 190,
              textAnchor: 'middle',
              fontSize: 7,
              fontFamily: 'ui-monospace, monospace',
              fontWeight: 700,
              fill: '#c7d7ff',
              letterSpacing: 0.8,
            }, 'DSH'),
            h('rect', { x: 112, y: 126, width: 16, height: 14, rx: 7, fill: '#e8b58f' }),
            h('circle', { cx: 120, cy: 100, r: 38, fill: '#f4c9a3' }),
            h('circle', { cx: 84, cy: 102, r: 7, fill: '#e8b58f' }),
            h('circle', { cx: 156, cy: 102, r: 7, fill: '#e8b58f' }),
            h('path', { d: 'M85 88 Q90 66 120 65 Q150 66 155 88 Q143 80 132 82 Q121 84 112 80 Q99 76 85 88 Z', fill: '#2a211d' }),
            h('path', { d: 'M80 88 Q82 48 120 45 Q158 48 160 88 Z', fill: '#f7b731' }),
            h('path', { d: 'M80 88 Q82 48 120 45 Q130 46 136 50 Q110 54 100 88 Z', fill: '#ffd166', opacity: 0.55 }),
            h('rect', { x: 72, y: 84, width: 96, height: 10, rx: 5, fill: '#e39a1d' }),
            h('rect', { x: 115, y: 45, width: 10, height: 10, rx: 5, fill: '#ffe08a' }),
            h('circle', { cx: 120, cy: 57, r: 9, fill: '#ffe08a', opacity: 0.25, className: 'sitev-lamp-glow' }),
            h('circle', { cx: 120, cy: 57, r: 5, fill: '#fff7cf' }),
            h(MascotEyes, { mood }),
            h('path', { d: 'M120 104 q3 5 0 8', fill: 'none', stroke: '#d99b72', strokeWidth: 2, strokeLinecap: 'round' }),
            h(MascotMouth, { mood }),
            h('circle', { cx: 94, cy: 113, r: 5, fill: '#f09a8c', opacity: 0.32 }),
            h('circle', { cx: 146, cy: 113, r: 5, fill: '#f09a8c', opacity: 0.32 }),
            h(
              'g',
              { transform: 'rotate(-8 88 165)' },
              h('path', { d: 'M82 158 Q68 166 64 186', fill: 'none', stroke: '#2f5fd0', strokeWidth: 14, strokeLinecap: 'round' }),
              h('circle', { cx: 64, cy: 191, r: 8, fill: '#f4c9a3' }),
              h(
                'g',
                { transform: 'rotate(-12 48 190)' },
                h('rect', { x: 30, y: 172, width: 38, height: 28, rx: 3, fill: '#dbeafe', stroke: '#93c5fd', strokeWidth: 1.5 }),
                h('path', { d: 'M35 180h18M35 186h12M35 192h22', fill: 'none', stroke: '#60a5fa', strokeWidth: 1.5, strokeLinecap: 'round' }),
                h('circle', { cx: 58, cy: 191, r: 3, fill: 'none', stroke: '#2563eb', strokeWidth: 1.2 }),
              ),
            ),
            h(
              'g',
              { className: 'sitev-arm' },
              h('path', { d: 'M156 158 Q172 166 174 184', fill: 'none', stroke: '#2f5fd0', strokeWidth: 14, strokeLinecap: 'round' }),
              h('circle', { cx: 174, cy: 189, r: 8, fill: '#f4c9a3' }),
              h(
                'g',
                { transform: 'rotate(24 174 196)' },
                h('rect', { x: 170, y: 188, width: 8, height: 30, rx: 4, fill: '#94a3b8' }),
                h('path', { d: 'M170 216 h8 l-4 8 z', fill: '#94a3b8' }),
                h('rect', { x: 173, y: 181, width: 2, height: 8, fill: '#94a3b8' }),
              ),
            ),
          ),
          h(MascotEffects, { mood }),
        ),
      );
    }

    function Crane({ active }) {
      return h(
        'div',
        { className: 'sitev-crane', 'data-active': active ? 'true' : 'false' },
        h(
          'svg',
          { viewBox: '0 0 220 130', 'aria-hidden': true },
          h('rect', { x: 22, y: 116, width: 20, height: 8, rx: 2, fill: 'currentColor', opacity: 0.55 }),
          h('path', { d: 'M32 118V30M32 30H190M32 30L78 16', fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round' }),
          h('path', { d: 'M32 38 L88 30 M32 46 L78 38 M32 54 L88 46', fill: 'none', stroke: 'currentColor', strokeWidth: 1.2, opacity: 0.55 }),
          h('path', { d: 'M148 30V58', fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeDasharray: '3 3' }),
          h('g', { className: 'sitev-hook' }, h('rect', { x: 140, y: 58, width: 16, height: 10, rx: 2, fill: 'currentColor' }), h('path', { d: 'M148 68v9', stroke: 'currentColor', strokeWidth: 1.6 })),
          h('rect', { x: 28, y: 28, width: 8, height: 8, rx: 2, fill: 'currentColor' }),
          h('circle', { cx: 190, cy: 30, r: 2.5, fill: 'currentColor' }),
        ),
      );
    }

    function ToolGlyph({ kind }) {
      const common = { width: 15, height: 15, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.35, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
      switch (kind) {
        case 'edit':
          return h('svg', common, h('path', { d: 'M3 13l1-3.4 7.4-7.4a1.4 1.4 0 0 1 2 2L6 11.6 3 13Z' }), h('path', { d: 'M9.8 3.6l2.6 2.6' }));
        case 'read':
          return h('svg', common, h('path', { d: 'M4 2.5h5l3 3v8H4z' }), h('path', { d: 'M9 2.5v3h3M6 8h4M6 10.5h4' }));
        case 'scan':
          return h('svg', common, h('circle', { cx: 7, cy: 7, r: 4 }), h('path', { d: 'M10 10l3.5 3.5' }));
        case 'shell':
          return h('svg', common, h('rect', { x: 2, y: 3.5, width: 12, height: 9, rx: 1.5 }), h('path', { d: 'M5 7l2 1.8L5 10.6M8.6 10.8h2.6' }));
        case 'web':
          return h('svg', common, h('circle', { cx: 8, cy: 8, r: 5.5 }), h('path', { d: 'M2.5 8h11M8 2.5c1.6 1.6 2.4 3.4 2.4 5.5S9.6 12 8 13.5C6.4 12 5.6 10.1 5.6 8S6.4 4.1 8 2.5Z' }));
        case 'plan':
          return h('svg', common, h('path', { d: 'M3 3h10M3 8h10M3 13h6' }), h('path', { d: 'M12 11l1.5 1.5L16 9.5' }));
        case 'delegate':
          return h('svg', common, h('circle', { cx: 8, cy: 3.5, r: 1.6 }), h('circle', { cx: 3.5, cy: 12.5, r: 1.6 }), h('circle', { cx: 12.5, cy: 12.5, r: 1.6 }), h('path', { d: 'M8 5v2.2M8 7.2L3.5 11M8 7.2L12.5 11' }));
        case 'deliver':
          return h('svg', common, h('path', { d: 'M2.5 5.5L8 2.5l5.5 3v5L8 13.5l-5.5-3z' }), h('path', { d: 'M2.5 5.5L8 8.5l5.5-3M8 8.5v5' }));
        default:
          return h('svg', common, h('path', { d: 'M10.5 2.5a3 3 0 0 0-3.8 3.8L2.5 10.5v3h3l4.2-4.2a3 3 0 0 0 3.8-3.8l-2 2-2-2 2-2Z' }));
      }
    }

    function StatusGlyph({ status }) {
      if (status === 'completed') {
        return h('svg', { width: 14, height: 14, viewBox: '0 0 16 16', 'aria-hidden': true }, h('circle', { cx: 8, cy: 8, r: 6.4, fill: 'currentColor', opacity: 0.14 }), h('path', { d: 'M4.8 8.2l2.1 2.1 4.3-4.5', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }));
      }
      if (status === 'in_progress') {
        return h('svg', { className: 'sitev-spinner', width: 14, height: 14, viewBox: '0 0 16 16', 'aria-hidden': true }, h('circle', { cx: 8, cy: 8, r: 5.5, fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeDasharray: '8 5', strokeLinecap: 'round' }));
      }
      return h('svg', { width: 14, height: 14, viewBox: '0 0 16 16', 'aria-hidden': true }, h('circle', { cx: 8, cy: 8, r: 5.4, fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeDasharray: '2 3' }));
    }

    function BlueprintGlyph() {
      return h(
        'svg',
        { viewBox: '0 0 96 96', 'aria-hidden': true },
        h('rect', { x: 10, y: 20, width: 76, height: 56, rx: 5, fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeDasharray: '3 4', opacity: 0.55 }),
        h('path', { d: 'M19 68V48h13v20M38 68V37h15v31M59 68V55h15v13', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinejoin: 'round', opacity: 0.75 }),
        h('path', { d: 'M16 28h24M16 34h13', stroke: 'currentColor', strokeWidth: 1.2, opacity: 0.5 }),
        h('circle', { cx: 67, cy: 34, r: 5, fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, opacity: 0.55 }),
      );
    }

    function Floor({ floor, t }) {
      return h(
        'div',
        { className: 'sitev-floor', 'data-state': floor.state, title: floor.detail || t('tower.floor', { floor: floor.floor }) },
        h('span', { className: 'sitev-floor-no' }, t('tower.floor', { floor: floor.floor })),
        h('span', { className: 'sitev-windows' }, h('i', { className: 'sitev-window' }), h('i', { className: 'sitev-window' }), h('i', { className: 'sitev-window' })),
        h('span', { className: 'sitev-floor-state' }, t('tower.' + floor.state)),
      );
    }

    function Stat({ label, value, tone }) {
      return h('div', { className: 'sitev-stat', 'data-tone': tone || 'normal' }, h('span', { className: 'sitev-stat-label' }, label), h('span', { className: 'sitev-stat-value' }, value));
    }

    function TodoRow({ todo, index, t }) {
      return h(
        'li',
        { className: 'sitev-todo-row', 'data-status': todo.status },
        h('span', { className: 'sitev-todo-index' }, String(index + 1).padStart(2, '0')),
        h('span', { className: 'sitev-todo-mark' }, h(StatusGlyph, { status: todo.status })),
        h('span', { className: 'sitev-todo-content' }, todo.content),
        h('span', { className: 'sitev-todo-status' }, t('todos.' + todo.status)),
      );
    }

    function SiteView({ eventSource, useSession, useProjection, t }) {
      const running = useSession((value) => value.running);
      const promptAttempted = useSession((value) => value.promptAttempted);
      const promptError = useSession((value) => value.promptError);
      const agentError = useSession((value) => value.lastAgentError);
      const sessionSnapshot = React.useMemo(
        () => ({ running, promptAttempted, promptError, lastAgentError: agentError }),
        [running, promptAttempted, promptError, agentError],
      );
      const todos = useProjection('todos');
      const goal = useProjection('goal');
      const title = useProjection('title');
      const now = useNow(Boolean(running));

      const subscribe = React.useCallback(
        (listener) => (eventSource && typeof eventSource.subscribe === 'function' ? eventSource.subscribe(listener) : () => {}),
        [eventSource],
      );
      const readEvents = React.useCallback(
        () => (eventSource && typeof eventSource.getSnapshot === 'function' ? eventSource.getSnapshot() : EMPTY_EVENTS),
        [eventSource],
      );
      const events = React.useSyncExternalStore(subscribe, readEvents, readEvents);

      const base = React.useMemo(
        () => deriveSite(events && events.entries ? events.entries : EMPTY_EVENTS.entries, sessionSnapshot, todos, goal, title),
        [events, sessionSnapshot, todos, goal, title],
      );
      const floors = React.useMemo(
        () => buildFloors(base.todos, base.progress, base.stage),
        [base.todos, base.progress, base.stage],
      );

      const status = statusOf(base);
      const phase = phaseOf(base, t);
      const speech = speechFor(base, t);
      const elapsed = base.firstTime ? formatClock((base.running ? now : base.lastTime || now) - base.firstTime) : t('time.none');
      const titleText = base.title || t('site.untitled');
      const activeTask = base.currentTask || t('tower.noTask');
      const shownTodos = base.todos.slice(0, 8);
      const moreTodos = Math.max(0, base.todos.length - shownTodos.length);

      return h(
        'div',
        { className: 'sitev-root', 'data-mood': base.mood, role: 'region', 'aria-label': t('view.label') },
        h('style', null, CSS),
        h(
          'div',
          { className: 'sitev-shell' },
          h(
            'header',
            { className: 'sitev-head' },
            h(
              'div',
              { className: 'sitev-head-copy' },
              h('div', { className: 'sitev-kicker' }, h('span', { className: 'sitev-kicker-dot' }), t('site.kicker')),
              h('h2', { className: 'sitev-title' }, titleText),
              h('p', { className: 'sitev-sub' }, t('site.subtitle')),
            ),
            h(
              'div',
              { className: 'sitev-head-side' },
              h(
                'div',
                { className: 'sitev-status', 'data-kind': status },
                h('span', { className: 'sitev-status-dot' }),
                h('span', { className: 'sitev-status-code' }, t('site.code.' + status)),
                h('span', { className: 'sitev-status-text' }, t('site.status.' + status)),
              ),
              h('div', { className: 'sitev-stamp' }, t('site.estimate')),
            ),
          ),

          base.goalObjective
            ? h(
                'div',
                { className: 'sitev-goal' },
                h('span', { className: 'sitev-goal-badge' }, t('goal.badge')),
                h('span', { className: 'sitev-goal-label' }, t('goal.title')),
                h('p', { className: 'sitev-goal-text' }, base.goalObjective),
              )
            : null,

          h(
            'div',
            { className: 'sitev-grid' },
            h(
              'section',
              { className: 'sitev-card sitev-hero' },
              h(
                'div',
                { className: 'sitev-hero-grid' },
                h(
                  'div',
                  { className: 'sitev-mascot-wrap' },
                  h(Mascot, { mood: base.mood, label: t('mascot.role') }),
                  h(
                    'div',
                    { className: 'sitev-nameplate' },
                    h('span', { className: 'sitev-nameplate-name' }, t('mascot.name')),
                    h('span', { className: 'sitev-nameplate-role' }, t('mascot.role')),
                    h('span', { className: 'sitev-nameplate-id' }, t('mascot.id')),
                  ),
                ),
                h(
                  'div',
                  { className: 'sitev-hero-copy' },
                  h(
                    'div',
                    { className: 'sitev-phase-row' },
                    h('span', { className: 'sitev-phase' }, phase),
                    h('span', { className: 'sitev-phase-code' }, 'PHASE ' + String(clamp(base.stage, 0, 3) + 1).padStart(2, '0') + ' / 04'),
                  ),
                  h('div', { className: 'sitev-speech', role: 'status', 'aria-live': 'polite' }, speech),
                  h(
                    'div',
                    { className: 'sitev-progress-head' },
                    h('span', { className: 'sitev-progress-label' }, t('progress.label')),
                    h('span', { className: 'sitev-progress-pct' }, String(base.progress) + '%'),
                  ),
                  h(
                    'div',
                    { className: 'sitev-progress', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': base.progress, 'aria-label': t('progress.aria', { pct: base.progress }) },
                    h('span', { className: 'sitev-progress-fill', style: { width: base.progress + '%' } }),
                  ),
                  h('div', { className: 'sitev-progress-note' }, t('progress.hint')),
                  h(
                    'div',
                    { className: 'sitev-chips' },
                    h('span', { className: 'sitev-chip' }, h('b', null, String(base.completed) + '/' + String(base.total || 0)), t('todos.title')),
                    h('span', { className: 'sitev-chip' }, h('b', null, String(base.tools.length)), t('stats.tools')),
                    h('span', { className: 'sitev-chip' }, h('b', null, elapsed), t('stats.elapsed')),
                  ),
                ),
              ),
            ),

            h(
              'section',
              { className: 'sitev-card sitev-tower-card' },
              h(
                'div',
                { className: 'sitev-card-head' },
                h('div', null, h('div', { className: 'sitev-card-title' }, t('tower.title')), h('div', { className: 'sitev-card-sub' }, t('tower.subtitle'))),
                h('span', { className: 'sitev-mono sitev-tower-pct' }, String(base.progress) + '%'),
              ),
              h(
                'div',
                { className: 'sitev-tower' },
                h(Crane, { active: base.running }),
                h('div', { className: 'sitev-floors' }, floors.slice().reverse().map((floor) => h(Floor, { key: floor.floor, floor, t }))),
                h('div', { className: 'sitev-ground' }),
              ),
              h(
                'div',
                { className: 'sitev-legend' },
                h('span', { 'data-state': 'done' }, h('i', null), t('tower.done')),
                h('span', { 'data-state': 'active' }, h('i', null), t('tower.active')),
                h('span', { 'data-state': 'pending' }, h('i', null), t('tower.pending')),
              ),
              h('div', { className: 'sitev-workface' }, h('span', { className: 'sitev-workface-label' }, t(base.allDone ? 'tower.lastTask' : 'tower.activeTask')), h('span', { className: 'sitev-workface-text' }, activeTask)),
            ),
          ),
        ),

        h(
          'div',
          { className: 'sitev-grid sitev-grid-lower' },
          h(
            'section',
            { className: 'sitev-card sitev-stage-card' },
            h(
              'div',
              { className: 'sitev-card-head' },
              h('div', null, h('div', { className: 'sitev-card-title' }, t('stage.title')), h('div', { className: 'sitev-card-sub' }, t('site.estimate'))),
            ),
            h(
              'div',
              { className: 'sitev-stages' },
              [0, 1, 2, 3].map((index) =>
                h(
                  'div',
                  { className: 'sitev-stage', 'data-state': index < base.stage ? 'done' : index === base.stage ? 'active' : 'pending', key: index },
                  h('span', { className: 'sitev-stage-node' }, index < base.stage ? '✓' : String(index + 1)),
                  h('span', { className: 'sitev-stage-label' }, t('stage.' + index)),
                ),
              ),
            ),
            h(
              'div',
              { className: 'sitev-stats' },
              h(Stat, { label: t('stats.tools'), value: String(base.tools.length) }),
              h(Stat, { label: t('stats.edits'), value: String(base.edits) }),
              h(Stat, { label: t('stats.turns'), value: String(base.turnStarts || base.userTurns) }),
              h(Stat, { label: t('stats.elapsed'), value: elapsed }),
              base.tokens > 0 ? h(Stat, { label: t('stats.tokens'), value: formatCompact(base.tokens) }) : null,
              base.errors > 0 ? h(Stat, { label: t('stats.errors'), value: String(base.errors), tone: 'warn' }) : null,
            ),
          ),

          h(
            'section',
            { className: 'sitev-card sitev-activity-card' },
            h(
              'div',
              { className: 'sitev-card-head' },
              h('div', null, h('div', { className: 'sitev-card-title' }, t('activity.title')), h('div', { className: 'sitev-card-sub' }, t('activity.subtitle'))),
              h('span', { className: 'sitev-mono sitev-feed-count' }, String(base.recent.length).padStart(2, '0')),
            ),
            base.recent.length > 0
              ? h(
                  'ol',
                  { className: 'sitev-feed' },
                  base.recent.map((call) =>
                    h(
                      'li',
                      { className: 'sitev-feed-row', 'data-status': call.status, key: call.id },
                      h('span', { className: 'sitev-feed-icon' }, h(ToolGlyph, { kind: call.category })),
                      h(
                        'span',
                        { className: 'sitev-feed-main' },
                        h(
                          'span',
                          { className: 'sitev-feed-name' },
                          t('tool.' + call.category),
                          h('span', { className: 'sitev-feed-raw' }, truncate(call.name, 26)),
                          h('span', { className: 'sitev-feed-status' }, t('activity.' + call.status)),
                        ),
                        h('span', { className: 'sitev-feed-detail' }, describeCall(call) || t('activity.noDetail')),
                      ),
                      h('span', { className: 'sitev-feed-time' }, ago(call.time, now, t)),
                    ),
                  ),
                )
              : h('div', { className: 'sitev-empty sitev-empty-feed' }, h('div', { className: 'sitev-empty-glyph' }, h(ToolGlyph, { kind: 'plan' })), h('p', null, t('activity.empty'))),
          ),
        ),

        h(
          'section',
          { className: 'sitev-card sitev-todos' },
          h(
            'div',
            { className: 'sitev-card-head' },
            h(
              'div',
              null,
              h('div', { className: 'sitev-card-title' }, t('todos.title')),
              h('div', { className: 'sitev-card-sub' }, t('todos.count', { done: base.completed, total: base.total || 0 })),
            ),
            h(
              'div',
              { className: 'sitev-todo-summary' },
              h('span', { className: 'sitev-todo-pill', 'data-status': 'completed' }, String(base.completed)),
              h('span', { className: 'sitev-todo-pill', 'data-status': 'in_progress' }, String(base.inProgress)),
              h('span', { className: 'sitev-todo-pill', 'data-status': 'pending' }, String(base.pending)),
            ),
          ),
          h('div', { className: 'sitev-todo-bar', 'aria-hidden': true }, h('span', { style: { width: base.progress + '%' } })),
          base.todos.length > 0
            ? h(
                'div',
                null,
                h('ol', { className: 'sitev-todo-list' }, shownTodos.map((todo, index) => h(TodoRow, { todo, index, t, key: String(index) + ':' + todo.content }))),
                moreTodos > 0 ? h('div', { className: 'sitev-more' }, t('todos.more', { n: moreTodos })) : null,
              )
            : h(
                'div',
                { className: 'sitev-empty sitev-empty-todos' },
                h('div', { className: 'sitev-empty-glyph' }, h(BlueprintGlyph, null)),
                h('div', null, h('p', { className: 'sitev-empty-title' }, t('todos.empty.title')), h('p', { className: 'sitev-empty-body' }, t('todos.empty.body'))),
              ),
        ),
      );
    }

    const CSS = `
.sitev-root{--sitev-line:color-mix(in srgb, var(--dsw-alias-state-business-primary) 20%, transparent);--sitev-green:var(--dsw-alias-state-success-primary);--sitev-amber:var(--dsw-alias-state-warn-primary);--sitev-red:var(--dsw-alias-state-error-primary);height:100%;min-height:0;overflow:auto;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-size:var(--dsh-content-font-size,14px);line-height:1.5;scrollbar-gutter:stable}
.sitev-root *{box-sizing:border-box}
.sitev-shell{width:100%;max-width:1180px;margin:0 auto;padding:26px 28px 56px}
.sitev-head{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;padding:2px 2px 18px;border-bottom:.5px solid var(--dsw-alias-border-l2)}
.sitev-head-copy{min-width:0}
.sitev-head-side{display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex:none;max-width:240px}
.sitev-kicker{display:flex;align-items:center;gap:8px;color:var(--dsw-alias-label-tertiary);font:var(--dsw-font-xxxs-11);letter-spacing:.16em;text-transform:uppercase}
.sitev-kicker-dot{width:6px;height:6px;border-radius:50%;background:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 4px color-mix(in srgb,var(--dsw-alias-state-business-primary) 14%,transparent)}
.sitev-title{margin:7px 0 4px;font-size:24px;line-height:32px;font-weight:600;letter-spacing:-.02em;word-break:break-word}
.sitev-sub{margin:0;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px}
.sitev-status{display:inline-flex;align-items:center;gap:7px;padding:4px 9px;border:.5px solid var(--dsw-alias-border-l2);border-radius:999px;background:var(--dsw-alias-bg-layer-2);font:var(--dsw-font-xxxs-11);letter-spacing:.1em;white-space:nowrap}
.sitev-status[data-kind=running]{color:var(--dsw-alias-state-business-primary);border-color:color-mix(in srgb,var(--dsw-alias-state-business-primary) 30%,transparent);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 8%,var(--dsw-alias-bg-layer-2))}
.sitev-status[data-kind=done]{color:var(--dsw-alias-state-success-primary);border-color:color-mix(in srgb,var(--dsw-alias-state-success-primary) 34%,transparent);background:color-mix(in srgb,var(--dsw-alias-state-success-primary) 8%,var(--dsw-alias-bg-layer-2))}
.sitev-status[data-kind=alert]{color:var(--dsw-alias-state-error-primary);border-color:color-mix(in srgb,var(--dsw-alias-state-error-primary) 34%,transparent);background:color-mix(in srgb,var(--dsw-alias-state-error-primary) 8%,var(--dsw-alias-bg-layer-2))}
.sitev-status[data-kind=paused],.sitev-status[data-kind=review]{color:var(--dsw-alias-state-warn-label);border-color:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 34%,transparent);background:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 8%,var(--dsw-alias-bg-layer-2))}
.sitev-status-dot{width:6px;height:6px;border-radius:50%;background:currentColor}
.sitev-status[data-kind=running] .sitev-status-dot{animation:sitev-pulse 1.5s ease-in-out infinite}
.sitev-status-code{font-family:var(--ds-font-family-code);font-weight:600}
.sitev-status-text{color:var(--dsw-alias-label-secondary);letter-spacing:.02em}
.sitev-stamp{color:var(--dsw-alias-label-caption);font-size:10px;line-height:14px;text-align:right}
.sitev-goal{display:flex;align-items:center;gap:9px;margin-top:16px;padding:9px 12px;border:.5px solid color-mix(in srgb,var(--dsw-alias-state-business-primary) 22%,transparent);border-radius:9px;background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 5%,var(--dsw-alias-bg-layer-1));min-width:0}
.sitev-goal-badge{flex:none;font:var(--dsw-font-xxxs-11);letter-spacing:.12em;color:var(--dsw-alias-state-business-primary);border:.5px solid currentColor;border-radius:4px;padding:1px 5px}
.sitev-goal-label{flex:none;color:var(--dsw-alias-label-tertiary);font-size:11px}
.sitev-goal-text{margin:0;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sitev-grid{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,.8fr);gap:16px;margin-top:18px;align-items:stretch}
.sitev-grid-lower{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
.sitev-card{position:relative;min-width:0;border:.5px solid var(--dsw-alias-border-l1);border-radius:var(--dsw-radius-lg);background:var(--dsw-specific-input-major);box-shadow:var(--dsw-elevation-soft);padding:18px}
.sitev-card-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:14px;min-width:0}
.sitev-card-title{font-size:14px;line-height:20px;font-weight:600;color:var(--dsw-alias-label-primary)}
.sitev-card-sub{margin-top:1px;color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:16px}
.sitev-mono{font-family:var(--ds-font-family-code);font-variant-numeric:tabular-nums}
.sitev-hero{overflow:hidden;padding:20px}
.sitev-hero::before{content:"";position:absolute;inset:0;background-image:linear-gradient(var(--sitev-line) 1px,transparent 1px),linear-gradient(90deg,var(--sitev-line) 1px,transparent 1px);background-size:22px 22px;opacity:.42;-webkit-mask-image:linear-gradient(120deg,#000 0%,transparent 72%);mask-image:linear-gradient(120deg,#000 0%,transparent 72%);pointer-events:none}
.sitev-hero-grid{position:relative;display:grid;grid-template-columns:178px minmax(0,1fr);gap:18px;align-items:center}
.sitev-mascot-wrap{position:relative;display:flex;flex-direction:column;align-items:center;gap:7px;min-width:0}
.sitev-mascot-wrap::before{content:"";position:absolute;top:2px;left:50%;width:172px;height:172px;transform:translateX(-50%);border-radius:50%;background:radial-gradient(circle at 50% 45%,color-mix(in srgb,var(--dsw-alias-state-business-primary) 13%,transparent),transparent 68%);pointer-events:none}
.sitev-mascot{position:relative;z-index:1;width:100%;max-width:178px}
.sitev-mascot svg{display:block;width:100%;height:auto;overflow:visible;filter:drop-shadow(0 8px 16px rgba(15,23,42,.1))}
.sitev-mascot-body{animation:sitev-bob 4.2s ease-in-out infinite;transform-box:view-box;transform-origin:120px 230px}
.sitev-mascot[data-mood=working] .sitev-mascot-body{animation-duration:2.4s}
.sitev-mascot[data-mood=alert] .sitev-mascot-body{animation-duration:1.5s}
.sitev-eye-blink{animation:sitev-blink 5.4s infinite;transform-box:fill-box;transform-origin:center}
.sitev-arm{transform-box:view-box;transform-origin:164px 152px;transition:transform .25s ease}
.sitev-mascot[data-mood=working] .sitev-arm{animation:sitev-swing 1.35s ease-in-out infinite}
.sitev-mascot[data-mood=done] .sitev-arm{transform:rotate(-30deg)}
.sitev-mascot[data-mood=alert] .sitev-arm{transform:rotate(7deg)}
.sitev-lamp-glow{animation:sitev-lamp 2.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
.sitev-thought-dot{animation:sitev-float 2.4s ease-in-out infinite}
.sitev-thought-dot:nth-child(2){animation-delay:.25s}
.sitev-thought-dot:nth-child(3){animation-delay:.5s}
.sitev-spark{animation:sitev-spark 1s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
.sitev-spark:nth-child(2){animation-delay:.18s}
.sitev-spark:nth-child(3){animation-delay:.36s}
.sitev-spark:nth-child(4){animation-delay:.54s}
.sitev-confetti-bit{animation:sitev-float 2.8s ease-in-out infinite}
.sitev-confetti-bit:nth-child(2){animation-delay:.3s}
.sitev-confetti-bit:nth-child(3){animation-delay:.6s}
.sitev-confetti-bit:nth-child(4){animation-delay:.9s}
.sitev-sweat{animation:sitev-float 2.2s ease-in-out infinite}
.sitev-nameplate{display:flex;flex-direction:column;align-items:center;gap:1px;padding:4px 10px;border:.5px solid var(--dsw-alias-border-l2);border-radius:6px;background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 70%,transparent);max-width:100%}
.sitev-nameplate-name{font-size:12px;font-weight:600;line-height:16px;color:var(--dsw-alias-label-primary)}
.sitev-nameplate-role{font-size:10px;line-height:13px;color:var(--dsw-alias-label-tertiary)}
.sitev-nameplate-id{font-family:var(--ds-font-family-code);font-size:9px;letter-spacing:.1em;color:var(--dsw-alias-label-caption)}
.sitev-hero-copy{min-width:0}
.sitev-phase-row{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.sitev-phase{font-size:21px;line-height:28px;font-weight:600;letter-spacing:-.01em}
.sitev-phase-code{font:var(--dsw-font-xxxs-11);letter-spacing:.12em;color:var(--dsw-alias-label-caption)}
.sitev-speech{position:relative;margin-top:8px;min-height:44px;padding:9px 11px;border:.5px dashed color-mix(in srgb,var(--dsw-alias-state-business-primary) 26%,transparent);border-radius:9px;background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 4%,var(--dsw-alias-bg-layer-1));color:var(--dsw-alias-label-secondary);font-size:12.5px;line-height:19px}
.sitev-speech::before{content:"";position:absolute;left:-5px;top:16px;width:8px;height:8px;border-left:.5px dashed color-mix(in srgb,var(--dsw-alias-state-business-primary) 26%,transparent);border-bottom:.5px dashed color-mix(in srgb,var(--dsw-alias-state-business-primary) 26%,transparent);background:var(--dsw-specific-input-major);transform:rotate(45deg)}
.sitev-progress-head{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;margin-top:16px}
.sitev-progress-label{color:var(--dsw-alias-label-tertiary);font-size:11px;letter-spacing:.08em;text-transform:uppercase}
.sitev-progress-pct{font-family:var(--ds-font-family-code);font-size:30px;line-height:1;font-weight:600;font-variant-numeric:tabular-nums;letter-spacing:-.04em}
.sitev-progress{position:relative;height:12px;margin-top:7px;border:.5px solid var(--dsw-alias-border-l2);border-radius:999px;background:var(--dsw-alias-interactive-bg-hover);overflow:hidden}
.sitev-progress-fill{position:absolute;inset:0 auto 0 0;display:block;min-width:2px;border-radius:inherit;background:linear-gradient(90deg,var(--dsw-alias-state-business-primary),var(--dsw-alias-state-success-primary));transition:width .45s cubic-bezier(.2,.8,.2,1);overflow:hidden}
.sitev-progress-fill::after{content:"";position:absolute;inset:0;background-image:repeating-linear-gradient(135deg,rgba(255,255,255,.24) 0 5px,transparent 5px 10px);animation:sitev-stripe 1.1s linear infinite}
.sitev-root[data-mood=paused] .sitev-progress-fill::after,.sitev-root[data-mood=done] .sitev-progress-fill::after{animation-play-state:paused;opacity:.55}
.sitev-progress-note{margin-top:6px;color:var(--dsw-alias-label-caption);font-size:10px;line-height:14px}
.sitev-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:11px}
.sitev-chip{display:inline-flex;align-items:center;gap:5px;padding:3px 8px;border:.5px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-tertiary);font:var(--dsw-font-xxxs-11)}
.sitev-chip b{font-family:var(--ds-font-family-code);font-weight:600;color:var(--dsw-alias-label-primary);font-variant-numeric:tabular-nums}
.sitev-tower-card{display:flex;flex-direction:column}
.sitev-tower-pct{font-size:15px;color:var(--dsw-alias-label-secondary);white-space:nowrap}
.sitev-tower{position:relative;flex:1;min-height:248px;display:flex;flex-direction:column;justify-content:flex-end;padding-top:44px;border-radius:10px;overflow:hidden;background-image:linear-gradient(var(--sitev-line) 1px,transparent 1px),linear-gradient(90deg,var(--sitev-line) 1px,transparent 1px);background-size:18px 18px;background-position:center bottom;opacity:.98}
.sitev-crane{position:absolute;top:2px;left:5%;width:min(46%,186px);height:100px;color:var(--sitev-line);opacity:.9;pointer-events:none}
.sitev-crane svg{display:block;width:100%;height:100%;overflow:visible}
.sitev-crane[data-active=true]{color:color-mix(in srgb,var(--dsw-alias-state-business-primary) 58%,transparent)}
.sitev-crane .sitev-hook{animation:sitev-hook 3.4s ease-in-out infinite}
.sitev-floors{position:relative;z-index:1;display:flex;flex-direction:column;gap:5px;padding:0 13px 11px}
.sitev-floor{display:grid;grid-template-columns:34px minmax(0,1fr) auto;align-items:center;gap:8px;height:29px;padding:0 8px;border:.5px solid var(--dsw-alias-border-l2);border-radius:4px;background:var(--dsw-alias-bg-layer-1);opacity:.62;transition:opacity .2s ease,border-color .2s ease,background-color .2s ease}
.sitev-floor[data-state=done]{opacity:1;border-color:color-mix(in srgb,var(--dsw-alias-state-success-primary) 36%,transparent);background:color-mix(in srgb,var(--dsw-alias-state-success-primary) 7%,var(--dsw-alias-bg-layer-1))}
.sitev-floor[data-state=active]{opacity:1;border-color:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 50%,transparent);background:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 9%,var(--dsw-alias-bg-layer-1));animation:sitev-active 2.6s ease-in-out infinite}
.sitev-floor[data-state=pending]{border-style:dashed}
.sitev-floor-no{font-family:var(--ds-font-family-code);font-size:10px;color:var(--dsw-alias-label-tertiary);letter-spacing:.04em}
.sitev-windows{display:flex;gap:5px;align-items:center}
.sitev-window{display:block;width:10px;height:7px;border-radius:1px;background:var(--dsw-alias-border-l3)}
.sitev-floor[data-state=done] .sitev-window{background:var(--dsw-alias-state-success-primary);opacity:.8}
.sitev-floor[data-state=active] .sitev-window{background:var(--dsw-alias-state-warn-primary)}
.sitev-floor-state{font-size:9.5px;color:var(--dsw-alias-label-caption);white-space:nowrap}
.sitev-floor[data-state=done] .sitev-floor-state{color:var(--dsw-alias-state-success-primary)}
.sitev-floor[data-state=active] .sitev-floor-state{color:var(--dsw-alias-state-warn-label)}
.sitev-ground{height:2px;margin:0 10px 2px;background:linear-gradient(90deg,transparent,var(--dsw-alias-border-l4),transparent)}
.sitev-legend{display:flex;flex-wrap:wrap;gap:11px;margin-top:10px;color:var(--dsw-alias-label-caption);font-size:10px}
.sitev-legend span{display:inline-flex;align-items:center;gap:4px}
.sitev-legend i{display:block;width:7px;height:7px;border-radius:2px;background:var(--dsw-alias-border-l3)}
.sitev-legend span[data-state=done] i{background:var(--dsw-alias-state-success-primary)}
.sitev-legend span[data-state=active] i{background:var(--dsw-alias-state-warn-primary)}
.sitev-workface{display:flex;align-items:baseline;gap:8px;margin-top:10px;padding-top:10px;border-top:.5px solid var(--dsw-alias-border-l2);min-width:0}
.sitev-workface-label{flex:none;color:var(--dsw-alias-label-caption);font-size:10px}
.sitev-workface-text{color:var(--dsw-alias-label-secondary);font-size:11px;line-height:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sitev-stages{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));margin:6px 0 16px}
.sitev-stage{position:relative;display:flex;flex-direction:column;align-items:center;gap:7px;text-align:center;min-width:0;padding:0 3px}
.sitev-stage:not(:last-child)::after{content:"";position:absolute;top:11px;left:calc(50% + 13px);right:calc(-50% + 13px);height:1px;background:var(--dsw-alias-border-l2)}
.sitev-stage[data-state=done]:not(:last-child)::after{background:color-mix(in srgb,var(--dsw-alias-state-success-primary) 55%,transparent)}
.sitev-stage-node{position:relative;z-index:1;display:grid;place-items:center;width:23px;height:23px;border:1px solid var(--dsw-alias-border-l3);border-radius:50%;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-tertiary);font-family:var(--ds-font-family-code);font-size:9.5px}
.sitev-stage[data-state=done] .sitev-stage-node{border-color:var(--dsw-alias-state-success-primary);background:var(--dsw-alias-state-success-primary);color:var(--dsw-alias-label-primary-inverted)}
.sitev-stage[data-state=active] .sitev-stage-node{border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 4px color-mix(in srgb,var(--dsw-alias-state-business-primary) 12%,transparent)}
.sitev-stage-label{font-size:10px;line-height:14px;color:var(--dsw-alias-label-tertiary);overflow-wrap:anywhere}
.sitev-stage[data-state=active] .sitev-stage-label{color:var(--dsw-alias-label-primary);font-weight:600}
.sitev-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(74px,1fr));gap:8px;padding-top:12px;border-top:.5px solid var(--dsw-alias-border-l2)}
.sitev-stat{display:flex;flex-direction:column;gap:1px;min-width:0}
.sitev-stat-label{font-size:9.5px;line-height:13px;color:var(--dsw-alias-label-caption);letter-spacing:.04em}
.sitev-stat-value{font-family:var(--ds-font-family-code);font-size:15px;line-height:21px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-primary)}
.sitev-stat[data-tone=warn] .sitev-stat-value{color:var(--dsw-alias-state-error-primary)}
.sitev-feed-count{font-size:12px;color:var(--dsw-alias-label-caption)}
.sitev-feed{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1px}
.sitev-feed-row{display:grid;grid-template-columns:24px minmax(0,1fr) auto;gap:9px;align-items:center;padding:6px 5px;border-radius:6px;min-width:0}
.sitev-feed-row:hover{background:var(--dsw-alias-interactive-bg-hover)}
.sitev-feed-icon{display:grid;place-items:center;width:24px;height:24px;border-radius:6px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-tertiary);border:.5px solid var(--dsw-alias-border-l1)}
.sitev-feed-row[data-status=running] .sitev-feed-icon{color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 8%,var(--dsw-alias-bg-layer-2));border-color:color-mix(in srgb,var(--dsw-alias-state-business-primary) 24%,transparent)}
.sitev-feed-row[data-status=error] .sitev-feed-icon{color:var(--dsw-alias-state-error-primary);background:color-mix(in srgb,var(--dsw-alias-state-error-primary) 7%,var(--dsw-alias-bg-layer-2))}
.sitev-feed-main{display:flex;flex-direction:column;min-width:0}
.sitev-feed-name{display:flex;align-items:baseline;gap:5px;min-width:0;font-size:11.5px;line-height:16px;color:var(--dsw-alias-label-primary);font-weight:500}
.sitev-feed-raw{font-family:var(--ds-font-family-code);font-size:9.5px;font-weight:400;color:var(--dsw-alias-label-caption);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sitev-feed-status{font-size:9px;font-weight:400;color:var(--dsw-alias-label-caption);white-space:nowrap}
.sitev-feed-row[data-status=running] .sitev-feed-status{color:var(--dsw-alias-state-business-primary)}
.sitev-feed-row[data-status=error] .sitev-feed-status{color:var(--dsw-alias-state-error-primary)}
.sitev-feed-detail{font-size:10.5px;line-height:15px;color:var(--dsw-alias-label-tertiary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sitev-feed-time{font-family:var(--ds-font-family-code);font-size:9px;color:var(--dsw-alias-label-caption);white-space:nowrap;align-self:start;padding-top:2px}
.sitev-todos{grid-column:1/-1;margin-top:16px}
.sitev-todo-summary{display:flex;gap:5px;flex:none}
.sitev-todo-pill{display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:20px;padding:0 6px;border-radius:5px;font-family:var(--ds-font-family-code);font-size:10px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-tertiary);border:.5px solid var(--dsw-alias-border-l1)}
.sitev-todo-pill[data-status=completed]{color:var(--dsw-alias-state-success-primary);border-color:color-mix(in srgb,var(--dsw-alias-state-success-primary) 28%,transparent)}
.sitev-todo-pill[data-status=in_progress]{color:var(--dsw-alias-state-warn-label);border-color:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 30%,transparent)}
.sitev-todo-bar{height:3px;margin:-2px 0 10px;border-radius:999px;background:var(--dsw-alias-interactive-bg-hover);overflow:hidden}
.sitev-todo-bar span{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--dsw-alias-state-business-primary),var(--dsw-alias-state-success-primary));transition:width .4s ease}
.sitev-todo-list{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:2px 18px}
.sitev-todo-row{display:grid;grid-template-columns:26px 17px minmax(0,1fr) auto;align-items:start;gap:7px;padding:7px 6px;border-radius:6px;min-width:0}
.sitev-todo-row:hover{background:var(--dsw-alias-interactive-bg-hover)}
.sitev-todo-row[data-status=in_progress]{background:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 7%,transparent)}
.sitev-todo-index{font-family:var(--ds-font-family-code);font-size:9.5px;line-height:17px;color:var(--dsw-alias-label-caption)}
.sitev-todo-mark{display:grid;place-items:center;padding-top:1px;color:var(--dsw-alias-label-caption)}
.sitev-todo-row[data-status=completed] .sitev-todo-mark{color:var(--dsw-alias-state-success-primary)}
.sitev-todo-row[data-status=in_progress] .sitev-todo-mark{color:var(--dsw-alias-state-warn-primary)}
.sitev-todo-content{font-size:12px;line-height:17px;color:var(--dsw-alias-label-primary);min-width:0;overflow-wrap:anywhere}
.sitev-todo-row[data-status=completed] .sitev-todo-content{color:var(--dsw-alias-label-tertiary);text-decoration:line-through;text-decoration-color:color-mix(in srgb,var(--dsw-alias-label-tertiary) 55%,transparent)}
.sitev-todo-status{font-size:9.5px;line-height:16px;color:var(--dsw-alias-label-caption);white-space:nowrap;padding-top:1px}
.sitev-todo-row[data-status=completed] .sitev-todo-status{color:var(--dsw-alias-state-success-primary)}
.sitev-todo-row[data-status=in_progress] .sitev-todo-status{color:var(--dsw-alias-state-warn-label)}
.sitev-more{margin-top:7px;padding-left:6px;color:var(--dsw-alias-label-caption);font-size:10px}
.sitev-empty{display:flex;align-items:center;justify-content:center;gap:13px;padding:18px 12px;text-align:left;color:var(--dsw-alias-label-tertiary)}
.sitev-empty-glyph{flex:none;display:grid;place-items:center;width:40px;height:40px;border-radius:8px;background:var(--dsw-alias-bg-layer-2);border:.5px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-caption)}
.sitev-empty-glyph svg{width:25px;height:25px}
.sitev-empty p{margin:0;font-size:11px;line-height:16px}
.sitev-empty-title{margin:0 0 2px!important;color:var(--dsw-alias-label-secondary);font-size:12px!important;font-weight:600}
.sitev-empty-body{color:var(--dsw-alias-label-tertiary)}
.sitev-empty-feed{min-height:132px}
.sitev-empty-todos{justify-content:flex-start;padding:14px 2px 4px}
.sitev-empty-todos .sitev-empty-glyph{width:64px;height:64px;border-radius:10px}
.sitev-empty-todos .sitev-empty-glyph svg{width:46px;height:46px;opacity:.8}
.sitev-spinner{animation:sitev-spin 1.1s linear infinite}
@keyframes sitev-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
@keyframes sitev-blink{0%,42%,48%,100%{transform:scaleY(1)}45%{transform:scaleY(.08)}}
@keyframes sitev-swing{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(17deg)}}
@keyframes sitev-float{0%,100%{transform:translateY(0);opacity:.72}50%{transform:translateY(-4px);opacity:1}}
@keyframes sitev-spark{0%,100%{opacity:.25;transform:scale(.7)}50%{opacity:1;transform:scale(1.15)}}
@keyframes sitev-lamp{0%,100%{opacity:.18;transform:scale(.85)}50%{opacity:.42;transform:scale(1.25)}}
@keyframes sitev-hook{0%,100%{transform:translateY(0)}50%{transform:translateY(9px)}}
@keyframes sitev-stripe{to{background-position:24px 0}}
@keyframes sitev-active{0%,100%{box-shadow:inset 0 0 0 0 color-mix(in srgb,var(--dsw-alias-state-warn-primary) 0%,transparent)}50%{box-shadow:inset 0 0 0 2px color-mix(in srgb,var(--dsw-alias-state-warn-primary) 18%,transparent)}}
@keyframes sitev-pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 color-mix(in srgb,currentColor 35%,transparent)}50%{opacity:.65;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 0%,transparent)}}
@keyframes sitev-spin{to{transform:rotate(360deg)}}
@media (max-width:860px){.sitev-shell{padding:20px 18px 44px}.sitev-head{gap:12px;flex-direction:column}.sitev-head-side{align-items:flex-start;max-width:none}.sitev-stamp{text-align:left}.sitev-grid,.sitev-grid-lower{grid-template-columns:minmax(0,1fr)}.sitev-hero-grid{grid-template-columns:150px minmax(0,1fr);gap:12px}.sitev-todo-list{grid-template-columns:1fr}.sitev-stage-label{font-size:9px}.sitev-title{font-size:21px;line-height:28px}}
@media (max-width:560px){.sitev-hero-grid{grid-template-columns:1fr}.sitev-mascot{max-width:150px}.sitev-mascot-wrap{flex-direction:row;align-items:flex-end;justify-content:flex-start;gap:12px}.sitev-nameplate{align-items:flex-start}.sitev-empty{align-items:flex-start}.sitev-card{padding:14px}.sitev-shell{padding:16px 12px 36px}}
@media (prefers-reduced-motion:reduce){.sitev-root *{animation:none!important;transition:none!important}}
`;

    function apply(ctx) {
      ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-site-view: dictionaries');
      const t = ctx.locale.bind(NS);
      ctx.slots.inject('conversation.view', () =>
        ctx.slots.register(
          {
            name: 'conversation.view',
            id: 'site-view',
            order: 30,
            locale: NS,
            label: () => t('view.label'),
            inject: (sessionId) => {
              const binding = ctx.sessions.binding(sessionId);
              return { eventSource: binding ? binding.eventSource : undefined };
            },
          },
          SiteView,
        ),
      );
    }

    return {
      inject: ['slots', 'sessions', 'locale'],
      apply,
      __test: { deriveSite, buildFloors, redact },
    };
  },
});
