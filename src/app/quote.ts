export class Quote {
  public showDescription: boolean;
  constructor(public name: string, public description: string, public submit: string, public completeDate: Date, public upVote: number, public downVote: number){
    this.showDescription = false;
  }

}
