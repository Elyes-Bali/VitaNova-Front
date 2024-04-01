import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteconssultationComponent } from './deleteconssultation.component';

describe('DeleteconssultationComponent', () => {
  let component: DeleteconssultationComponent;
  let fixture: ComponentFixture<DeleteconssultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteconssultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteconssultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
