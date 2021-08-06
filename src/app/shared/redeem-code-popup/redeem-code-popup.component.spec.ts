import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemCodePopupComponent } from './redeem-code-popup.component';

describe('RedeemCodePopupComponent', () => {
  let component: RedeemCodePopupComponent;
  let fixture: ComponentFixture<RedeemCodePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemCodePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemCodePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
