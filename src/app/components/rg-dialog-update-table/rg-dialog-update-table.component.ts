import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TableManagementGetAllService } from 'src/app/services/table-management-get-all.service';
import { DialogData } from '../rg-dialog-input/rg-dialog-input.component';

@Component({
  selector: 'app-rg-dialog-update-table',
  templateUrl: './rg-dialog-update-table.component.html',
  styleUrls: ['./rg-dialog-update-table.component.scss']
})
export class RgDialogUpdateTableComponent implements OnInit {
  updateTableForm = new FormGroup({
    numero: new FormControl("", [Validators.required]),
    cantidad_inscritos: new FormControl("",[]),
  });
  tableId:string='';
  constructor(private service: TableManagementGetAllService, public dialogRef: MatDialogRef<RgDialogUpdateTableComponent>,
    @Inject(MAT_DIALOG_DATA) public ID: DialogData, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }
  updateUserSubmit() {
    if (this.updateTableForm.valid) {
      this.service.updateTable(
        this.tableId,
        this.updateTableForm.value['numero']!,
        this.updateTableForm.value['cantidad_inscritos']!
      ).subscribe({
        next: () => {
          this.snackBar.open(`Creacion de usuario exitoso`, 'cerrar', { duration: 2000 });
          this.dialogRef.close(true);
        },
        error: (err) => {         
          this.snackBar.open(err.error, 'cerrar', { duration: 2000 });
         }
      });
    }

  }
}
