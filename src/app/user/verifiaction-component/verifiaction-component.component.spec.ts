import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiactionComponentComponent } from './verifiaction-component.component';

describe('VerifiactionComponentComponent', () => {
  let component: VerifiactionComponentComponent;
  let fixture: ComponentFixture<VerifiactionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiactionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiactionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
