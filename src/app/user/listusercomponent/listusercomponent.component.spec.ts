import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusercomponentComponent } from './listusercomponent.component';

describe('ListusercomponentComponent', () => {
  let component: ListusercomponentComponent;
  let fixture: ComponentFixture<ListusercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListusercomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListusercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
