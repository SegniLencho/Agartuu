import { TestBed } from '@angular/core/testing';

import { ItemsForsaleService } from './items-forsale.service';

describe('ItemsForsaleService', () => {
  let service: ItemsForsaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsForsaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
