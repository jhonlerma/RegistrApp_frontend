import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-rg-table-management',
  templateUrl: './rg-table-management.component.html',
  styleUrls: ['./rg-table-management.component.scss']
})
export class RgTableManagementComponent implements OnInit {

  tableForm= new FormGroup({
    nTable:new FormControl("", [Validators.required]),
    nPersonTable:new FormControl("", [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

}
