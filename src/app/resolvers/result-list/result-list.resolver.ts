import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ResultModelo } from 'src/app/models/result-modelo';
import { ResultServiceService } from 'src/app/services/result/result-service.service';

@Injectable({
  providedIn: 'root'
})
export class ResultListResolver implements Resolve<ResultModelo[]> {


  constructor(private resultServiceService: ResultServiceService){

  }
  

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResultModelo[]> {
   return this.resultServiceService.getAll();
  }
}
