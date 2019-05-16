import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidomueblesPage } from './pedidomuebles.page';

describe('PedidomueblesPage', () => {
  let component: PedidomueblesPage;
  let fixture: ComponentFixture<PedidomueblesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidomueblesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidomueblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
