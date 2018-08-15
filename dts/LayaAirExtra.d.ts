/// <reference path="LayaAir.d.ts"/>

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

interface IExtra {
  drawRect: (
    sprite: Laya.Sprite,
    bgColor: string,
    lineColor?: string,
    lineWidth?: number,
  ) => void;
  drawRectOfRadius: (
    sprite: Laya.Sprite,
    bgColor: string,
    lineColor?: string,
    lineWidth?: number,
    radius?: number,
  ) => void;
}

interface IDevice {
  appVersion: string;
  trident: boolean; //IE内核
  presto: boolean; //opera内核
  webKit: boolean; //苹果、谷歌内核
  gecko: boolean; //火狐内核
  mobile: boolean; //是否为移动终端
  ios: boolean; //ios终端
  android: boolean; //android终端
  iPhone: boolean; //是否为iPhone或者QQHD浏览器
  iPad: boolean; //是否iPad
  webApp: boolean; //是否web应该程序，没有头部与底部
  wechat: boolean; //是否微信 （2015-01-22新增）
  qq: boolean;
  language: string;
  isIPhoneX: boolean;
}

interface IFlex {
  full: (node: Laya.Sprite, parent?: Laya.Sprite) => void;
  rule: (
    node: Laya.Sprite,
    direction?: 'col' | 'row',
    justify?: 'start' | 'center' | 'end' | 'between',
    align?: 'start' | 'center' | 'end',
    space?: number,
  ) => void;
}

interface IUtils {
  uuid: () => string;
  device: IDevice;
  fullPage: () => void;
  rxExtra: (rx: any) => void;
  tryFn: (fn: Function) => any;
  memoize: (fn: Function) => any;
}

declare namespace air {
  export const extra: IExtra;
  export const flex: IFlex;
  export const initGame: (props: IScreenOfCreator) => void;
  export const utils: IUtils;
}
