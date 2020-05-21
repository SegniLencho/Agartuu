import { TestBed } from '@angular/core/testing';

import { ErrorSericeService } from './error-serice.service';

describe('ErrorSericeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorSericeService = TestBed.get(ErrorSericeService);
    expect(service).toBeTruthy();
  });
});
