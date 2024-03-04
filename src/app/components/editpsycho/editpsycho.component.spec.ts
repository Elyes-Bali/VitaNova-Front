import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpsychoComponent } from './editpsycho.component';

describe('EditpsychoComponent', () => {
  let component: EditpsychoComponent;
  let fixture: ComponentFixture<EditpsychoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpsychoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpsychoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
