import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RgDialogInputComponent } from '../rg-dialog-input/rg-dialog-input.component';
import { RgPoliticalPartyGetAllComponent } from '../rg-political-party-get-all/rg-political-party-get-all.component';
import { RgPoliticalPartyGetIdComponent } from '../rg-political-party-get-id/rg-political-party-get-id.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import { PoliticalPartyGetAllService } from 'src/app/services/political-party-get-all.service';
import { MatTableDataSource } from '@angular/material/table';
import { political_party } from 'src/app/models/political_party';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RgDialogUpdatePoliticalPartyComponent } from '../rg-dialog-update-political-party/rg-dialog-update-political-party.component';
import { PoliticalPartyDataService } from 'src/app/services/political-party-data/political-party-data.service';
import { RgConfirmDialogComponent } from '../rg-confirm-dialog/rg-confirm-dialog.component';

@Component({
  selector: 'app-rg-political-party-management',
  templateUrl: './rg-political-party-management.component.html',
  styleUrls: ['./rg-political-party-management.component.scss']
})
export class RgPoliticalPartyManagementComponent implements OnInit {
  political_partyList: political_party[] = [];

  createTableForm= new FormGroup({
    lema: new FormControl("",[Validators.required]),
    nombre: new FormControl("",[Validators.required])
  });
  displayedColumns: string[] = ['_id', 'lema', 'name','Editar','Eliminar'];
  dataSource: MatTableDataSource<political_party>;

  searchTableForm= new FormGroup({
    idPolitical_party: new FormControl("",[Validators.required])
  });
  
  constructor(
    public dialog: MatDialog, private route: ActivatedRoute,
    private service: PoliticalPartyGetAllService,
    private politicalPartyDataService: PoliticalPartyDataService,
    private snackbar: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef
    ) { 
    this.political_partyList = this.route.snapshot.data['response'];
    this.dataSource = new MatTableDataSource(this.political_partyList);
  }

  ngOnInit(): void {
  }

  createUserSubmit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openGetAll():void{
    const dialogRef = this.dialog.open(RgPoliticalPartyGetAllComponent, {},);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result){
        console.log("La consulta fue realizada con exito");
      }"La consulta no fue realizada con exito"
    });
  }

  openGetID():void{
    const dialogRef = this.dialog.open(RgPoliticalPartyGetIdComponent, {},);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result){
        console.log("La consulta fue realizada con exito");
      }"La consulta no fue realizada con exito"
    });
  }

  createTableSubmit(){
    this.service.createTable(this.createTableForm.value['lema']!, this.createTableForm.value['nombre']!).subscribe({
      next:()=>{this.snackbar.open('creado exitosamente','cerrar',{duration:2000})},
      error:err=>{console.log(err)}
    })
  }

  isInvalidField(field: string){
    return this.createTableForm.get(field)?.invalid && (this.createTableForm.get(field)?.dirty || this.createTableForm.get(field)?.touched);
  }
  hasError(field: string, validation: string){
    return this.createTableForm.get(field)?.hasError(validation);
  }

  addPolitical_party():void{
      this.service.getAll().subscribe(dataSource => {
      this.dataSource = dataSource;
      console.log(this.dataSource);
      this.dataSource = this.dataSource;
    })
  }

  openActualizar(political_party: political_party):void{
      this.openUserUpdateDialog(political_party);
  }

  openUserUpdateDialog(political_party: political_party):void{
    const dialogRef = this.dialog.open(RgDialogUpdatePoliticalPartyComponent, {},);
    dialogRef.componentInstance.updatePolitical_partyForm.get('lema')?.setValue(political_party.lema);
    dialogRef.componentInstance.updatePolitical_partyForm.get('nombre')?.setValue(political_party.nombre);
    dialogRef.componentInstance.politicalId = political_party._id;
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result){
        this.updatePoliticalPartyTableRequest();
        this.snackbar.open('Usuario editado exitosamente', 'cerrar', { duration: 2000 });
      }
    });
  }

  openDelete(_id: string){
    const dialogRef = this.dialog.open(RgConfirmDialogComponent, {},);
    dialogRef.componentInstance.message = `vas a eliminar el elemento con el id: ${_id}\n¿Estas seguro?`;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteRequest(_id);
      }
    });
  }

  deleteRequest(id: string){
    this.politicalPartyDataService.delete(id).subscribe({
      next: (x) =>{
        this.snackbar.open('Usuario eliminado exitosamente', 'cerrar', { duration: 2000 });
        this.updatePoliticalPartyTableRequest();
      },
      error: (err)=>{
        this.snackbar.open(err.error, 'cerrar', { duration: 2000 });
      }
    })

  }

  updatePoliticalPartyTableRequest(){
    this.politicalPartyDataService.getAll().subscribe({
      next: (x) =>{
        this.political_partyList = x;
        this.dataSource = new MatTableDataSource(this.political_partyList);
        this.changeDetectorRefs.detectChanges();    
      },
      error: (err)=>{
        this.snackbar.open(err.error, 'cerrar', { duration: 2000 });
      }
    })

  }


}
