import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgNotFoundComponent } from './rg-not-found.component';

describe('RgNotFoundComponent', () => {
  let component: RgNotFoundComponent;
  let fixture: ComponentFixture<RgNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
