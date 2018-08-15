interface INavigator {
  checkPermission?: (
    permission?:
      | 'CAMERA'
      | 'CONTACTS'
      | 'GALLERY'
      | 'LOCATION'
      | 'NOTIFITION'
      | 'RECORD'
      | 'SHORTCUT'
      | any,
  ) =>
    | 'authorized'
    | 'undetermined'
    | 'notdeny'
    | 'unknown'
    | 'unsupported'
    | any;
  closeSplashscreen?: () => any;
  hasSplashscreen?: () => boolean;
  updateSplashscreen?: (options: ISplashscreenOptions) => any;
  createShortcut?: (
    options?: IShortcutOptions,
    successCallback?: (
      event:
        | any
        | 'existing'
        | 'none'
        | 'unsupported'
        | 'unknown'
        | false
        | true,
    ) => any,
  ) => any;
  hasShortcut?: (
    options?: IShortcutOptions,
    successCallback?: (
      event:
        | any
        | 'existing'
        | 'none'
        | 'unsupported'
        | 'unknown'
        | false
        | true,
    ) => any,
  ) => any;
  isBackground?: () => boolean;
  isFullscreen?: () => boolean;
  isLogs?: () => boolean;
  setFullscreen?: (isFull: boolean) => any;
  setLogs?: (isLog: boolean) => any;
  setStatusBarBackground?: (color: string) => any;
  getStatusBarBackground?: () => string;
  setStatusBarStyle?: (style: 'dark' | 'light') => any;
  getStatusBarStyle?: () => any;
  getStatusbarHeight?: () => number;
  isImmersedStatusbar?: () => boolean;
  setUserAgent?: (useragent?: string, checkplus?: boolean) => any;
  getUserAgent?: () => string;
  setCookie?: (url: string, value: string) => any;
  getCookie?: (url: string) => string;
  removeAllCookie?: () => any;
  removeCookie?: (url: string) => any;
  removeSessionCookie?: () => any;
}

interface IShortcutOptions {
  name?: string;
  icon?: string;
  toast?: string;
  extra?: any;
  classname?: string;
  force?: boolean;
}

interface ISplashscreenOptions {
  image?: string;
  autoclose?: boolean;
  autoclose_w2a?: boolean;
  delay?: boolean;
  delay_w2a?: number;
}

interface IAcceleration {
  xAxis?: number;
  yAxis?: number;
  zAxis?: number;
}

interface IAccelerationOption {
  frequency?: string;
}

interface IAccelerometer {
  getCurrentAcceleration?: (
    successCB?: (v?: IAcceleration) => any,
    errorCB?: Function,
  ) => void;
  watchAcceleration?: (
    successCB?: Function,
    errorCB?: Function,
    option?: any,
  ) => any;
  clearWatch?: (watchId?: any) => any;
  Acceleration?: IAcceleration;
  AccelerationOption?: IAccelerationOption;
}

interface IBarcode {
  QR?: number;
  EAN13?: number;
  EAN8?: number;
  AZTEC?: number;
  DATAMATRIX?: number;
  UPCA?: number;
  UPCE?: number;
  CODABAR?: number;
  CODE39?: number;
  CODE93?: number;
  CODE128?: number;
  ITF?: number;
  MAXICODE?: number;
  PDF417?: number;
  RSS14?: number;
  RSSEXPANDED?: number;
  scan?: (
    path?: string,
    successCB?: (type?: number, code?: string, file?: string) => any,
    errorCB?: Function,
    filters?: any,
  ) => any;
  create?: (
    id?: string,
    filters?: Array<number>,
    styles?: IBarcodeStyles,
  ) => any;
  getBarcodeById?: (id?: number) => any;
  Barcode?: (
    id?: string,
    filters?: Array<number>,
    styles?: IBarcodeStyles,
  ) => any;
  BarcodeStyles?: IBarcodeStyles;
  BarcodeOptions?: any;
}

interface IBarcodeOptions {
  conserve?: boolean;
  filename?: string;
  vibrate?: boolean;
  sound?: string;
}

interface IBarcodeStyles {
  top?: string;
  left?: string;
  width?: string;
  height?: string;
  position?: string;
  background?: string;
  frameColor?: string;
}

interface IBarcodeObj {
  start?: (option?: IBarcodeOptions) => any;
  cancel?: () => any;
  close?: () => any;
  setFlash?: (open) => any;
  onmarked?: () => any;
  onerror?: () => any;
}

interface Preview_IEvents {
  plusready?: string;
  pause?: string;
  resume?: string;
  netchange?: string;
  newintent?: string;
  plusscrollbottom?: string;
  error?: string;
  background?: string;
  foreground?: string;
  trimmemory?: string;
  splashclosed?: string;
}

interface IDevice {
  imei?: string;
  imsi?: string;
  model?: string;
  vendor?: string;
  uuid?: string;
  dial?: (number?: string, confirm?: boolean) => any;
  deep?: (time?: number) => any;
  vibrate?: (milliseconds?: number) => any;
  setWakelock?: (lock?: boolean) => any;
  isWakelock?: () => boolean;
  setVolume?: (volume?: number) => any;
  getVolume?: () => number;
  screen?: IScreen;
  display?: IDisplay;
  networkinfo?: INetworkinfo;
  os?: IOS;
}

interface IDisplay {
  resolutionHeight?: number;
  resolutionWidth?: number;
}

interface IScreen {
  resolutionHeight?: number;
  resolutionWidth?: number;
  scale?: number;
  dipX?: number;
  dipY?: number;
  setBrightness?: (brightness?: number) => any;
  getBrightness?: () => number;
  lockOrientation?: (
    orientation?:
      | 'landscape'
      | 'portrait-primary'
      | 'portrait-secondary'
      | 'landscape-primary'
      | 'landscape-secondary',
  ) => any;
  unlockOrientation?: (light?: number) => any;
}

interface INetworkinfo {
  CONNECTION_UNKNOW?: any;
  CONNECTION_NONE?: any;
  CONNECTION_ETHERNET?: any;
  CONNECTION_WIFI?: any;
  CONNECTION_CELL2G?: any;
  CONNECTION_CELL3G?: any;
  CONNECTION_CELL4G?: any;
  getCurrentType?: () => number;
}

interface IOS {
  language?: string;
  version?: string;
  name?: string;
  vendor?: string;
}

interface ICamera {
  getCamera?: (index?: number) => any;
  Camera?: ICameraObj;
  CameraOptions?: ICameraOptions;
  PopPosition?: IPopPosition;
}

interface ICameraObj {
  supportedImageResolutions?: Array<string>;
  supportedVideoResolutions?: Array<string>;
  supportedImageFormats?: Array<string>;
  supportedVideoFormats?: Array<string>;
  captureImage?: (
    successCB?: (capturedFile?: string) => any,
    errorCB?: Function,
    option?: ICameraOptions,
  ) => any;
  startVideoCapture?: (
    successCB?: (capturedFile?: string) => any,
    errorCB?: Function,
    option?: ICameraOptions,
  ) => any;
  stopVideoCapture?: () => any;
}
interface ICameraOptions {
  filename?: string;
  format?: string;
  index?: string;
  resolution?: string;
  popover?: IPopPosition;
}
interface IPopPosition {
  top?: string;
  left?: string;
  width?: string;
  height?: string;
}

interface IContacts {
  ADDRESSBOOK_PHONE?: any;
  ADDRESSBOOK_SIM?: any;
  getAddressBook?: (
    type?: any,
    addressbookCB?: (addressBook?: any) => any,
  ) => any;
  AddressBook?: any;
  Contact?: any;
  ContactField?: any;
  ContactName?: any;
  ContactAddress?: any;
  ContactOrganization?: any;
  ContactFindOption?: any;
  ContactFindFilter?: any;
}

interface IDownloader {
  createDownload?: (
    url?: string,
    options?: IDownloadOptions,
    completedCB?: Function,
  ) => any;
  enumerate: (
    enumCB?: (download?: IDownloader, status?: number) => any,
    state?: number,
  ) => any;
  clear?: (state?: number) => any;
  startAll?: () => any;
  Download?: IDownloadObj;
  DownloadEvent?: any;
  DownloadState?: any;
  DownloadOptions?: IDownloadOptions;
  downloadState_preview?: Preview_IDownloaderState;
}

interface IDownloadObj {
  id?: string;
  url?: string;
  state?: number;
  options?: IDownloadOptions;
  filename?: string;
  downloadedSize?: number;
  totalSize?: number;
  abort?: () => any;
  addEventListener?: (
    event?: string,
    listener?: Function,
    capture?: boolean,
  ) => any;
  getAllResponseHeaders?: () => string;
  getResponseHeader?(headerName?: string): string;
  pause?(): any;
  resume?(): any;
  setRequestHeader?(headerName?: string, headerValue?: string): any;
  start?(): any;
}

interface IDownloadOptions {
  method?: string;
  data?: string;
  filename?: string;
  priority?: number;
  timeout?: number;
  retry?: number;
  retryInterval?: number;
}

interface Preview_IDownloaderState {
  unStart_undefined?: undefined;
  start_0?: 0;
  start_quest_1?: 1;
  request_2?: 2;
  downloadData_3?: 3;
  didDownloadData_4?: 4;
  downloadTaskPause_5?: 5;
  allDownloadStatus__1?: -1;
}

interface IRuntime {
  appid?: string;
  arguments?: string;
  channel?: string;
  launcher?: string;
  origin?:
    | string
    | 'default'
    | 'stream'
    | 'push'
    | 'scheme'
    | 'barcode'
    | 'silent'
    | 'speech'
    | 'favorite';
  version?: string;
  innerVersion?: string;
  launchLoadedTime?: number;
  processId?: string;
  startupTime?: number;
  getProperty?: (appid: string, getPropertyCB: Function) => any;
  install?: (
    filePath?: string,
    options?: IWidgetOptions,
    installSuccessCB?: (widgetInfo?: IWidgetInfo) => any,
    installErrorCB?: Function,
  ) => any;
  quit?: () => any;
  restart?: () => any;
  setBadgeNumber?: (tipNumber: number) => any;
  openURL?: (url: string, errorCB?: Function, identity?: string) => any;
  openWeb?: (url) => any;
  openFile?: (filepath, options?: IOpenFileOptions, errorCB?: Function) => any;
  processDirectPage?: () => any;
  launchApplication?: (appInf: IApplicationInf, errorCB: Function) => any;
  isApplicationExist?: (appInf: IApplicationInf) => any;
  isCustomLaunchPath?: () => any;
}

interface IOpenFileOptions {
  pname?: string;
  popover?: IPopPosition;
}

interface IApplicationInf {
  pname?: string;
  action?: string;
  extra?: string;
}

interface IWidgetOptions {
  force?: boolean;
}

interface IWidgetInfo {
  appid: string; //(String 类型 )应用的APPID
  version: string; // (String 类型 )应用的版本号
  name: string; // (String 类型 )应用的名称
  description: string; // (String 类型 )应用描述信息
  author: string; // (String 类型 )应用描述信息
  email: string; // (String 类型 )开发者邮箱地址
  license: string; // (String 类型 )应用授权描述信息
  licensehref: string; // (String 类型 )应用授权说明链接地址
  features: Array<string>; // (String[] 类型 )应用许可特性列表
}

interface IKey {
  addEventListener: (keyevent:IKeyType, listener, capture?) => any;
}

interface IKeyType {

}

declare namespace plus {
  export const accelerometer: IAccelerometer;
  export const barcode: IBarcode;
  export const events_preview: Preview_IEvents;
  export const device: IDevice;
  export const camera: ICamera;
  export const contacts: IContacts;
  export const downloader: IDownloader;
  export const fingerprint;
  export const gallery;
  export const geolocation;
  export const io;
  export const key;
  export const maps;
  export const messaging;
  export const nativeObj;
  export const nativeUI;
  export const navigator: INavigator;
  export const oauth;
  export const orientation;
  export const payment;
  export const proximity;
  export const push;
  export const runtime: IRuntime;
  export const share;
  export const speech;
  export const statistic;
  export const storage;
  export const uploader;
  export const video;
  export const webview;
  export const net;
  export const zip;
}
