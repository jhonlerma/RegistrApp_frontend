import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'src/app/models/table';
import { TableManagementGetAllService } from 'src/app/services/table-management-get-all.service';


@Component({
  selector: 'app-rg-table-management',
  templateUrl: './rg-table-management.component.html',
  styleUrls: ['./rg-table-management.component.scss']
})
export class RgTableManagementComponent implements AfterViewInit {
  tablelist: Table[]=[];

  createTableForm= new FormGroup({
    numero: new FormControl("",[Validators.required]),
    cantidad_inscritos: new FormControl("",[Validators.required])
  });
  searchTableForm= new FormGroup({
    idTableS: new FormControl("",[Validators.required])
  });
  
  
  displayedColumns: string[] = ['_id', 'number', 'numberp'];
  dataSource: MatTableDataSource<Table>;

  constructor(private service: TableManagementGetAllService, private snackbar:MatSnackBar, private route: ActivatedRoute) {
    this.tablelist=this.route.snapshot.data['response'];
    this.dataSource = new MatTableDataSource(this.tablelist);
   }
  ngAfterViewInit(): void {
    this.service.getAll().subscribe(dataSource => {
      this.dataSource =  new MatTableDataSource(this.tablelist);
      console.log(this.dataSource);
      this.dataSource = this.dataSource;
    })
    
  }

  
  createTableSubmit(){
    this.service.createTable(this.createTableForm.value['numero']!, this.createTableForm.value['cantidad_inscritos']!).subscribe({
      next:()=>{this.snackbar.open('creado exitosamente','cerrar',{duration:2000})},
      error:err=>{console.log(err)}
    })
  }
  searchTableSubmit(){
    
  }
  
  isInvalidField(field: string){
    return this.createTableForm.get(field)?.invalid && (this.createTableForm.get(field)?.dirty || this.createTableForm.get(field)?.touched);
  }
  hasError(field: string, validation: string){
    return this.createTableForm.get(field)?.hasError(validation);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  startDeletion(id: string) {
    alert(`vas a eliminar el elemento con el id: ${id}`)
  }

}
