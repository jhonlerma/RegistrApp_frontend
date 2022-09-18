import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgPublicMainComponent } from './rg-public-main.component';

describe('RgPublicMainComponent', () => {
  let component: RgPublicMainComponent;
  let fixture: ComponentFixture<RgPublicMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgPublicMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgPublicMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
