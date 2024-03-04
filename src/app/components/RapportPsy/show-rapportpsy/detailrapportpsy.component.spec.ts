import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRapportpsyComponent } from './detailrapportpsy.component';

describe('ShowRapportpsyComponent', () => {
  let component: ShowRapportpsyComponent;
  let fixture: ComponentFixture<ShowRapportpsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRapportpsyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRapportpsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
