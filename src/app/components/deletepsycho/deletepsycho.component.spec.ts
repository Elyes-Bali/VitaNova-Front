import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepsychoComponent } from './deletepsycho.component';

describe('DeletepsychoComponent', () => {
  let component: DeletepsychoComponent;
  let fixture: ComponentFixture<DeletepsychoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletepsychoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletepsychoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
