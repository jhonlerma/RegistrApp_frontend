import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgDialogUpdateUserComponent } from './rg-dialog-update-user.component';

describe('RgDialogUpdateUserComponent', () => {
  let component: RgDialogUpdateUserComponent;
  let fixture: ComponentFixture<RgDialogUpdateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgDialogUpdateUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgDialogUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
