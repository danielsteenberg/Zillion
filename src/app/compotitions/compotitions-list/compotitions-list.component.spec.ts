import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompotitionsListComponent } from './compotitions-list.component';

describe('CompotitionsListComponent', () => {
  let component: CompotitionsListComponent;
  let fixture: ComponentFixture<CompotitionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompotitionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompotitionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
