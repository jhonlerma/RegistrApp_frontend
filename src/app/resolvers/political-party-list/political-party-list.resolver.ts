import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PoliticalPartyGetAllService } from 'src/app/services/political-party-get-all.service';
import { political_party } from 'src/app/models/political_party';

@Injectable({
  providedIn: 'root'
})
export class PoliticalPartyListResolver implements Resolve<political_party[]> {

  constructor(private politicalPartyGetAllService: PoliticalPartyGetAllService){

  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<political_party[]> {
    return this.politicalPartyGetAllService.getAll();
  }

}
