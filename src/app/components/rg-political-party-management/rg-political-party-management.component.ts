import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RgDialogInputComponent } from '../rg-dialog-input/rg-dialog-input.component';
import { RgPoliticalPartyGetAllComponent } from '../rg-political-party-get-all/rg-political-party-get-all.component';
import { RgPoliticalPartyGetIdComponent } from '../rg-political-party-get-id/rg-political-party-get-id.component';

@Component({
  selector: 'app-rg-political-party-management',
  templateUrl: './rg-political-party-management.component.html',
  styleUrls: ['./rg-political-party-management.component.scss']
})
export class RgPoliticalPartyManagementComponent implements OnInit {
  ID = String
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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

  openAgregar():void{
    const dialogRef = this.dialog.open(RgDialogInputComponent, {
      data: {ID: this.ID}, 
    },);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result){
        console.log("El campo fue Agregado gregado con exito");
      }
    });
  }

  openActualizar():void{
    const dialogRef = this.dialog.open(RgDialogInputComponent, {
      data: {ID: this.ID}, 
    },);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result){
        console.log("El campo fue Actualizado con exito");
      }
    });
  }

  openEliminar():void{
    const dialogRef = this.dialog.open(RgDialogInputComponent, {
      data: {ID: this.ID}, 
    },);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result){
        console.log("El campo fue Eliminado con exito");
      }
    });
  }

}
