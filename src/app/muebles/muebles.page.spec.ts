import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MueblesPage } from './muebles.page';

describe('MueblesPage', () => {
  let component: MueblesPage;
  let fixture: ComponentFixture<MueblesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MueblesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MueblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
