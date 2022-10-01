import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LOCAL_STORAGE_TOKEN } from 'src/app/constants';
import { environment } from 'src/environments/environment';
import { DataService } from '../data/data.service';
import { Permission } from 'src/app/models/permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionDataService {

  ENDPOINT = 'role_permissions/'

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router
  ) { }

  getAll(): Observable<Permission[]> {
    this.dataService.loadingScreen.next(true);
    return this.http.get<any[] | Permission[]>(`${environment.url}${this.ENDPOINT}`,
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
