import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/classes/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote [] = [
    new Quote ("What you do makes a difference. But you have to decide what kind of difference you want to make", "Aubrey Graham", "Edith", "02/04/2022", 0, 0),
   new Quote ("Success is not final; Failure is not fatal; it is the courage to continue that counts ", "Robert Mugabe", "Lou", "02/01/2021", 0, 0),
   new Quote ("One day or Day One: You decide", "Yoweri Museveni", "Becky", "18/04/2021", 0, 0),
   new Quote ("Coding is 5% typing and 95% solving problems", "Aubrey Graham", "Edith", "02/04/2022", 0, 0)
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
