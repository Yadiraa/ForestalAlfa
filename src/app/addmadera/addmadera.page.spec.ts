import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmaderaPage } from './addmadera.page';

describe('AddmaderaPage', () => {
  let component: AddmaderaPage;
  let fixture: ComponentFixture<AddmaderaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmaderaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmaderaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
