import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgDialogUpdateTableComponent } from './rg-dialog-update-table.component';

describe('RgDialogUpdateTableComponent', () => {
  let component: RgDialogUpdateTableComponent;
  let fixture: ComponentFixture<RgDialogUpdateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgDialogUpdateTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgDialogUpdateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
