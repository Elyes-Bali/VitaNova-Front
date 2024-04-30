import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNutriComponent } from './profile-nutri.component';

describe('ProfileNutriComponent', () => {
  let component: ProfileNutriComponent;
  let fixture: ComponentFixture<ProfileNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
