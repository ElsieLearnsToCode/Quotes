import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/classes/form';


@Component({
  selector: 'app-quotes-submission-form',
  templateUrl: './quotes-submission-form.component.html',
  styleUrls: ['./quotes-submission-form.component.css']
})
export class QuotesSubmissionFormComponent implements OnInit {
  // form: Form[] = [];
  // newForm!: string;


  // form: Form[] = [];
  // newForm!: string;
  quote!: string;
  quoteAuthor!: string;
  submittedBy!: string;
  date!: Date;
  newQuote!: any;
  
  form = [
    new Form("ghkj","Andrew","elsie", new Date )
  ];

  submitQuote () {
    this.newQuote (this.quote, this.quoteAuthor, this.submittedBy, new Date())
    this.form.push();
    // let form = new Form("yolo", "abcde", "Elsie", new Date());
  }


  constructor() { }

  ngOnInit(): void {
  }

}
