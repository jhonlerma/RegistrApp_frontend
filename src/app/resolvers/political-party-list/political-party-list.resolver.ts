import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PoliticalPartyGetAllService } from 'src/app/services/political-party-get-all.service';
import { political_party } from 'src/app/models/political_party';
import { PoliticalPartyDataService } from 'src/app/services/political-party-data/political-party-data.service';

@Injectable({
  providedIn: 'root'
})
export class PoliticalPartyListResolver implements Resolve<political_party[]> {

  constructor(private politicalPartyDataService: PoliticalPartyDataService){

  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<political_party[]> {
    return this.politicalPartyDataService.getAll();
  }

}
