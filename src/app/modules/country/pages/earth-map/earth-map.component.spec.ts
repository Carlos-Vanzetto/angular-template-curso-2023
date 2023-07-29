import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthMapComponent } from './earth-map.component';

describe('EarthMapComponent', () => {
  let component: EarthMapComponent;
  let fixture: ComponentFixture<EarthMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarthMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
