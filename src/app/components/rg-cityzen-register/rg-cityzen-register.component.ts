import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/auth/role-response';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data/data.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { PasswordConfirmValidator } from 'src/app/validators/password-confirm.validator';
import { RgConfirmDialogComponent } from '../rg-confirm-dialog/rg-confirm-dialog.component';
import { RgDialogUpdateUserComponent } from '../rg-dialog-update-user/rg-dialog-update-user.component';

@Component({
  selector: 'app-cityzen-register',
  templateUrl: './rg-cityzen-register.component.html',
  styleUrls: ['./rg-cityzen-register.component.scss']
})
export class RgCityzenRegisterComponent implements OnInit, OnDestroy{

  roles: Role[] = [];
  showPasswordIcon: string = 'visibility_off';
  showPasswordConfirmIcon: string = 'visibility_off';

  createUserForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    passwordConfirm: new FormControl("", [Validators.required, Validators.minLength(8)]),
  });


  constructor(
    private userDataService: UserDataService,
    private dataService: DataService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.dataService.isOnRegister.next(true);
  }

  ngOnDestroy(){
    this.dataService.isOnRegister.next(false);

  }
  createUserSubmit() {

    if (this.createUserForm.valid) {
      this.userDataService.createCityzenUser(
        this.createUserForm.value['email']!,
        this.createUserForm.value['password']!,
        this.createUserForm.value['username']!
      ).subscribe({
        next: (response) => {
          this.snackBar.open(`Creacion de usuario exitoso: ${response.email}`, 'cerrar', { duration: 2000 });
          this.router.navigate(['/']);
        },
        error: (err) => {        
          this.snackBar.open(err.error, 'cerrar', { duration: 2000 }); }
      });
    }

  }

  isInvalidField(field: string) {
    return this.createUserForm.get(field)?.invalid && (this.createUserForm.get(field)?.dirty || this.createUserForm.get(field)?.touched);
  }

  hasError(field: string, validation: string) {
    return this.createUserForm.get(field)?.hasError(validation);
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
