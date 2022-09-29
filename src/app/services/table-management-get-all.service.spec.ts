import { TestBed } from '@angular/core/testing';

import { TableManagementGetAllService } from './table-management-get-all.service';

describe('TableManagementGetAllService', () => {
  let service: TableManagementGetAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableManagementGetAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
