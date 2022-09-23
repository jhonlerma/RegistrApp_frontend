import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  loadingScreen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

}
