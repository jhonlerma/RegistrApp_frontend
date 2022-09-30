import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityzenRegisterComponent } from './cityzen-register.component';

describe('CityzenRegisterComponent', () => {
  let component: CityzenRegisterComponent;
  let fixture: ComponentFixture<CityzenRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityzenRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityzenRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
