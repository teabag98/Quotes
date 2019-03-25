export class Quote {
 public showDescription: boolean;
  constructor(public id:number,public downVote:number, public name:string,public description:string,){
  this.showDescription=false
  }
}
