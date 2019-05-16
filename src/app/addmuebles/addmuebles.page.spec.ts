import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmueblesPage } from './addmuebles.page';

describe('AddmueblesPage', () => {
  let component: AddmueblesPage;
  let fixture: ComponentFixture<AddmueblesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmueblesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmueblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
