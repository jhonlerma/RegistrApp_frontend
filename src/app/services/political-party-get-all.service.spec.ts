import { TestBed } from '@angular/core/testing';

import { PoliticalPartyGetAllService } from './political-party-get-all.service';

describe('PoliticalPartyGetAllService', () => {
  let service: PoliticalPartyGetAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliticalPartyGetAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
