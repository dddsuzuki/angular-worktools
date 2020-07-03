import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtPrintComponent } from './print.component';

describe('WtPrintComponent', () => {
  let component: WtPrintComponent;
  let fixture: ComponentFixture<WtPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
