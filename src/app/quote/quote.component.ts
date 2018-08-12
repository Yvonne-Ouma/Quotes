import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
     new Quote('Dont let your failure define you', 'thats the me', new Date (2018, 5, 6)),
     new Quote('Am doing my thing though', 'stannd out for myself', new Date (2018, 6, 8)),
  ];

  displayDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index) {
if (isComplete) {
this.quotes.splice(index, 1);
}
  }
  constructor() { }

  ngOnInit() {
  }

}
