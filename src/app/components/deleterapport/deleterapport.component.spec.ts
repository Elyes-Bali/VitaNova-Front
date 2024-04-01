import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterapportComponent } from './deleterapport.component';

describe('DeleterapportComponent', () => {
  let component: DeleterapportComponent;
  let fixture: ComponentFixture<DeleterapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleterapportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleterapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
