import { TestBed } from '@angular/core/testing';

import { PoliticalPartyListResolver } from './political-party-list.resolver';

describe('PoliticalPartyListResolver', () => {
  let resolver: PoliticalPartyListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PoliticalPartyListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
