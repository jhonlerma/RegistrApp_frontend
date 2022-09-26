import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliticalPartyGetAllService {

  private API_DATOS = "http://localhost:3000/political_party/list";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get(this.API_DATOS);
  }
}
