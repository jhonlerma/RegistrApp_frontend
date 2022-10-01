import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgDialogUpdatePoliticalPartyComponent } from './rg-dialog-update-political-party.component';

describe('RgDialogUpdatePoliticalPartyComponent', () => {
  let component: RgDialogUpdatePoliticalPartyComponent;
  let fixture: ComponentFixture<RgDialogUpdatePoliticalPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgDialogUpdatePoliticalPartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgDialogUpdatePoliticalPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
