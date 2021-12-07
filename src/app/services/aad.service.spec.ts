import { TestBed } from '@angular/core/testing';

import { AadService } from './aad.service';

describe('AadService', () => {
  let service: AadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
