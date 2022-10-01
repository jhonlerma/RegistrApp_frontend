import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgCityzenRegisterComponent } from './rg-cityzen-register.component';

describe('CityzenRegisterComponent', () => {
  let component: RgCityzenRegisterComponent;
  let fixture: ComponentFixture<RgCityzenRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgCityzenRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgCityzenRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
