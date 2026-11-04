# 工程现场 · Worksite

一个 DSH Web GUI 会话视图插件。它把当前 Session 的持久事件、任务清单和运行状态，翻译成一座正在施工的工地：

- GitHub 仓库：<https://github.com/LuoTaiyu/dsh-worksite-plugin>
- 插件市场索引：<https://cdn.jsdelivr.net/gh/LuoTaiyu/dsh-worksite-plugin@main/market.json>
- 版本：`0.1.0`

> GitHub 的仓库名只接受 ASCII 字符，中文名会被清洗成 `-`；因此实际仓库使用稳定 slug `dsh-worksite-plugin`，项目中文名仍是「工程现场插件」。

- **拟人化现场工程师「小匠」**：思考、施工、验收、交付、返工、待命六种状态，带表情、安全帽、图纸、扳手和状态气泡。
- **施工塔**：把 todo 或会话阶段映射成楼层；已完成、施工中、待建三种楼层状态，带塔吊和作业面提示。
- **工序航线**：图纸会审 → 主体施工 → 质量验收 → 交付使用，四段式阶段轨。
- **现场动态**：最近 5 次工具调用，按改图、看图、勘测、施工、外勤、排期、分包、交付分类。
- **施工清单**：直接读取 `todos` 投影；没有 todo 时优雅降级为按会话阶段估算。
- **工程仪表盘**：工序、改图、轮次、用时、令牌、异常。
- **主题与无障碍**：全部 UI 使用 `--dsw-alias-*` 主题令牌，支持浅色/深色、键盘焦点与 `prefers-reduced-motion`。

## 文件

| 文件 | 作用 |
| --- | --- |
| `package.json` | Bundle 清单、`dsh.bundle.patch`、`dsh.client` |
| `cordis.patch.yml` | 插入 `site-view` 行 |
| `index.js` | Host 半侧（空实现，负责 Loader 行） |
| `client.js` | 浏览器半侧：`conversation.view` 注册、数据推导、React 组件、CSS |
| `locale/{en,zh}.json` | Plugin Manager / Settings 显示元数据 |
| `icon.svg` | 原创图标 |
| `market.json` | DSH 插件市场索引（format 1） |
| `README.md` | 本说明 |

## 数据来源

- `useSession()`：`running`、`blank`、`promptAttempted`、错误状态。
- `useProjection('todos')`：当前任务清单。
- `useProjection('goal')`：持久目标（可选）。
- `useProjection('title')`：会话标题（可选）。
- Session binding 的 `eventSource`：resident 会话事件窗口，用于工具调用、轮次、错误、token 用量。

进度是**会话信号估算**，不是模型自报的完成度：todo 占主导，工具活动与验收信号作补充；没有 todo 时按会话阶段估算。界面上明确标注了这一点。

## 安装

### 从 GitHub 安装

在 DSH 的 Plugin Manager 中使用「安装第三方插件」，填入 commit-pinned Git 地址：

```text
git+https://github.com/LuoTaiyu/dsh-worksite-plugin.git#5c52c9019e461399feddcf060b4e86522d0c7b06
```

也可以直接使用仓库地址后再做一次更新：

```text
git+https://github.com/LuoTaiyu/dsh-worksite-plugin.git
```

### 从插件市场安装

DSH 当前没有官方中心市场；Plugin Manager 的 Discover 只列出用户自己添加的索引。本仓库自带一个 format 1 市场索引：

```text
https://cdn.jsdelivr.net/gh/LuoTaiyu/dsh-worksite-plugin@main/market.json
```

启用 **Plugins → Experimental plugins → Custom plugin markets**，在 Discover 中添加这个索引，即可搜索并安装「工程现场」。

### 本地安装

本包是一个本地 Bundle。通过 Plugin Manager 的「安装第三方插件 → 本地目录」安装 `dsh-site-view` 的绝对路径，或由宿主侧 `install_bundle` 完成。安装后打开任意会话，顶部的会话视图切换环中会出现「工程现场 / Worksite」。

当前桌面 profile 以 `link:` 方式安装到本工作区；移动或重命名 `dsh-site-view` 目录后，需要重新安装一次。

## 验证

已完成：

- `node --check` 通过；
- `package.json` / locale JSON 解析通过；
- `deriveSite()`、`buildFloors()` 与 Client `apply()` 注册契约的断言通过（空闲、施工、部分完成、全部完成、错误返工、多任务楼层折叠、slot 注册）；
- 已安装到 `desktop` profile，`dsh.profile.bundles` 包含 `@local/dsh-site-view`；
- 运行中的 Host `/plugins/events` 图已包含 `@local/dsh-site-view`，最终客户端 Bundle 以 `200` 返回并通过语法检查；
- Bundle 清单、locale 与 icon 导出检查通过。

运行纯函数测试：

```powershell
node test/derive.test.mjs
```

未完成：真实浏览器中的最终视觉验收（当前环境没有可用的页面控制/截图通道）。安装后应以实际页面为准，检查浅色/深色主题、窄窗口、无 todo 会话与错误会话。若视图切换环里暂时看不到「工程现场」，刷新一次页面即可加载新客户端 Bundle。
