import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CandidateDataService } from 'src/app/services/candidate-data/candidate-data.service';
import { Candidate } from 'src/app/models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateListResolver implements Resolve<Candidate[]> {

  constructor(private CandidateDataService: CandidateDataService){

  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Candidate[]> {
    return this.CandidateDataService.getAll();
  }

}
