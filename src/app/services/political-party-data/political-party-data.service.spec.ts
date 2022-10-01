import { TestBed } from '@angular/core/testing';

import { PoliticalPartyDataService } from './political-party-data.service';

describe('PoliticalPartyDataService', () => {
  let service: PoliticalPartyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliticalPartyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
