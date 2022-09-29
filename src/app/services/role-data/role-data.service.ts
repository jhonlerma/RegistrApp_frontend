import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LOCAL_STORAGE_TOKEN } from 'src/app/constants';
import { Role } from 'src/app/models/auth/role-response';
import { environment } from 'src/environments/environment';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class RoleDataService {

  ENDPOINT = 'roles/'

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router
  ) { }

  getAllUsers(): Observable<Role[]> {
    this.dataService.loadingScreen.next(true);
    return this.http.get<any[] | Role[]>(`${environment.url}${this.ENDPOINT}`,
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
}
