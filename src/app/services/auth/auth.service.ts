import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../data/data.service";
import { environment } from "../../../environments/environment";
import { catchError, map, Observable, throwError } from "rxjs";
import { LoginResponse } from 'src/app/models/auth/login-response';
import { TOKEN } from 'src/app/constants';
import { MeResponse } from 'src/app/models/auth/me-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ENDPOINT = 'auth/'

  constructor(private http: HttpClient, private dataService: DataService) { }
  
  login(email: string, password: string): Observable<LoginResponse>{
    this.dataService.loadingScreen.next(true);
    return this.http.post<LoginResponse>(`${environment.url}${this.ENDPOINT}`,{
      email,
      password
    },
    {
      observe: 'response'
    }).pipe(map(response => {
      
      this.dataService.loadingScreen.next(false);
      if(response.ok){
        localStorage.setItem(TOKEN, response.body?.access_token!)
      }
      return response.body!;
    }), catchError((err) => {
      this.dataService.loadingScreen.next(false);
      return throwError(() => 'Credenciales Inválidas');
    }));
  }

  me():Observable<MeResponse>{
    this.dataService.loadingScreen.next(true);
    return this.http.get<MeResponse>(`${environment.url}me`)
    .pipe(map(response => {
      this.dataService.loadingScreen.next(false);
      return response;
    }), catchError(err => {
      this.dataService.loadingScreen.next(false);
      return throwError(()=> 'Usuario no autorizado');
    }))
  }

}
