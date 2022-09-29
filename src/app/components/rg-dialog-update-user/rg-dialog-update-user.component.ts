import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/models/auth/role-response';
import { User } from 'src/app/models/user';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { DialogData, RgDialogInputComponent } from '../rg-dialog-input/rg-dialog-input.component';

@Component({
  selector: 'app-rg-dialog-update-user',
  templateUrl: './rg-dialog-update-user.component.html',
  styleUrls: ['./rg-dialog-update-user.component.scss']
})
export class RgDialogUpdateUserComponent implements OnInit {

  updateUserForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    role: new FormControl(""),
  });

  showPasswordIcon: string = 'visibility_off';
  showPasswordConfirmIcon: string = 'visibility_off';

  roles: Role[] = [];
  userId: string ='';

  constructor(private userDataService: UserDataService, public dialogRef: MatDialogRef<RgDialogInputComponent>,
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
        next: (response) => {
          this.snackBar.open(`Creacion de usuario exitoso: ${response.email}`, 'cerrar', { duration: 2000 });
        },
        error: (err) => { console.log(err);
        
          this.snackBar.open(err.error, 'cerrar', { duration: 2000 }); }
      });


    }

  }

  isInvalidField(field: string) {
    return this.updateUserForm.get(field)?.invalid && (this.updateUserForm.get(field)?.dirty || this.updateUserForm.get(field)?.touched);
  }

  hasError(field: string, validation: string) {
    console.log(this.updateUserForm.get(field)?.errors);
    return this.updateUserForm.get(field)?.hasError(validation);
  }

  toogleShowPasswordIcon() {
    if (this.showPasswordIcon == 'visibility_off') {
      this.showPasswordIcon = 'visibility';
    } else {
      this.showPasswordIcon = 'visibility_off';
    }
  }

  toogleShowPasswordConfirmIcon() {
    if (this.showPasswordConfirmIcon == 'visibility_off') {
      this.showPasswordConfirmIcon = 'visibility';
    } else {
      this.showPasswordConfirmIcon = 'visibility_off';
    }
  }

}
