import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public upVote = 0;
  public downVote = 0;
  quotes = [
    new Quote(0,0, "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization" ,"written by geo davio"),
    new Quote(0,0, "A good programmer is someone who always looks both ways before crossing a one-way street", "written by Doug Linder"),
    new Quote(0,0,"What i cant do i dont understand", "teabag98")
  ]
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

completeGoal(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);
      }
      }

  constructor() { }
 

  ngOnInit() {
  }

}