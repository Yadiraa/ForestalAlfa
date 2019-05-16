import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistamueblesPage } from './vistamuebles.page';

describe('VistamueblesPage', () => {
  let component: VistamueblesPage;
  let fixture: ComponentFixture<VistamueblesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistamueblesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistamueblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
