import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LOCAL_STORAGE_TOKEN } from 'src/app/constants';
import { Candidate } from 'src/app/models/candidate';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateDataService {

  private API_DATOS = "http://localhost:4000/candidate/list";

  constructor(private http: HttpClient, private dataService:DataService) { }

  public getAll(): Observable<Candidate[]>{
    this.dataService.loadingScreen.next(true);
    return this.http.get<any[] | Candidate[]>(this.API_DATOS,{
      observe: 'body',
      headers: {
        'authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN)}`
      }

    }).pipe(map(x=>{
      this.dataService.loadingScreen.next(false);
      console.log(x);
      return x;
    }),catchError((err)=>{
      this.dataService.loadingScreen.next(false);
      return throwError(()=>err);
    }));
  }
}
