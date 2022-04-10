export class Quote {
    showQuoteDetails: boolean;
    constructor(public quote:string, public quoteAuthor:string, public submittedBy:string, public dateSubmitted:string, public upvotes:number, public downvotes:number ) {
        this.showQuoteDetails = false;
    }
}
