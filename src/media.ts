type MediaCallBack = () => void;
type MediaOptions = {
  mach: MediaCallBack,
  unMatch: MediaCallBack,
}

export class Media {
  private readonly mediaQuery: MediaQueryList;
  private mach?: MediaCallBack = undefined;
  private unMatch?: MediaCallBack = undefined;

  constructor(query: string, options?: Partial<MediaOptions>) {
    this.mediaQuery = window.matchMedia(query);
    this.mach = options?.mach;
    this.unMatch = options?.unMatch;
    this.register();
  }

  public readonly on = (type: ('mach' | 'unMach'), callBack: MediaCallBack): void | never => {
    switch (type) {
      case "mach":
        this.mach = callBack;
        break;
      case "unMach":
        this.unMatch = callBack;
        break;
      default:
        new Error(`${type} does not exist`);
        break;
    }
  }

  public readonly isMatch = (): boolean => {
    return this.mediaQuery.matches;
  };

  private readonly handler = (event: MediaQueryListEvent): void => {
    const isMach = event.matches;
    if (isMach) {
      if (this.mach) {
        this.mach();
      }
    } else {
      if (this.unMatch) {
        this.unMatch();
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
