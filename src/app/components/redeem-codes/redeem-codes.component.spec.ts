import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemCodesComponent } from './redeem-codes.component';

describe('RedeemCodesComponent', () => {
  let component: RedeemCodesComponent;
  let fixture: ComponentFixture<RedeemCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
