import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyBasedCompotitionsComponent } from './survey-based-compotitions.component';

describe('SurveyBasedCompotitionsComponent', () => {
  let component: SurveyBasedCompotitionsComponent;
  let fixture: ComponentFixture<SurveyBasedCompotitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyBasedCompotitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyBasedCompotitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
