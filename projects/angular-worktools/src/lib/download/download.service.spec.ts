import { TestBed } from '@angular/core/testing';

import { WtDownloadService } from './download.service';

describe('WtDownloadService', () => {
  let service: WtDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WtDownloadService],
    });
    service = TestBed.inject(WtDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
