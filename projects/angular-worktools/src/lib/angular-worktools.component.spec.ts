import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWorktoolsComponent } from './angular-worktools.component';

describe('AngularWorktoolsComponent', () => {
  let component: AngularWorktoolsComponent;
  let fixture: ComponentFixture<AngularWorktoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularWorktoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWorktoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
