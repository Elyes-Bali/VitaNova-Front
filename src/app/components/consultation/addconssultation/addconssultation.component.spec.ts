import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconssultationComponent } from './addconssultation.component';

describe('AddconssultationComponent', () => {
  let component: AddconssultationComponent;
  let fixture: ComponentFixture<AddconssultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddconssultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddconssultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
