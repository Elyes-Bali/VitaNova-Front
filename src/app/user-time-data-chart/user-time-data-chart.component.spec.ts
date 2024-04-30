import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimeDataChartComponent } from './user-time-data-chart.component';

describe('UserTimeDataChartComponent', () => {
  let component: UserTimeDataChartComponent;
  let fixture: ComponentFixture<UserTimeDataChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTimeDataChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTimeDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
