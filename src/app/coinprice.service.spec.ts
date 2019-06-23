import { TestBed } from '@angular/core/testing';

import { CoinpriceService } from './coinprice.service';

describe('CoinpriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoinpriceService = TestBed.get(CoinpriceService);
    expect(service).toBeTruthy();
  });
});
