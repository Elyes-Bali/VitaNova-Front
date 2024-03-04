import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpsychoComponent } from './detailpsycho.component';

describe('DetailpsychoComponent', () => {
  let component: DetailpsychoComponent;
  let fixture: ComponentFixture<DetailpsychoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpsychoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpsychoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
