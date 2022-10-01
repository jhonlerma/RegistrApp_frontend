import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LOCAL_STORAGE_TOKEN } from 'src/app/constants';
import { Candidate } from 'src/app/models/candidate';
import { environment } from 'src/environments/environment';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateDataService {

  private API_DATOS = "http://localhost:4000/candidate/list";
  ENDPOINT = 'candidate/'


  constructor(private http: HttpClient, private dataService: DataService) { }

  public getAll(): Observable<Candidate[]> {
    this.dataService.loadingScreen.next(true);
    return this.http.get<any[] | Candidate[]>(this.API_DATOS, {
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

  createCandidate(
    document: string,
    name: string,
    last_name: string,
    resolution: string,
    political_party: string,
  ): Observable<Candidate> {
    this.dataService.loadingScreen.next(true);
    return this.http.post<Candidate>(`${environment.url}${this.ENDPOINT}${political_party}`, {
      document,
      name,
      last_name,
      resolution,

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

  updateCandidate(
    id: string,
    document: string,
    name: string,
    last_name: string,
    political_party: string,
    resolution: string,
  ): Observable<Candidate> {
    this.dataService.loadingScreen.next(true);
    return this.http.put<Candidate>(`${environment.url}${this.ENDPOINT}${id}`, {
      document,
      name,
      last_name,
      political_party,
      resolution,
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

  delete(id: string): Observable<Candidate> {
    this.dataService.loadingScreen.next(true);
    return this.http.delete<Candidate>(`${environment.url}${this.ENDPOINT}${id}`,
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
