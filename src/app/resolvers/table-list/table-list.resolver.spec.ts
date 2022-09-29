import { TestBed } from '@angular/core/testing';

import { TableListResolver } from './table-list.resolver';

describe('TableListResolver', () => {
  let resolver: TableListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TableListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
