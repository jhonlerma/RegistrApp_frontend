import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataService } from 'src/app/services/data/data.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-rg-app-bar',
  templateUrl: './rg-app-bar.component.html',
  styleUrls: ['./rg-app-bar.component.scss']
})
export class RgAppBarComponent implements OnInit {

  isLoggedIn: boolean = false;
  isVisibleSidebar = false;
  username?: string | null;
  constructor(private dataService: DataService, private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.username = ''
    this.dataService.isLoggedIn.subscribe(x => {
      this.isLoggedIn = x;
      this.username = localStorage.getItem('username');
    });

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  registroCiudadano(){

  }
  
  sidebarToggle() {
  }

}
