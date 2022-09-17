import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgAppBarComponent } from './rg-app-bar.component';

describe('RgAppBarComponent', () => {
  let component: RgAppBarComponent;
  let fixture: ComponentFixture<RgAppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgAppBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
