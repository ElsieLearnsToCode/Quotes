import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/classes/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote [] = [
    new Quote ("What you do makes a difference. But you have to decide what kind of difference you want to make.", "Aubrey Graham", "Edith", "02/04/2022", 0, 0),
   new Quote ("Success is not final; Failure is not fatal; it is the courage to continue that counts.", "Robert Mugabe", "Lou", "02/01/2021", 0, 0),
   new Quote ("After climbing a great hill, one only finds that there are many more hills to climb.", "Nelson Mandela", "Becky", "18/04/2021", 0, 0),
   new Quote ("As we let our own light shine, we unconsciously give other people permission to do the same.", "Nelson Mandela", "Edith", "02/04/2022", 0, 0)
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
