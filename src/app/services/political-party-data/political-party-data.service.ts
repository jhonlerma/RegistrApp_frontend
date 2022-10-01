import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LOCAL_STORAGE_TOKEN } from 'src/app/constants';
import { political_party } from 'src/app/models/political_party';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class PoliticalPartyDataService {

  private API_DATOS = "http://localhost:3000/political_party/list";

  constructor(private http: HttpClient, private dataService:DataService) { }

  public getAll(): Observable<political_party[]>{
    this.dataService.loadingScreen.next(true);
    return this.http.get<any[] | political_party[]>(this.API_DATOS,{
      observe: 'body',
      headers: {
        'authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN)}`
      }

    }).pipe(map(body=>{
      this.dataService.loadingScreen.next(false);
      console.log(body);
      return body;
    }),catchError((err)=>{
      this.dataService.loadingScreen.next(false);
      return throwError(()=>err);
    }));
  }
}
