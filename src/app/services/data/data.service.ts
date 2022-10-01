import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  loadingScreen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isOnRegister: BehaviorSubject<boolean> = new BehaviorSubject(false);
  username: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

}
