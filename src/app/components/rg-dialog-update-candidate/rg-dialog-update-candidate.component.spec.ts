import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgDialogUpdateCandidateComponent } from './rg-dialog-update-candidate.component';

describe('RgDialogUpdateCandidateComponent', () => {
  let component: RgDialogUpdateCandidateComponent;
  let fixture: ComponentFixture<RgDialogUpdateCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgDialogUpdateCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgDialogUpdateCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
