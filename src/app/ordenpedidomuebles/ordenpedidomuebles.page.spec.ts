import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenpedidomueblesPage } from './ordenpedidomuebles.page';

describe('OrdenpedidomueblesPage', () => {
  let component: OrdenpedidomueblesPage;
  let fixture: ComponentFixture<OrdenpedidomueblesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenpedidomueblesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenpedidomueblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
