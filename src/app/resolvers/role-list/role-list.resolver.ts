import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Role } from 'src/app/models/auth/role-response';
import { RoleDataService } from 'src/app/services/role-data/role-data.service';

@Injectable({
  providedIn: 'root'
})
export class RoleListResolver implements Resolve<Role[]> {
  constructor(private roleDataService: RoleDataService){

  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Role[]> {
    return this.roleDataService.getAllUsers();
  }
}
