export namespace Pages {
  export class Add {
    static readonly type = '[Pages] Add';
    constructor() {}
  }

  export class Remove {
    static readonly type = '[Pages] Remove';
    constructor() {}
  }

  export class Reset {
    static readonly type = '[Pages] Reset';
  }
}
