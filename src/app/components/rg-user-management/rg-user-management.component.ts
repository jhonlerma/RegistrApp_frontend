import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/models/auth/role-response';
import { User } from 'src/app/models/user';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { PasswordConfirmValidator } from 'src/app/validators/password-confirm.validator';
import { RgConfirmDialogComponent } from '../rg-confirm-dialog/rg-confirm-dialog.component';
import { RgDialogUpdateUserComponent } from '../rg-dialog-update-user/rg-dialog-update-user.component';

@Component({
  selector: 'app-rg-user-management',
  templateUrl: './rg-user-management.component.html',
  styleUrls: ['./rg-user-management.component.scss']
})
export class RgUserManagementComponent {

  userList: User[] = [];

  createUserForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    passwordConfirm: new FormControl("", [Validators.required, Validators.minLength(8)]),
    role: new FormControl("", [Validators.required, Validators.minLength(8)]),
  });

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  displayedColumns: string[] = ['Email', 'Nombre Usuario', 'Rol', 'Editar', 'Eliminar'];
  dataSource: MatTableDataSource<User>;

  roles: Role[] = [];
  selectedOption: string | null = '';

  showPasswordIcon: string = 'visibility_off';
  showPasswordConfirmIcon: string = 'visibility_off';

  constructor(
    private userDataService: UserDataService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef
  ) {
    this.userList = this.route.snapshot.data['response'];
    this.roles = this.route.snapshot.data['roles'];

    this.dataSource = new MatTableDataSource(this.userList);
  }

  ngOnInit(): void {

  }

  createUserSubmit() {

    if (this.createUserForm.valid) {
      this.userDataService.createUser(
        this.createUserForm.value['email']!,
        this.createUserForm.value['password']!,
        this.createUserForm.value['role']!,
        this.createUserForm.value['username']!
      ).subscribe({
        next: (response) => {
          this.snackBar.open(`Creacion de usuario exitoso: ${response.email}`, 'cerrar', { duration: 2000 });
          this.updateUsersTableRequest();
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  startEdit(user: User) {
    this.openUserUpdateDialog(user);
  }

  startDeletion(id: string) {
    this.openUserDeleteDialog(`vas a eliminar el elemento con el id: ${id}\n¿Estas seguro?`, id);
  }

  openUserUpdateDialog(user: User): void {
    const dialogRef = this.dialog.open(RgDialogUpdateUserComponent, {},);
    dialogRef.componentInstance.roles = this.roles;
    dialogRef.componentInstance.updateUserForm.get('username')?.setValue(user.username);
    dialogRef.componentInstance.updateUserForm.get('role')?.setValue(user.role.id);
    dialogRef.componentInstance.userId = user.id;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateUsersTableRequest();
      }
    });
  }

  openUserDeleteDialog(message: string, id: string): void {
    const dialogRef = this.dialog.open(RgConfirmDialogComponent, {},);
    dialogRef.componentInstance.message = message;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUserRequest(id);
      }
    });
  }

  deleteUserRequest(id: string){
    this.userDataService.deleteUser(id).subscribe({
      next: (x) =>{
        this.updateUsersTableRequest();
        this.snackBar.open('Usuario eliminado exitosamente', 'cerrar', { duration: 2000 });
      },
      error: (err)=>{
        this.snackBar.open(err.error, 'cerrar', { duration: 2000 });
      }
    })

  }

  updateUsersTableRequest(){
    this.userDataService.getAllUsers().subscribe({
      next: (x) =>{
        this.userList = x;
        this.dataSource = new MatTableDataSource(this.userList);
        this.changeDetectorRefs.detectChanges();    
      },
      error: (err)=>{
        this.snackBar.open(err.error, 'cerrar', { duration: 2000 });
      }
    })

  }

}
