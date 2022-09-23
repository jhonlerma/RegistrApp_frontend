import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgCandidateManagementComponent } from './rg-candidate-management.component';

describe('RgCandidateManagementComponent', () => {
  let component: RgCandidateManagementComponent;
  let fixture: ComponentFixture<RgCandidateManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgCandidateManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgCandidateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
