import { Component, Input, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-rg-political-party-management',
  templateUrl: './rg-political-party-management.component.html',
  styleUrls: ['./rg-political-party-management.component.scss']
})
export class RgPoliticalPartyManagementComponent implements OnInit {
    political_partyList: political_party[] = [];
    createUserForm = new FormGroup({
    lema: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
  });

  displayedColumns: string[] = ['_id', 'lema', 'name'];
  dataSource: MatTableDataSource<political_party>;
  constructor(public dialog: MatDialog, private route: ActivatedRoute, private service: PoliticalPartyGetAllService) { 
    this. political_partyList =this.route.snapshot.data['response'];
    this.dataSource = new MatTableDataSource(this.political_partyList);
  }

  ngOnInit(): void {
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

  addPolitical_party():void{
      this.service.getAll().subscribe(dataSource => {
      this.dataSource = dataSource;
      console.log(this.dataSource);
      this.dataSource = this.dataSource;
    })
  }

  openActualizar():void{
  }

  openDelete(_id: string){
    alert(`vas a eliminar el elemento con el id: ${_id}`)
  }

}
