import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE_TOKEN } from '../constants';
import { political_party } from '../models/political_party';
import { DataService } from './data/data.service';
import { IdResponse } from '../models/id-response';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoliticalPartyGetAllService {

  private API_DATOS = "http://localhost:3000/political_party/list";
  ENDPOINT = 'political_party/'

  constructor(private http: HttpClient, private dataService:DataService, private router: Router) { }

  public getAll(): Observable<any>{
    return this.http.get(this.API_DATOS);
  }


  getAllUsers(): Observable<political_party[]> {
    this.dataService.loadingScreen.next(true);
    return this.http.get<any[] | political_party[]>(`${environment.url}${this.ENDPOINT}`,
      {
        observe: 'body',
        headers: {
          'authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN)}`
        }
      }).pipe(map(body => {
        this.dataService.loadingScreen.next(false);

        return body[0];
      }), catchError((err) => {
        this.dataService.loadingScreen.next(false);

        return throwError(() => err);
      }));
  }

  private API_DATOS2= "http://localhost:3000/political_party/";

  public createTable(lema: string,nombre:string): Observable<IdResponse>{
    this.dataService.loadingScreen.next(true);
    return this.http.post<IdResponse>(this.API_DATOS2,{
      lema,
      nombre
    },
    {
      observe: 'response',
     
    }).pipe(map(response=>{
      this.dataService.loadingScreen.next(false);
      return response.body!;
    }),catchError((err)=>{
      this.dataService.loadingScreen.next(false);
      return throwError(()=>err);
    }));
  }
}
