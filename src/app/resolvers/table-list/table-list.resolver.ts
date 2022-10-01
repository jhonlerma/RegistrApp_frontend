import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Table } from 'src/app/models/table';
import { TableManagementGetAllService } from 'src/app/services/table-management-get-all.service';

@Injectable({
  providedIn: 'root'
})
export class TableListResolver implements Resolve<Table[]> {
  constructor(private tableManagementGetAllService: TableManagementGetAllService){

  }
  

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Table[]> {
    return this.tableManagementGetAllService.getAll();
  }
}
