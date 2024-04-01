import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterapportpsyadminComponent } from './deleterapportpsyadmin.component';

describe('DeleterapportpsyadminComponent', () => {
  let component: DeleterapportpsyadminComponent;
  let fixture: ComponentFixture<DeleterapportpsyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleterapportpsyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleterapportpsyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
