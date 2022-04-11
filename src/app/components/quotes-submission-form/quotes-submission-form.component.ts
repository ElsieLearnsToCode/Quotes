import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/classes/form';


@Component({
  selector: 'app-quotes-submission-form',
  templateUrl: './quotes-submission-form.component.html',
  styleUrls: ['./quotes-submission-form.component.css']
})
export class QuotesSubmissionFormComponent implements OnInit {
  quote !: string;
  quoteAuthor !: string;
  submittedBy !: string;
  date !: Date;
  newQuote: any;
  
  quotes = [
  ]

  submitQuote () {
    this.newQuote (this.quote, this.quoteAuthor, this.submittedBy, new Date())
    this.quotes.push();
  }


  constructor() { }

  ngOnInit(): void {
  }

}
