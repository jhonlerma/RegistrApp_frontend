import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataService } from 'src/app/services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private dataService: DataService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.dataService.loadingScreen.next(true);
    let response: Promise<boolean> | boolean;
    if (localStorage.getItem('access_token') != null) {
      this.dataService.loadingScreen.next(false);
      response = this.router.navigate(['/', 'dashboard']);
    } else {
      this.dataService.loadingScreen.next(false);
      response = true;
    }
    return response;
  }

}
