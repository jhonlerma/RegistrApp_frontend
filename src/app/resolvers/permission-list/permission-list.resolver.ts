import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Permission } from 'src/app/models/permission';
import { PermissionDataService } from 'src/app/services/permission-data/permission-data.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionListResolver implements Resolve<Permission[]> {
  constructor(private roleDataService: PermissionDataService){

  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Permission[]> {
    return this.roleDataService.getAll();
  }
}
