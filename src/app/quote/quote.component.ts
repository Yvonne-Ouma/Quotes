import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
     new Quote('Dont let your failure define you', 'thats the me'),
     new Quote('Am doing my thing though', 'stannd out for myself'),
  ];

  displayDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
