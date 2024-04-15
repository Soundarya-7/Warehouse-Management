import { TestBed } from '@angular/core/testing';

import { PendingRequestsGuardService } from './pending-requests-guard.service';

describe('PendingRequestsGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingRequestsGuardService = TestBed.get(PendingRequestsGuardService);
    expect(service).toBeTruthy();
  });
});
