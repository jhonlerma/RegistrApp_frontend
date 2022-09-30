import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgConfirmDialogComponent } from './rg-confirm-dialog.component';

describe('RgConfirmDialogComponent', () => {
  let component: RgConfirmDialogComponent;
  let fixture: ComponentFixture<RgConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgConfirmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
