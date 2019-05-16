import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidomaderaPage } from './pedidomadera.page';

describe('PedidomaderaPage', () => {
  let component: PedidomaderaPage;
  let fixture: ComponentFixture<PedidomaderaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidomaderaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidomaderaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
