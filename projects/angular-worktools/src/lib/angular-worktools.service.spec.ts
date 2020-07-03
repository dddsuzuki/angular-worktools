import { TestBed } from '@angular/core/testing';

import { AngularWorktoolsService } from './angular-worktools.service';

describe('AngularWorktoolsService', () => {
  let service: AngularWorktoolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularWorktoolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
