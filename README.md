# Use WebGL create cross-platform UI

lib is fork laya-air: [http://ldc.layabox.com/](http://ldc.layabox.com/)

## 安装

```sh
$ yarn add layaair-extra
```

## 编写简单的项目

```sh
$ cp -rf node_modules/layaair-extra/public public   #拷贝通用public
$ touch src/index.ts
```

在 `src/index.ts` 编写以下代码:

```js
import { air, Laya, plus } from 'layaair-extra';

// 如果要用Laya开发游戏、使用Laya的Debug工具
import 'layaair-extra/src/LayaGame';
import 'layaair-extra/src/LayaDebugTool';

class App extends Laya.Sprite {
  constructor() {
    super();
    // do something
    const label = new Laya.Text();
    label.text = 'Hello LayaAir Extra';
    label.fontSize = 40;
    this.addChild(label);
  }
}

air.initGame({
  RootComponent: App,
  type: 'vertical',
  statPosition: [30, 30],
  completed: startGame,
});
function startGame() {
  // do something
}
```

## 启动项目

```sh
$ npm install -g pillar-pack
$ pillar-pack
```

浏览器预览 `http://127.0.0.1:3100/index.dev.html`


## licensed

layaair-extra is [MIT licensed](./LICENSE).
