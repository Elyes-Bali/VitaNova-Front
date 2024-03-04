import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRapportpsyComponent } from './editrapportpsy.component';

describe('EditRapportpsyComponent', () => {
  let component: EditRapportpsyComponent;
  let fixture: ComponentFixture<EditRapportpsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRapportpsyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRapportpsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
