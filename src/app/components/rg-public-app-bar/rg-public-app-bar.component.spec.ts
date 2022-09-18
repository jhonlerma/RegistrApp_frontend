import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgPublicAppBarComponent } from './rg-public-app-bar.component';

describe('RgPublicAppBarComponent', () => {
  let component: RgPublicAppBarComponent;
  let fixture: ComponentFixture<RgPublicAppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgPublicAppBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgPublicAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
