import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgReportsViewerComponent } from './rg-reports-viewer.component';

describe('RgReportsViewerComponent', () => {
  let component: RgReportsViewerComponent;
  let fixture: ComponentFixture<RgReportsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgReportsViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgReportsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
