# 开发指南

## 本项目特有指南

请先运行 npm run start-applet 启动示范 Applet。

然后运行 npm start 启动示范 Loader Demo。

Loader Demo 没有自己的界面，可见的部分是由 Applet Demo 中通过 Angular Element 渲染出来的。

## 注意事项

1. 在开发期间 demo-applet 必须用 `--prod` 参数启动，否则会和 applet-loader-demo 的运行时代码冲突，导致页面不断刷新
2. demo-applet 不要以 `forRoot()` 方式引入 `@angular/router` 模块，否则可能争抢全局对象 history 的控制权。
3. demo-applet 中不要用任何形式添加或修改 `window` 对象上的属性，否则多个同类 applet 之间可能会相互冲突。其它全局变量也要慎用。

## Angular 通用指南

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
