import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryCompotitionsComponent } from './directory-compotitions.component';

describe('DirectoryCompotitionsComponent', () => {
  let component: DirectoryCompotitionsComponent;
  let fixture: ComponentFixture<DirectoryCompotitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryCompotitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryCompotitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
