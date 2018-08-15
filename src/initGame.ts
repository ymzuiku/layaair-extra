import air from './air';

interface IScreenOfCreator {
  RootComponent?: any;
  isShowStat?: boolean;
  isShowDebugPanel?: boolean;
  isShowDebugTool?: boolean;
  showDebugTool?: boolean;
  statPosition?: Array<number>;
  versionFile?: string;
  isAntialias?: boolean;
  width?: number;
  height?: number;
  scaleMode?: string;
  screenMode?: string;
  frameRate?: string;
  bgColor?: string;
  compeleted?: Function;
  type?: string;
}

function initGame(props: IScreenOfCreator) {
  const {
    RootComponent,
    isShowStat,
    statPosition,
    versionFile,
    isAntialias,
    width,
    height,
    bgColor,
    scaleMode,
    screenMode,
    frameRate,
    compeleted,
    type,
  } = props;
  function createCallback() {
    if (RootComponent) {
      air.stage.addChild(new RootComponent());
    }
    if (compeleted) {
      compeleted();
    }
  }
  Config.isAntialias = isAntialias === undefined ? true : isAntialias;
  let iw = 1080;
  let ih = 1920;
  if (type === 'vertical' || type === 'v') {
    air.init(width || iw, height || ih, air.WebGL);
    air.stage.scaleMode = scaleMode || air.Stage.SCALE_FIXED_WIDTH;
    air.stage.screenMode = screenMode || air.Stage.SCREEN_VERTICAL;
    air.stage.frameRate = frameRate || air.Stage.FRAME_FAST;
  } else if (type === 'horizontal' || type === 'h') {
    air.init(width || ih, height || iw, air.WebGL);
    air.stage.scaleMode = scaleMode || air.Stage.SCALE_FIXED_HEIGHT;
    air.stage.screenMode = screenMode || air.Stage.SCREEN_HORIZONTAL;
    air.stage.frameRate = frameRate || air.Stage.FRAME_FAST;
  } else if (type === 'desktop' || type === 'd') {
    air.init(
      width || window.innerWidth,
      height || window.innerHeight,
      air.WebGL,
    );
    air.stage.scaleMode = scaleMode || air.Stage.SCALE_FULL;
    air.stage.screenMode = screenMode || air.Stage.SCREEN_NONE;
    air.stage.frameRate = frameRate || air.Stage.FRAME_MOUSE;
  } else {
    if (scaleMode) {
      air.stage.scaleMode = scaleMode;
    }
    if (screenMode) {
      air.stage.screenMode = screenMode;
    }
    if (screenMode) {
      air.stage.frameRate = frameRate;
    }
  }
  air.stage.bgColor = bgColor || '#f3f3f4';
  air.stage.destroyChildren();
  if (isShowStat) {
    air.Stat.show(30, 30);
  }
  if (statPosition) {
    air.Stat.show(statPosition[0], statPosition[1]);
  }

  function runInitStartGame() {
    if (versionFile) {
      const file = typeof versionFile === 'string' ? versionFile : 'version.json';
      air.ResourceVersion.enable(
        file,
        air.Handler.create(null, createCallback),
        air.ResourceVersion.FILENAME_VERSION,
      );
    } else {
      createCallback();
    }
  }

  if (window['plan'] === 'h5plus') {
    // 扩展API加载完毕后调用回调函数
    document.addEventListener('plusready', runInitStartGame, false);
  } else {
    runInitStartGame();
  }

}

export default initGame;
