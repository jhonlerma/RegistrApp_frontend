import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-rg-user-management',
  templateUrl: './rg-user-management.component.html',
  styleUrls: ['./rg-user-management.component.scss']
})
export class RgUserManagementComponent implements OnInit {

  userList: User[] = [];

  createUserForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    username: new FormControl("",[Validators.required]),
    password: new FormControl("", [Validators.required]),
    passwordConfirm: new FormControl("", [Validators.required])
  });

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.userList);

  showPasswordIcon: string = 'visibility_off';
  showPasswordConfirmIcon: string = 'visibility_off';

  constructor() { }

  ngOnInit(): void {
  }

  createUserSubmit(){

  }

  isInvalidField(field: string){
    return this.createUserForm.get(field)?.invalid && (this.createUserForm.get(field)?.dirty || this.createUserForm.get(field)?.touched);
  }

  hasError(field: string, validation: string){
    return this.createUserForm.get(field)?.hasError(validation);
  }

  toogleShowPasswordIcon(){
    if (this.showPasswordIcon == 'visibility_off') {
      this.showPasswordIcon = 'visibility';
    } else {
      this.showPasswordIcon = 'visibility_off';
    }
  }

  toogleShowPasswordConfirmIcon(){
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

}
