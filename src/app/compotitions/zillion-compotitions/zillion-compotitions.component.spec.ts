import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZillionCompotitionsComponent } from './zillion-compotitions.component';

describe('ZillionCompotitionsComponent', () => {
  let component: ZillionCompotitionsComponent;
  let fixture: ComponentFixture<ZillionCompotitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZillionCompotitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZillionCompotitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
