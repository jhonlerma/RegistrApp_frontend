import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgPoliticalPartyGetAllComponent } from './rg-political-party-get-all.component';

describe('RgPoliticalPartyGetAllComponent', () => {
  let component: RgPoliticalPartyGetAllComponent;
  let fixture: ComponentFixture<RgPoliticalPartyGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgPoliticalPartyGetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgPoliticalPartyGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
