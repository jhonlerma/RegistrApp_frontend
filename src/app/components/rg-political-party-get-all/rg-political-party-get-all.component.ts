import { Component, OnInit } from '@angular/core';
import { PoliticalPartyGetAllService } from 'src/app/services/political-party-get-all.service';

@Component({
  selector: 'app-rg-political-party-get-all',
  templateUrl: './rg-political-party-get-all.component.html',
  styleUrls: ['./rg-political-party-get-all.component.scss']
})
export class RgPoliticalPartyGetAllComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'lema', 'name'];
  dataSource: any[] = [];

  constructor(private service: PoliticalPartyGetAllService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(dataSource => {
      this.dataSource = dataSource;
      console.log(this.dataSource);
      this.dataSource = this.dataSource;
    })
  }
  
}
