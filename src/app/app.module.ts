import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { QuotesSubmissionFormComponent } from './components/quotes-submission-form/quotes-submission-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    QuotesSubmissionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
