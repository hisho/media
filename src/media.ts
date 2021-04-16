import {MediaCallBack,MediaOptions} from './types';

export class Media {
  private readonly mediaQuery: MediaQueryList;
  private mach?: MediaCallBack = undefined;
  private unmatch?: MediaCallBack = undefined;

  constructor(query: string, options?: Partial<MediaOptions>) {
    this.mediaQuery = window.matchMedia(query);
    this.mach = options?.mach;
    this.unmatch = options?.unmatch;
    this.handler();
    this.register();
  }

  public readonly on = (type: ('mach' | 'unMach'), callBack: MediaCallBack): void | never => {
    switch (type) {
      case "mach":
        this.mach = callBack;
        break;
      case "unMach":
        this.unmatch = callBack;
        break;
      default:
        new Error(`${type} does not exist`);
        break;
    }
  }

  public readonly isMatch = (): boolean => {
    return this.mediaQuery.matches;
  };

  private readonly handler = (event?: MediaQueryListEvent): void => {
    const isMach = event ? event.matches : this.isMatch();
    if (isMach) {
      if (this.mach) {
        this.mach();
      }
    } else {
      if (this.unmatch) {
        this.unmatch();
      }
    }
  };

  public readonly register = (): void => {
    try {
      this.mediaQuery.addEventListener('change', this.handler);
    } catch {
      console.log('MediaQueryList addEventListener does not found');
      this.mediaQuery.addListener(this.handler);
    }
  };

  public readonly unregister = (): void => {
    try {
      this.mediaQuery.removeEventListener('change', this.handler);
    } catch {
      console.log('MediaQueryList addEventListener does not found');
      this.mediaQuery.removeListener(this.handler);
    }
  };
}
