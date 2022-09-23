import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgUserManagementComponent } from './rg-user-management.component';

describe('RgUserManagementComponent', () => {
  let component: RgUserManagementComponent;
  let fixture: ComponentFixture<RgUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgUserManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
