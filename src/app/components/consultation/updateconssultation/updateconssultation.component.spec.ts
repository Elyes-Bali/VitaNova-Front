import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconssultationComponent } from './updateconssultation.component';

describe('UpdateconssultationComponent', () => {
  let component: UpdateconssultationComponent;
  let fixture: ComponentFixture<UpdateconssultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateconssultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateconssultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
