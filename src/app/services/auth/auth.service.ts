import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DataService } from "../data/data.service";
import { environment } from "../../../environments/environment";
import { catchError, from, map, Observable, ObservableInput, of, onErrorResumeNext, throwError } from "rxjs";
import { LoginResponse } from 'src/app/models/auth/login-response';
import { LOCAL_STORAGE_ROLE, LOCAL_STORAGE_TOKEN, LOCAL_STORAGE_USER } from 'src/app/constants';
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
          localStorage.setItem(LOCAL_STORAGE_TOKEN, response.body?.access_token!)
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
    if (localStorage.getItem(LOCAL_STORAGE_TOKEN) != null) {

      response = this.http.get<MeResponse>(`${environment.url}auth/me`, {
        observe: 'body',
        headers: {
          'authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN)}`
        }
      }).pipe(map(body => {
        localStorage.setItem(LOCAL_STORAGE_ROLE, body.role.name);
        localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(body));
        this.dataService.username.next(body.username);
        this.dataService.isLoggedIn.next(true);
        this.dataService.loadingScreen.next(false);
        return true;
      }), catchError((err) => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_ROLE);
        localStorage.removeItem(LOCAL_STORAGE_USER);
        this.dataService.username.next('');
        this.dataService.isLoggedIn.next(false);
        this.dataService.loadingScreen.next(false);
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
    return permissions.includes(localStorage.getItem(LOCAL_STORAGE_ROLE)!);
  }

  meInfo(){
    const meUser: MeResponse = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER)!);
    localStorage.removeItem(LOCAL_STORAGE_USER);
    return of(meUser);
  }

  logout() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_ROLE);
    localStorage.removeItem(LOCAL_STORAGE_USER);
    this.dataService.username.next('');
    this.dataService.isLoggedIn.next(false);
  }

}
