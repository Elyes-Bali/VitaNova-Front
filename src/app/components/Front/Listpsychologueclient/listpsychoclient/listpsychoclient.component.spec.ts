import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpsychoclientComponent } from './listpsychoclient.component';

describe('ListpsychoclientComponent', () => {
  let component: ListpsychoclientComponent;
  let fixture: ComponentFixture<ListpsychoclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpsychoclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpsychoclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
