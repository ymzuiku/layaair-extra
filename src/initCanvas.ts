export interface IScreenOfCreator {
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
  completed?: Function;
  type?: 'vertical' | 'horizontal' | 'desktop';
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
    completed,
    type,
  } = props;
  function createCallback() {
    setTimeout(() => {
      if (RootComponent) {
        Laya.stage.addChild(new RootComponent());
      }
      if (completed) {
        completed();
      }
    });
  }
  Config.isAntialias = isAntialias === undefined ? true : isAntialias;
  let iw = 1080;
  let ih = 1920;
  if (type === 'vertical') {
    Laya.init(width || iw, height || ih, Laya.WebGL);
    Laya.stage.scaleMode = scaleMode || Laya.Stage.SCALE_FIXED_WIDTH;
    Laya.stage.screenMode = screenMode || Laya.Stage.SCREEN_VERTICAL;
    Laya.stage.frameRate = frameRate || Laya.Stage.FRAME_FAST;
  } else if (type === 'horizontal') {
    Laya.init(width || ih, height || iw, Laya.WebGL);
    Laya.stage.scaleMode = scaleMode || Laya.Stage.SCALE_FIXED_HEIGHT;
    Laya.stage.screenMode = screenMode || Laya.Stage.SCREEN_HORIZONTAL;
    Laya.stage.frameRate = frameRate || Laya.Stage.FRAME_FAST;
  } else if (type === 'desktop') {
    Laya.init(
      width || window.innerWidth,
      height || window.innerHeight,
      Laya.WebGL,
    );
    Laya.stage.scaleMode = scaleMode || Laya.Stage.SCALE_FULL;
    Laya.stage.screenMode = screenMode || Laya.Stage.SCREEN_NONE;
    Laya.stage.frameRate = frameRate || Laya.Stage.FRAME_MOUSE;
  } else {
    if (scaleMode) {
      Laya.stage.scaleMode = scaleMode;
    }
    if (screenMode) {
      Laya.stage.screenMode = screenMode;
    }
    if (screenMode) {
      Laya.stage.frameRate = frameRate;
    }
  }
  Laya.stage.bgColor = bgColor || '#f3f3f4';
  Laya.stage.destroyChildren();
  if (isShowStat) {
    Laya.Stat.show(30, 30);
  }
  if (statPosition) {
    Laya.Stat.show(statPosition[0], statPosition[1]);
  }

  function runInitStartGame() {
    if (versionFile) {
      const file =
        typeof versionFile === 'string' ? versionFile : 'version.json';
      Laya.ResourceVersion.enable(
        file,
        Laya.Handler.create(null, createCallback),
        Laya.ResourceVersion.FILENAME_VERSION,
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
