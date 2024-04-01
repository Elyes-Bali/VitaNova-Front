import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordcomponentComponent } from './resetpasswordcomponent.component';

describe('ResetpasswordcomponentComponent', () => {
  let component: ResetpasswordcomponentComponent;
  let fixture: ComponentFixture<ResetpasswordcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpasswordcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetpasswordcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
