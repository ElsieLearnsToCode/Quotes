import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/classes/quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotes !: Quote;


  constructor() { }

  ngOnInit(): void {
  }

}
