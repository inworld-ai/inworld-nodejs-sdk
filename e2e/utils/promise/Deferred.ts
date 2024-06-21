type Rejecter = (error: Error) => void;
type Resolver<T> = (result: PromiseLike<T> | T) => void;

interface DeferredState<T = unknown> {
  resolved: boolean;
  rejected: boolean;
  rejecter: Rejecter;
  resolver: Resolver<T>;
  result?: T;
}

const createNoopResolver = <T>(): Resolver<T> =>
  function deferredResolver() {
    return undefined;
  };
const createNoopRejecter = (): Rejecter =>
  function deferredRejecter() {
    return undefined;
  };

class Deferred<T> {
  public get resolved(): boolean {
    return this.state.resolved;
  }

  public get rejected(): boolean {
    return this.state.rejected;
  }

  public get finished(): boolean {
    return this.state.resolved || this.state.rejected;
  }

  public promise: Promise<T>;

  private state: DeferredState<T> = {
    resolved: false,
    rejected: false,
    resolver: createNoopResolver<T>(),
    rejecter: createNoopRejecter(),
  };

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.state.resolver = resolve;
      this.state.rejecter = reject;
    });
  }

  public resolve(value: T) {
    const { state } = this;
    if (state.resolved || state.rejected) {
      return;
    }

    state.resolved = true;
    state.rejected = false;
    state.result = value;
    state.resolver(value);
  }

  public reject(error: Error) {
    const { state } = this;
    if (state.resolved || state.rejected) {
      return;
    }

    this.state.resolved = false;
    this.state.rejected = true;
    this.state.rejecter(error);
  }
}

export default Deferred;
