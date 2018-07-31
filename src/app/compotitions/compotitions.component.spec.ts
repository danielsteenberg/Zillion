import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompotitionsComponent } from './compotitions.component';

describe('CompotitionsComponent', () => {
  let component: CompotitionsComponent;
  let fixture: ComponentFixture<CompotitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompotitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompotitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
