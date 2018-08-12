import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
     new Quote('Andre Gide', 'Life is what happens when you’re busy making other plans', 'Diana', new Date (2018, 5, 6)),
     new Quote('Seneca', 'Not how long, but how well you have lived is the main thing', 'Rosemary', new Date (2018, 8, 2)),
     new Quote('Marcus ', 'Do not take life too seriously. You will never get out of it alive.', 'Kennedy', new Date (2017, 1, 12)),
     new Quote('Gabor', 'I tell you, in this world being a little crazy helps to keep you sane.', 'Veronicah', new Date (2018, 3, 11)),
  ];

  displayDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
if (isComplete) {
  const toDelete = confirm(`Do you want to delete this Quote!!! ${this.quotes[index].name}`);
this.quotes.splice(index, 1);

if (toDelete) {
  this.quotes.splice(index, 1);
  }
}
}
  constructor() { }

  ngOnInit() {
  }

}
