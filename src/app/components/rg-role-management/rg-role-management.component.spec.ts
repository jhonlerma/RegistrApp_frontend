import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgRoleManagementComponent } from './rg-role-management.component';

describe('RgRoleManagementComponent', () => {
  let component: RgRoleManagementComponent;
  let fixture: ComponentFixture<RgRoleManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgRoleManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgRoleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
