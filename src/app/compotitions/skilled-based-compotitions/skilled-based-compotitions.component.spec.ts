import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilledBasedCompotitionsComponent } from './skilled-based-compotitions.component';

describe('SkilledBasedCompotitionsComponent', () => {
  let component: SkilledBasedCompotitionsComponent;
  let fixture: ComponentFixture<SkilledBasedCompotitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilledBasedCompotitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilledBasedCompotitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
