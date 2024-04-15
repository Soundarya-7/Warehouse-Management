import { TestBed } from '@angular/core/testing';

import { StockSafetyIndicatorService } from './stock-safety-indicator.service';

describe('StockSafetyIndicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockSafetyIndicatorService = TestBed.get(StockSafetyIndicatorService);
    expect(service).toBeTruthy();
  });
});
