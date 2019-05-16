import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacategoriaPage } from './vistacategoria.page';

describe('VistacategoriaPage', () => {
  let component: VistacategoriaPage;
  let fixture: ComponentFixture<VistacategoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistacategoriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistacategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
