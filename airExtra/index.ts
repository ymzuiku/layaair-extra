import '../exp/LayaCore';
import * as utils from './utils';
utils.fullPage();

import initGame from './initGame';
import { drawRect, drawRectOfRadius, getNodeTree, apply } from './extra';
import { full, flex } from './layout';

window['air'] = {
  drawRect,
  drawRectOfRadius,
  getNodeTree,
  apply,
  initGame,
  utils,
  full,
  flex,
};

export {
  drawRect,
  drawRectOfRadius,
  getNodeTree,
  apply,
  initGame,
  utils,
  full,
  flex,
};
