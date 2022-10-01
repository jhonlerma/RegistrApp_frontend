import { TestBed } from '@angular/core/testing';

import { PermissionListResolver } from './permission-list.resolver';

describe('PermissionListResolver', () => {
  let resolver: PermissionListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PermissionListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
