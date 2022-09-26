import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgPoliticalPartyGetIdComponent } from './rg-political-party-get-id.component';

describe('RgPoliticalPartyGetIdComponent', () => {
  let component: RgPoliticalPartyGetIdComponent;
  let fixture: ComponentFixture<RgPoliticalPartyGetIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgPoliticalPartyGetIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgPoliticalPartyGetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
