import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoTPage } from './producto-t.page';

describe('ProductoTPage', () => {
  let component: ProductoTPage;
  let fixture: ComponentFixture<ProductoTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoTPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
