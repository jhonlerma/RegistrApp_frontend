import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../data/data.service";
import { environment } from "../../../environments/environment";
import { catchError, map, Observable, throwError } from "rxjs";
import { LoginResponse } from 'src/app/models/auth/login-response';
import { TOKEN } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ENDPOINT = 'auth/'

  constructor(private http: HttpClient, private data: DataService) { }
  
  login(email: string, password: string): Observable<LoginResponse>{
    this.data.loadingScreen.next(true);
    return this.http.post<LoginResponse>(`${environment.url}${this.ENDPOINT}`,{
      email,
      password
    },
    {
      observe: 'response'
    }).pipe(map(response => {
      
      this.data.loadingScreen.next(false);
      if(response.ok){
        localStorage.setItem(TOKEN, response.body?.access_token!)
      }
      return response.body!;
    }), catchError((err) => {
      this.data.loadingScreen.next(false);
      return throwError(() => 'Credenciales Inválidas');
    }));
  }

}
