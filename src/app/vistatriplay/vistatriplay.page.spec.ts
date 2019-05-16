import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistatriplayPage } from './vistatriplay.page';

describe('VistatriplayPage', () => {
  let component: VistatriplayPage;
  let fixture: ComponentFixture<VistatriplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistatriplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistatriplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
