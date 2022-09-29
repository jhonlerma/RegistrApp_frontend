import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableManagementGetAllService {

  private API_DATOS = "http://localhost:3000/table/list";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get(this.API_DATOS);
  }
}
