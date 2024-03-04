import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPsychologueComponent } from './list-psychologue.component';

describe('ListPsychologueComponent', () => {
  let component: ListPsychologueComponent;
  let fixture: ComponentFixture<ListPsychologueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPsychologueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPsychologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
