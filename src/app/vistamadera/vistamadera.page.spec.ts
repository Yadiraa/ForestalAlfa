import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistamaderaPage } from './vistamadera.page';

describe('VistamaderaPage', () => {
  let component: VistamaderaPage;
  let fixture: ComponentFixture<VistamaderaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistamaderaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistamaderaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
