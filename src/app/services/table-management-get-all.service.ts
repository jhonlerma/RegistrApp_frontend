import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE_TOKEN } from '../constants';
import { Table } from '../models/table';
import { DataService } from './data/data.service';
import { IdResponse } from '../models/id-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableManagementGetAllService {
  ENDPOINT = 'table/'
  private API_DATOS = "http://localhost:4000/table/list";

  constructor(private http: HttpClient,
     private dataService:DataService) { }

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
  private API_DATOS2= "http://localhost:3000/table/";

  public createTable(numero: string,cantidad_inscritos:string): Observable<IdResponse>{
    this.dataService.loadingScreen.next(true);
    return this.http.post<IdResponse>(this.API_DATOS2,{
      numero,
      cantidad_inscritos
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
  updateTable(
    id:string,
    numero:string,
    cantidad_inscritos:string
  ):Observable<Table>{
    this.dataService.loadingScreen.next(true);
    return this.http.put<Table>(`${environment.url}${this.ENDPOINT}${id}`,{
      numero,
      cantidad_inscritos
    },{
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

  deletTable(id: string): Observable<Table> {
    this.dataService.loadingScreen.next(true);
    return this.http.delete<Table>(`${environment.url}${this.ENDPOINT}${id}`,
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


