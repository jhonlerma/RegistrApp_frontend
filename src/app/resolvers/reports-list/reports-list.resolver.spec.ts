import { TestBed } from '@angular/core/testing';

import { ReportsListResolver } from './reports-list.resolver';

describe('ReportsListResolver', () => {
  let resolver: ReportsListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReportsListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
