import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrapportpsyasminComponent } from './showrapportpsyasmin.component';

describe('ShowrapportpsyasminComponent', () => {
  let component: ShowrapportpsyasminComponent;
  let fixture: ComponentFixture<ShowrapportpsyasminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowrapportpsyasminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowrapportpsyasminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
