// ..........................................................................
// POKI SDK TypeScript Definitions
// ..........................................................................

type PokiSDKStringURL = string;

declare class PokiSDK {
  static setDebug: (enable: boolean) => void;
  static init: () => Promise<void>;
  static gameLoadingFinished: () => void;
  static gameplayStart: () => void;
  static gameplayStop: () => void;
  static commercialBreak: (cbWhenStarted?: () => any) => Promise<void>;
  static rewardedBreak: (cbWhenStarted?: () => any) => Promise<boolean>;
  static getLanguage: () => string;
  static generateScreenshot: () => Promise<PokiSDKStringURL>; // internal?
  static enableEventTracking: (enable: boolean) => void;
  static shareableURL: (params: Record<string, any>) => Promise<PokiSDKStringURL>;
  static getURLParam: (paramName: string) => string;
  static playtestSetCanvas: (canvas: HTMLCanvasElement) => void;
}

declare global {
  interface Window {
    PokiSDK: PokiSDK;
  }
}
