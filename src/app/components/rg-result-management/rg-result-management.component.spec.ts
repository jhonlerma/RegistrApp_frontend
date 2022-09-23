import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgResultManagementComponent } from './rg-result-management.component';

describe('RgResultManagementComponent', () => {
  let component: RgResultManagementComponent;
  let fixture: ComponentFixture<RgResultManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgResultManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgResultManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
