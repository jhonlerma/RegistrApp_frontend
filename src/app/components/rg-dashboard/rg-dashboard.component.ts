import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { MeResponse } from 'src/app/models/auth/me-response';

@Component({
  selector: 'app-rg-dashboard',
  templateUrl: './rg-dashboard.component.html',
  styleUrls: ['./rg-dashboard.component.scss']
})
export class RgDashboardComponent{
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  meInfo: MeResponse;

  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute) {
   this.meInfo =  this.route.snapshot.data['response'];
  }

}
