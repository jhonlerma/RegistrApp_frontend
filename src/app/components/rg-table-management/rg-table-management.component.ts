import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TableManagementGetAllService } from 'src/app/services/table-management-get-all.service';


@Component({
  selector: 'app-rg-table-management',
  templateUrl: './rg-table-management.component.html',
  styleUrls: ['./rg-table-management.component.scss']
})
export class RgTableManagementComponent implements OnInit {
  createTableForm= new FormGroup({
    numberTable: new FormControl("",[Validators.required]),
    nPersonTable: new FormControl("",[Validators.required])
  });
  searchTableForm= new FormGroup({
    idTableS: new FormControl("",[Validators.required])
  });
  
 
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
  createTableSubmit(){

  }
  searchTableSubmit(){
    
  }
  
  isInvalidField(field: string){
    return this.createTableForm.get(field)?.invalid && (this.createTableForm.get(field)?.dirty || this.createTableForm.get(field)?.touched);
  }
  hasError(field: string, validation: string){
    return this.createTableForm.get(field)?.hasError(validation);
  }

}
