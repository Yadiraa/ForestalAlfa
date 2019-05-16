import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutivologinPage } from './ejecutivologin.page';

describe('EjecutivologinPage', () => {
  let component: EjecutivologinPage;
  let fixture: ComponentFixture<EjecutivologinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutivologinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutivologinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
