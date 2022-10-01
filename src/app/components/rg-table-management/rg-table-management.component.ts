import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'src/app/models/table';
import { TableManagementGetAllService } from 'src/app/services/table-management-get-all.service';
import { RgConfirmDialogComponent } from '../rg-confirm-dialog/rg-confirm-dialog.component';
import { RgDialogUpdateTableComponent } from '../rg-dialog-update-table/rg-dialog-update-table.component';


@Component({
  selector: 'app-rg-table-management',
  templateUrl: './rg-table-management.component.html',
  styleUrls: ['./rg-table-management.component.scss']
})
export class RgTableManagementComponent  {
  tablelist: Table[]=[];

  createTableForm= new FormGroup({
    numero: new FormControl("",[Validators.required]),
    cantidad_inscritos: new FormControl("",[Validators.required])
    
  });
  searchTableForm= new FormGroup({
    idTableS: new FormControl("",[Validators.required])
  });

  
  
  displayedColumns: string[] = ['_id', 'number', 'numberp','Editar', 'Eliminar'];
  dataSource: MatTableDataSource<Table>;

    constructor(
      private service: TableManagementGetAllService,
      private route: ActivatedRoute,
      public dialog: MatDialog,
      private snackBar: MatSnackBar,
      private changeDetectorRefs: ChangeDetectorRef
    ) {
    this.tablelist=this.route.snapshot.data['response'];
    this.dataSource = new MatTableDataSource(this.tablelist);
    
   }
   ngOnInit(): void {

  }
    
  

  
  createTableSubmit(){
    this.service.createTable(this.createTableForm.value['numero']!, this.createTableForm.value['cantidad_inscritos']!).subscribe({
      next:()=>{this.snackBar.open('creado exitosamente','cerrar',{duration:2000})},
      error:err=>{console.log(err);
      }
      
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
  startEdit(id: string,numero:string,cantidad_inscritos:string) {
    this.openTableUpdateDialog(id,numero,cantidad_inscritos);
    console.log(id);
  }

  startDeletion(id: string) {
    this.openTableDeleteDialog(`vas a eliminar el elemento con el id: ${id}\n¿Estas seguro?`, id);
  }
  openTableUpdateDialog(id: string,numero:string,cantidad_inscritos:string): void {
    const dialogRef = this.dialog.open(RgDialogUpdateTableComponent, {},);
    dialogRef.componentInstance.updateTableForm.get('numero')?.setValue(numero);
    dialogRef.componentInstance.updateTableForm.get('cantidad_inscritos')?.setValue(cantidad_inscritos);
    dialogRef.componentInstance.tableId =id;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateTableRequest();
      }
    });
  }

  openTableDeleteDialog(message: string, id: string): void {
    const dialogRef = this.dialog.open(RgConfirmDialogComponent, {},);
    dialogRef.componentInstance.message = message;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteTableRequest(id);
        this.updateTableRequest();
      }
    });
  }
  updateTableRequest(){
    this.service.getAll().subscribe({
      next: (x) =>{
        this.tablelist = x;
        this.dataSource = new MatTableDataSource(this.tablelist);
        this.changeDetectorRefs.detectChanges();    
      },
      error: (err)=>{
        this.snackBar.open(err.error, 'cerrar', { duration: 2000 });
      }
    })

  }
  deleteTableRequest(id: string){
    this.service.deletTable(id).subscribe({
      next: (x) =>{
        this.updateTableRequest();
        this.snackBar.open('Usuario eliminado exitosamente', 'cerrar', { duration: 2000 });
      },
      error: (err)=>{
        this.snackBar.open(err.error, 'cerrar', { duration: 2000 });
      }
    })

  }


}
