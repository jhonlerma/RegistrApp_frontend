import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgPrivateMainComponent } from './rg-private-main.component';

describe('RgPrivateMainComponent', () => {
  let component: RgPrivateMainComponent;
  let fixture: ComponentFixture<RgPrivateMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgPrivateMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgPrivateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
