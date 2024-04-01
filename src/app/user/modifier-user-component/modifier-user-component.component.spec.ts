import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUserComponentComponent } from './modifier-user-component.component';

describe('ModifierUserComponentComponent', () => {
  let component: ModifierUserComponentComponent;
  let fixture: ComponentFixture<ModifierUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierUserComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
