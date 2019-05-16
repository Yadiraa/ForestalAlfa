import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenpedidoPage } from './ordenpedido.page';

describe('OrdenpedidoPage', () => {
  let component: OrdenpedidoPage;
  let fixture: ComponentFixture<OrdenpedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenpedidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenpedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
