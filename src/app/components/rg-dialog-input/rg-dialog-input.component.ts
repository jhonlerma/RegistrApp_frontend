import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  ID: string;
}

@Component({
  selector: 'app-rg-dialog-input',
  templateUrl: './rg-dialog-input.component.html',
  styleUrls: ['./rg-dialog-input.component.scss']
})
export class RgDialogInputComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RgDialogInputComponent>,
    @Inject(MAT_DIALOG_DATA) public ID: DialogData) { }

  ngOnInit(): void {
  }

  onClickNO():void{
    this.dialogRef.close()
  }
  
}