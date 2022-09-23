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

  authMe():Observable<boolean | UrlTree>{
    this.dataService.loadingScreen.next(true);
    let response: Observable<boolean | UrlTree>;
    if(localStorage.getItem('access_token') != null){

      response = this.http.get<boolean | UrlTree>(`${environment.url}auth/me`,{
        headers:{
          'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      }).pipe(map(response => {
        this.dataService.loadingScreen.next(false);
        return true;
      }), catchError((err, caught) => {
        localStorage.removeItem('access_token');
        console.log(err)
        return this.router.navigate(['/']);
      }))
    }else{
      this.dataService.loadingScreen.next(false);
      response = from(this.router.navigate(['/']));
    }
    return response;
    
  }

  // noAuthMe():Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
  //   this.dataService.loadingScreen.next(true);

  //   if(localStorage.getItem('access_token')=== null){

  //   }
  //   const response = this.http.get<boolean | UrlTree>(`${environment.url}auth/me`,{
  //     headers:{
  //       'authorization': `Bearer ${localStorage.getItem('access_token')}`
  //     }
  //   }).pipe(
  //     catchError(error => {
  //       if (error) {
  //         this.dataService.loadingScreen.next(false);
  //         return of(true); // emit `false` as next notification instead of the original error
  //       }
  //       this.dataService.loadingScreen.next(false);
  //       return this.router.navigate(['/']);; // rethrow other status codes as error
  //     }),
  //   );    

  //   return response;
    
  // }


}
