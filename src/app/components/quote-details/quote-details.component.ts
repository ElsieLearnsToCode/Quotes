import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/classes/quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotes !: Quote;
  @Output () deleteQuote = new EventEmitter<boolean>()

  deleteQuoteFromPage(deleteThisQuote: boolean) {
    this.deleteQuote.emit(deleteThisQuote);
  }

  newUpvotes: number = 0;
  newDownvotes: number = 0;

  upvotes () {
    this.newUpvotes ++;
  }

  downvotes () {
    this.newDownvotes ++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
