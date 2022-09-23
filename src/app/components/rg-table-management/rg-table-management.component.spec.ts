import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgTableManagementComponent } from './rg-table-management.component';

describe('RgTableManagementComponent', () => {
  let component: RgTableManagementComponent;
  let fixture: ComponentFixture<RgTableManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgTableManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgTableManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
