import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgPoliticalPartyManagementComponent } from './rg-political-party-management.component';

describe('RgPoliticalPartyManagementComponent', () => {
  let component: RgPoliticalPartyManagementComponent;
  let fixture: ComponentFixture<RgPoliticalPartyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgPoliticalPartyManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgPoliticalPartyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
