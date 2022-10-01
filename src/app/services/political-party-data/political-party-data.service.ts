import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LOCAL_STORAGE_TOKEN } from 'src/app/constants';
import { political_party } from 'src/app/models/political_party';
import { environment } from 'src/environments/environment';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class PoliticalPartyDataService {

  private API_DATOS = "http://localhost:4000/political_party/list";
  ENDPOINT: string = 'political_party/';

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
      return body[0];
    }),catchError((err)=>{
      this.dataService.loadingScreen.next(false);
      return throwError(()=>err);
    }));
  }

  update(
    id: string,
    lema: string,
    nombre: string
  ): Observable<political_party> {
    this.dataService.loadingScreen.next(true);
    return this.http.put<political_party>(`http://localhost:3000/political_party/${id}`,{
      lema,
      nombre
    },
      {
        observe: 'response',
        headers: {
          'authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN)}`
        }
      }).pipe(map(response => {
        this.dataService.loadingScreen.next(false);

        return response.body!;
      }), catchError((err) => {
        this.dataService.loadingScreen.next(false);

        return throwError(() => err);
      }));
  }

  delete(id: string): Observable<political_party> {
    this.dataService.loadingScreen.next(true);
    return this.http.delete<political_party>(`http://localhost:3000/political_party/${id}`,
      {
        observe: 'response',
        headers: {
          'authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN)}`
        }
      }).pipe(map(response => {
        this.dataService.loadingScreen.next(false);

        return response.body!;
      }), catchError((err) => {
        this.dataService.loadingScreen.next(false);

        return throwError(() => err);
      }));
  }

}
