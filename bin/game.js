window['plan'] = 'wechat-game';

require('./weapp-adapter.js');
require('./libs/laya.core.js');
require('./libs/laya.wxmini.js');
require('./libs/laya.webgl.js');
require('./libs/laya.ani.js');
require('./libs/laya.filter.js');
require('./libs/laya.particle.js');
require('./libs/laya.tiledmap.js');
require('./libs/laya.ui.js');
require('./index.js');

Laya.MiniAdpter.init();
