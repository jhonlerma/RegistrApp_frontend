import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-rg-left-sidebar',
  templateUrl: './rg-left-sidebar.component.html',
  styleUrls: ['./rg-left-sidebar.component.scss']
})
export class RgLeftSidebarComponent implements OnInit {

  @ViewChild('sidebar') public sidebar: MatSidenav | undefined;
  isOpened: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private sidebarService: SidebarService) {}

  ngOnInit() { 
    this.sidebarService.isOpened.subscribe(()=> {
       this.sidebar!.toggle();
     });
   } 
 }
