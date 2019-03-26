import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
newQuote=new Quote(0,0,"","");
@Output() addQuote=new EventEmitter<Quote>();
  constructor() { }
addNewQuote(){
  this.addQuote.emit(this.newQuote);
}
  ngOnInit() {
  }

}
