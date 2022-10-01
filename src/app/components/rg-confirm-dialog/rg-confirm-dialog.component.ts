import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogData } from '../rg-dialog-input/rg-dialog-input.component';

@Component({
  selector: 'app-rg-confirm-dialog',
  templateUrl: './rg-confirm-dialog.component.html',
  styleUrls: ['./rg-confirm-dialog.component.scss']
})
export class RgConfirmDialogComponent implements OnInit {

  message: string = '';
  
  constructor(public dialogRef: MatDialogRef<RgConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public ID: DialogData, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClickAccept(){
    this.dialogRef.close(true);
  }

}
