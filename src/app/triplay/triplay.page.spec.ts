import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriplayPage } from './triplay.page';

describe('TriplayPage', () => {
  let component: TriplayPage;
  let fixture: ComponentFixture<TriplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
