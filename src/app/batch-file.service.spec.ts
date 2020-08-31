import { TestBed } from '@angular/core/testing';

import { BatchFileService } from './batch-file.service';

describe('BatchFileService', () => {
  let service: BatchFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
