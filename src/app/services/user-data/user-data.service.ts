import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LOCAL_STORAGE_TOKEN } from 'src/app/constants';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  ENDPOINT = 'users/'

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router
  ) { }

  getAllUsers(): Observable<User[]> {
    this.dataService.loadingScreen.next(true);
    return this.http.get<any[] | User[]>(`${environment.url}${this.ENDPOINT}`,
      {
        observe: 'body',
        headers: {
          'authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN)}`
        }
      }).pipe(map(body => {
        this.dataService.loadingScreen.next(false);

        return body[0];
      }), catchError((err) => {
        this.dataService.loadingScreen.next(false);

        return throwError(() => err);
      }));
  }

  createUser(
    email: string,
    password: string,
    role: string,
    username: string
  ): Observable<User> {
    this.dataService.loadingScreen.next(true);
    return this.http.post<User>(`${environment.url}${this.ENDPOINT}`,{
      email,
      password,
      role,
      username
  
    },
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

  createCityzenUser(
    email: string,
    password: string,
    username: string
  ): Observable<User> {
    this.dataService.loadingScreen.next(true);
    return this.http.post<User>(`${environment.url}${this.ENDPOINT}cityzen`,{
      email,
      password,
      username
    },
      {
        observe: 'response',
      }).pipe(map(response => {
        this.dataService.loadingScreen.next(false);

        return response.body!;
      }), catchError((err) => {
        this.dataService.loadingScreen.next(false);

        return throwError(() => err);
      }));
  }


  updateUser(
    id: string,
    role: string,
    username: string
  ): Observable<User> {
    this.dataService.loadingScreen.next(true);
    return this.http.put<User>(`${environment.url}${this.ENDPOINT}${id}`,{
      role,
      username
    },
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

  deleteUser(id: string): Observable<User> {
    this.dataService.loadingScreen.next(true);
    return this.http.delete<User>(`${environment.url}${this.ENDPOINT}${id}`,
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
