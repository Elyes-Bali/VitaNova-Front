import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListconssultationComponent } from './listconssultation.component';

describe('ListconssultationComponent', () => {
  let component: ListconssultationComponent;
  let fixture: ComponentFixture<ListconssultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListconssultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListconssultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
