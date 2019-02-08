import { TestBed } from '@angular/core/testing';

import { SregisterService } from './sregister.service';

describe('SregisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SregisterService = TestBed.get(SregisterService);
    expect(service).toBeTruthy();
  });
});
