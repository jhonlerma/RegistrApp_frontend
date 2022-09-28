import { TestBed } from '@angular/core/testing';

import { RoleListResolver } from './role-list.resolver';

describe('RoleListResolver', () => {
  let resolver: RoleListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RoleListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
