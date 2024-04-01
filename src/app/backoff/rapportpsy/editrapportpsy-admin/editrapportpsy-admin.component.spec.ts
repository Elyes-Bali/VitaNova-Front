import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrapportpsyAdminComponent } from './editrapportpsy-admin.component';

describe('EditrapportpsyAdminComponent', () => {
  let component: EditrapportpsyAdminComponent;
  let fixture: ComponentFixture<EditrapportpsyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrapportpsyAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditrapportpsyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
