import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesSubmissionFormComponent } from './quotes-submission-form.component';

describe('QuotesSubmissionFormComponent', () => {
  let component: QuotesSubmissionFormComponent;
  let fixture: ComponentFixture<QuotesSubmissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesSubmissionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesSubmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
