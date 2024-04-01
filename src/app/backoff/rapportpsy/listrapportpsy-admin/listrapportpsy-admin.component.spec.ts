import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrapportpsyAdminComponent } from './listrapportpsy-admin.component';

describe('ListrapportpsyAdminComponent', () => {
  let component: ListrapportpsyAdminComponent;
  let fixture: ComponentFixture<ListrapportpsyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrapportpsyAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListrapportpsyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
