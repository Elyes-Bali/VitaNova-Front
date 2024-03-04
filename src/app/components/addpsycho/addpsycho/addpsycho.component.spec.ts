import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpsychoComponent } from './addpsycho.component';

describe('AddpsychoComponent', () => {
  let component: AddpsychoComponent;
  let fixture: ComponentFixture<AddpsychoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpsychoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpsychoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
