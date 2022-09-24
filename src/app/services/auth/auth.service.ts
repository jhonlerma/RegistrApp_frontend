import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DataService } from "../data/data.service";
import { environment } from "../../../environments/environment";
import { catchError, from, map, Observable, ObservableInput, of, onErrorResumeNext, throwError } from "rxjs";
import { LoginResponse } from 'src/app/models/auth/login-response';
import { TOKEN } from 'src/app/constants';
import { MeResponse } from 'src/app/models/auth/me-response';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ENDPOINT = 'auth/'

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<LoginResponse> {
    this.dataService.loadingScreen.next(true);
    return this.http.post<LoginResponse>(`${environment.url}${this.ENDPOINT}`, {
      email,
      password
    },
      {
        observe: 'response'
      }).pipe(map(response => {
        this.dataService.loadingScreen.next(false);
        if (response.ok) {
          this.dataService.isLoggedIn.next(true);
          localStorage.setItem(TOKEN, response.body?.access_token!)
        }
        return response.body!;
      }), catchError((err) => {
        this.dataService.loadingScreen.next(false);
        this.dataService.isLoggedIn.next(false);
        return throwError(() => 'Credenciales Inválidas');
      }));
  }

  authMe(): Observable<boolean | UrlTree> {
    this.dataService.loadingScreen.next(true);
    let response: Observable<boolean | UrlTree>;
    if (localStorage.getItem('access_token') != null) {

      response = this.http.get<MeResponse>(`${environment.url}auth/me`, {
        observe: 'body',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      }).pipe(map(body => {
        this.dataService.loadingScreen.next(false);
        this.dataService.username.next(body.username);
        localStorage.setItem('role', body.role.name);
        this.dataService.isLoggedIn.next(true);
        return true;
      }), catchError((err) => {
        this.dataService.loadingScreen.next(false);
        localStorage.removeItem('access_token');
        this.dataService.username.next('');
        localStorage.removeItem('role');
        this.dataService.isLoggedIn.next(false);
        return this.router.navigate(['/']);
      }))
    } else {
      this.dataService.loadingScreen.next(false);
      response = from(this.router.navigate(['/']));
      this.dataService.isLoggedIn.next(false);
    }
    return response;

  }

  hasPermission(permissions: string[]): boolean{
    return permissions.includes(localStorage.getItem('role')!);
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    this.dataService.username.next('');
    this.dataService.isLoggedIn.next(false);
  }

}
