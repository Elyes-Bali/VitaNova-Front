import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRapportPsyComponent } from './add-rapport-psy.component';

describe('AddRapportPsyComponent', () => {
  let component: AddRapportPsyComponent;
  let fixture: ComponentFixture<AddRapportPsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRapportPsyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRapportPsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
