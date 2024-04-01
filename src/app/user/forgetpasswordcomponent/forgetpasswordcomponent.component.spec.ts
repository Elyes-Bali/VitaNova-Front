import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordcomponentComponent } from './forgetpasswordcomponent.component';

describe('ForgetpasswordcomponentComponent', () => {
  let component: ForgetpasswordcomponentComponent;
  let fixture: ComponentFixture<ForgetpasswordcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpasswordcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetpasswordcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
