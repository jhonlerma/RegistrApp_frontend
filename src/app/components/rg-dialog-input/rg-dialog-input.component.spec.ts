import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgDialogInputComponent } from './rg-dialog-input.component';

describe('RgDialogInputComponent', () => {
  let component: RgDialogInputComponent;
  let fixture: ComponentFixture<RgDialogInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgDialogInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgDialogInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
