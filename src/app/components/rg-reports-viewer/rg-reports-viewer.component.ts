import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rg-reports-viewer',
  templateUrl: './rg-reports-viewer.component.html',
  styleUrls: ['./rg-reports-viewer.component.scss']
})
export class RgReportsViewerComponent implements OnInit {

  reportsList:any;
  constructor(private route: ActivatedRoute) { 
    this.reportsList = this.route.snapshot.data['response'];

  }

  ngOnInit(): void {
  }

}
