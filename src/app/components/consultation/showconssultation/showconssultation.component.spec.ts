import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowconssultationComponent } from './showconssultation.component';

describe('ShowconssultationComponent', () => {
  let component: ShowconssultationComponent;
  let fixture: ComponentFixture<ShowconssultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowconssultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowconssultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
