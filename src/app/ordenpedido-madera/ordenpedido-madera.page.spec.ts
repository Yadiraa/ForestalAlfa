import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenpedidoMaderaPage } from './ordenpedido-madera.page';

describe('OrdenpedidoMaderaPage', () => {
  let component: OrdenpedidoMaderaPage;
  let fixture: ComponentFixture<OrdenpedidoMaderaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenpedidoMaderaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenpedidoMaderaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
