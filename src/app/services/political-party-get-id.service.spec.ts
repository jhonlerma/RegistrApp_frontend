import { TestBed } from '@angular/core/testing';

import { PoliticalPartyGetIdService } from './political-party-get-id.service';

describe('PoliticalPartyGetIdService', () => {
  let service: PoliticalPartyGetIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliticalPartyGetIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
