import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNutriComponent } from './chart-nutri.component';

describe('ChartNutriComponent', () => {
  let component: ChartNutriComponent;
  let fixture: ComponentFixture<ChartNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
