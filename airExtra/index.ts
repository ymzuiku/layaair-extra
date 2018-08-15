import '../exp/LayaCore';
import * as utils from './utils';
utils.fullPage();

import initGame from './initGame';
import * as extra from './extra';
import flex from './flex';

window['air'] = {
  extra,
  initGame,
  utils,
  flex,
};

export { extra, initGame, utils, flex };
