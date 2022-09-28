import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ResultModelo } from 'src/app/models/result-modelo';
import { ResultServiceService } from 'src/app/services/result/result-service.service';
import { RgDialogUpdateUserComponent } from '../rg-dialog-update-user/rg-dialog-update-user.component';


@Component({
  selector: 'app-rg-result-management',
  templateUrl: './rg-result-management.component.html',
  styleUrls: ['./rg-result-management.component.scss']
})
export class RgResultManagementComponent implements AfterViewInit{

 resultList: ResultModelo []=[];
 
  displayedColumns: string[] = ['name', 'last_name', 'nombre','numero'];
  dataSource: MatTableDataSource<ResultModelo>;

  constructor(private service: ResultServiceService, private snackbar:MatSnackBar, private route: ActivatedRoute) { 
    this.resultList=this.route.snapshot.data['response'];
    
    this.dataSource = new MatTableDataSource(this.resultList);

  }
  ngAfterViewInit(): void {
    this.service.getAll().subscribe(dataSource => {
      this.dataSource = new MatTableDataSource(this.resultList);
      console.log(this.dataSource);
      this.dataSource = this.dataSource;
    })
  }

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 

  startDeletion(id: string) {
    alert(`vas a eliminar el elemento con el id: ${id}`)
  }
 
 
}
