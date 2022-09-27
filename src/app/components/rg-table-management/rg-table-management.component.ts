import { Component, OnInit } from '@angular/core';
import { TableManagementGetAllService } from 'src/app/services/table-management-get-all.service';


@Component({
  selector: 'app-rg-table-management',
  templateUrl: './rg-table-management.component.html',
  styleUrls: ['./rg-table-management.component.scss']
})
export class RgTableManagementComponent implements OnInit {

 
  displayedColumns: string[] = ['_id', 'number', 'numberp'];
  dataSource: any[] = [];

  constructor(private service: TableManagementGetAllService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(dataSource => {
      this.dataSource = dataSource;
      console.log(this.dataSource);
      this.dataSource = this.dataSource;
    })
  }

}
