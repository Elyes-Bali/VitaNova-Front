import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRapportPsyComponent } from './list-rapport-psy.component';

describe('ListRapportPsyComponent', () => {
  let component: ListRapportPsyComponent;
  let fixture: ComponentFixture<ListRapportPsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRapportPsyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRapportPsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
