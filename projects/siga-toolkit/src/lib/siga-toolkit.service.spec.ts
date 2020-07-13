import { TestBed } from '@angular/core/testing';

import { SigaToolkitService } from './siga-toolkit.service';

describe('SigaToolkitService', () => {
  let service: SigaToolkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigaToolkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
