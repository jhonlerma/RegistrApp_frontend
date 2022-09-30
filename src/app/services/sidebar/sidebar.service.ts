import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isOpened: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  sidebarToggle(){
    this.isOpened.next(null);
  }
}
