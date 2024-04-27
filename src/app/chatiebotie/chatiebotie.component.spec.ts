import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatiebotieComponent } from './chatiebotie.component';

describe('ChatiebotieComponent', () => {
  let component: ChatiebotieComponent;
  let fixture: ComponentFixture<ChatiebotieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatiebotieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatiebotieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
