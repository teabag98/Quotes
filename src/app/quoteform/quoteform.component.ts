import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
newQuote=new Quote(0,0,"","")

  constructor() { }

  ngOnInit() {
  }

}
