import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerBannerComponent } from './winner-banner.component';

describe('WinnerBannerComponent', () => {
  let component: WinnerBannerComponent;
  let fixture: ComponentFixture<WinnerBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
