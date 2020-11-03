export namespace Settings {
  export class SetPageType {
    static readonly type = '[Settings] set page type';
    constructor(public pageTypeId: number) {}
  }
}
