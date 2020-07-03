import { TestBed } from '@angular/core/testing';

import { WtPrintService } from './print.service';

describe('WtPrintService', () => {
  let service: WtPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WtPrintService],
    });
    service = TestBed.inject(WtPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
