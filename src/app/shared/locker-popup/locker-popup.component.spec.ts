import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerPopupComponent } from './locker-popup.component';

describe('LockerPopupComponent', () => {
  let component: LockerPopupComponent;
  let fixture: ComponentFixture<LockerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
