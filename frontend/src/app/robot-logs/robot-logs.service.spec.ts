import { TestBed } from '@angular/core/testing';

import { RobotLogsService } from './robot-logs.service';

describe('RobotLogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RobotLogsService = TestBed.get(RobotLogsService);
    expect(service).toBeTruthy();
  });
});
