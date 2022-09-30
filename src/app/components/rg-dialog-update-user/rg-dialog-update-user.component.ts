import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Role } from 'src/app/models/auth/role-response';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { DialogData } from '../rg-dialog-input/rg-dialog-input.component';

@Component({
  selector: 'app-rg-dialog-update-user',
  templateUrl: './rg-dialog-update-user.component.html',
  styleUrls: ['./rg-dialog-update-user.component.scss']
})
export class RgDialogUpdateUserComponent implements OnInit {

  updateUserForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    role: new FormControl("",[]),
  });

  showPasswordIcon: string = 'visibility_off';
  showPasswordConfirmIcon: string = 'visibility_off';

  roles: Role[] = [];
  userId: string ='';

  constructor(private userDataService: UserDataService, public dialogRef: MatDialogRef<RgDialogUpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public ID: DialogData, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

  }

  updateUserSubmit() {
    if (this.updateUserForm.valid) {
      this.userDataService.updateUser(
        this.userId,
        this.updateUserForm.value['role']!,
        this.updateUserForm.value['username']!
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
  
  isInvalidField(field: string) {
    return this.updateUserForm.get(field)?.invalid && (this.updateUserForm.get(field)?.dirty || this.updateUserForm.get(field)?.touched);
  }

  hasError(field: string, validation: string) {
    return this.updateUserForm.get(field)?.hasError(validation);
  }


}
