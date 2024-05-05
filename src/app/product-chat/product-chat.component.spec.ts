import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChatComponent } from './product-chat.component';

describe('ProductChatComponent', () => {
  let component: ProductChatComponent;
  let fixture: ComponentFixture<ProductChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
