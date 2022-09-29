import { TestBed } from '@angular/core/testing';

import { ResultListResolver } from './result-list.resolver';

describe('ResultListResolver', () => {
  let resolver: ResultListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ResultListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
