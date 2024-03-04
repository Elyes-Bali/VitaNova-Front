import { TestBed } from '@angular/core/testing';

import { RapportPsyService } from './rapport-psy.service';

describe('RapportPsyService', () => {
  let service: RapportPsyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapportPsyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
