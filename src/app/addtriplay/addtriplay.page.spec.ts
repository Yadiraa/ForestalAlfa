import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtriplayPage } from './addtriplay.page';

describe('AddtriplayPage', () => {
  let component: AddtriplayPage;
  let fixture: ComponentFixture<AddtriplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtriplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtriplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
