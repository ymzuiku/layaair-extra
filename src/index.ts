import 'native.d.ts';
import './LayaCore';

import * as utils from './utils';
utils.fullPage();

import initCanvas from './initCanvas';
import rxExp from './rxExp';
import { drawRect, drawRectOfRadius, getNodeTree, apply, colorFilter } from './extra';
import { full, flex } from './layout';

export default {
  colorFilter,
  drawRect,
  drawRectOfRadius,
  getNodeTree,
  apply,
  initCanvas,
  utils,
  full,
  flex,
  rxExp,
};
