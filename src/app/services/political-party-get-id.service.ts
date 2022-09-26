import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliticalPartyGetIdService {

  ID = "631035f8134e2a4ef2e91a72";
  private API_DATOS = "http://localhost:3000/political_party/" + this.ID;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get(this.API_DATOS);
  }
}
