export class Quote {
  public showDescription: boolean;
  constructor(public name: string, public description: string) {
    this.showDescription = false;
  }

}
