import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondPopupComponent } from './diamond-popup.component';

describe('DiamondPopupComponent', () => {
  let component: DiamondPopupComponent;
  let fixture: ComponentFixture<DiamondPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiamondPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
