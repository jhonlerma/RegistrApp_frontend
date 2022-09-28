import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResultServiceService } from 'src/app/services/result/result-service.service';


@Component({
  selector: 'app-rg-result-management',
  templateUrl: './rg-result-management.component.html',
  styleUrls: ['./rg-result-management.component.scss']
})
export class RgResultManagementComponent implements OnInit {

 
 
  displayedColumns: string[] = ['name', 'last_name', 'nombre','numero'];
  dataSource: any[] = [];

  constructor(private service: ResultServiceService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(dataSource => {
      this.dataSource = dataSource;
      console.log(this.dataSource);
      this.dataSource = this.dataSource;
    })
  }
 
  
 
}
