import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WtPrintComponent } from './print.component';

describe('WtPrintComponent', () => {
  let component: WtPrintComponent;
  let fixture: ComponentFixture<WtPrintComponent>;

  beforeEach(waitForAsync(() => {
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
