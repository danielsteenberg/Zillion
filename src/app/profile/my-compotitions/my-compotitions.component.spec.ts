import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompotitionsComponent } from './my-compotitions.component';

describe('MyCompotitionsComponent', () => {
  let component: MyCompotitionsComponent;
  let fixture: ComponentFixture<MyCompotitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCompotitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompotitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
