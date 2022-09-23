import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgPermissionManagementComponent } from './rg-permission-management.component';

describe('RgPermissionManagementComponent', () => {
  let component: RgPermissionManagementComponent;
  let fixture: ComponentFixture<RgPermissionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgPermissionManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgPermissionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
