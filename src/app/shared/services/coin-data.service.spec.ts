import { TestBed } from '@angular/core/testing';

import { CoinDataService } from './coin-data.service';

describe('CoinDataService', () => {
  let service: CoinDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
