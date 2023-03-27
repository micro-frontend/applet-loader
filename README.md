# 开发指南

请先运行 `npm run start-applet` 启动 `demo-applet`。

然后运行 `npm start` 启动示范 `applet-loader-demo`

## 如何调试 demo-applet

通常应该独立调试 demo-applet，因为它本身就是一个完整的、独立的应用，除了加载指令略显奇异之外，没有任何特殊之处。但是如果它在和 applet-loader-demo 一起调试时出现问题，可以尝试以下方法进行联调：

正常加载应用之后，打开 Chrome DevTools 的 Source 页，把 `demo-applet` 目录拖进这个界面。然后即可直接按 ctrl/cmd-p 并输入 `abc.component.ts` 找到它了。后续调试过程和正常应用完全相同。

## 注意事项

1. 启动 `demo-applet` 开发服务器时必须加上 `--no-live-reload` 参数或在 `angular.json` 中配置上 `liveReload: false`，否则可能会导致不断刷新的问题。
2. `demo-applet` 不要以 `forRoot()` 方式引入 `@angular/router` 模块，否则会争抢全局对象 `history` 的控制权。
3. `demo-applet` 中不要用任何形式添加或修改 `window` 对象上的属性，否则多个同类 applet 之间可能会相互冲突。其它全局变量也要慎用。
