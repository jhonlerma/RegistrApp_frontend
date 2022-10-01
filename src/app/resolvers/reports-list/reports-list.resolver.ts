import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ReportsDataService } from 'src/app/services/reports-data/reports-data.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsListResolver implements Resolve<any> {
  

  constructor(private reportsDataService: ReportsDataService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.reportsDataService.getAll();
  }
}
