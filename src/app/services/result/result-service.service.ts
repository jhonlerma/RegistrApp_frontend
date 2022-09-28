import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Table } from 'src/app/models/table';
import { DataService } from '../data/data.service';
import { LOCAL_STORAGE_TOKEN } from 'src/app/constants';


@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {
  private API_DATOS = "http://localhost:4000/result/list";

  constructor(private http: HttpClient, private dataService:DataService) { }

  public getAll(): Observable<Table[]>{
    this.dataService.loadingScreen.next(true);
    return this.http.get<any[] | Table[]>(this.API_DATOS,{
      observe: 'body',
      headers: {
        'authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN)}`
      }

    }).pipe(map(x=>{
      this.dataService.loadingScreen.next(false);
      return x[0];
    }),catchError((err)=>{
      this.dataService.loadingScreen.next(false);
      return throwError(()=>err);
    }));
  }

  
}
