import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/models/auth/role-response';
import { Permission } from 'src/app/models/permission';
import { User } from 'src/app/models/user';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { PasswordConfirmValidator } from 'src/app/validators/password-confirm.validator';
import { RgConfirmDialogComponent } from '../rg-confirm-dialog/rg-confirm-dialog.component';
import { RgDialogUpdateUserComponent } from '../rg-dialog-update-user/rg-dialog-update-user.component';

@Component({
  selector: 'app-rg-permission-management',
  templateUrl: './rg-permission-management.component.html',
  styleUrls: ['./rg-permission-management.component.scss']
})
export class RgPermissionManagementComponent implements OnInit {

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  displayedColumns: string[] = ['role', 'permission'];
  dataSource: MatTableDataSource<Permission>;
  permissionList: Permission[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {

    this.permissionList = this.route.snapshot.data['response'];
    this.dataSource = new MatTableDataSource(this.permissionList);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

}
