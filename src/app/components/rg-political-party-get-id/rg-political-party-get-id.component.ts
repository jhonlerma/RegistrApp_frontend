import { Component, OnInit } from '@angular/core';
import { PoliticalPartyGetIdService } from 'src/app/services/political-party-get-id.service'; 

@Component({
  selector: 'app-rg-political-party-get-id',
  templateUrl: './rg-political-party-get-id.component.html',
  styleUrls: ['./rg-political-party-get-id.component.scss']
})
export class RgPoliticalPartyGetIdComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'lema', 'name'];
  dataSource: any[] = [];

  constructor(private service: PoliticalPartyGetIdService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(dataSource => {
      this.dataSource = dataSource;
      this.dataSource = this.dataSource;
    })
  }
  
}
