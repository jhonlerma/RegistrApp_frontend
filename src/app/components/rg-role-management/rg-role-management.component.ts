import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/models/auth/role-response';
import { RoleDataService } from 'src/app/services/role-data/role-data.service';

@Component({
  selector: 'app-rg-role-management',
  templateUrl: './rg-role-management.component.html',
  styleUrls: ['./rg-role-management.component.scss']
})
export class RgRoleManagementComponent implements AfterViewInit {

  resultrole: Role []=[];
  
  displayedColumns: string[] =['id', 'description', 'name'];
  dataSource: MatTableDataSource<Role>;

  constructor(private service: RoleDataService, private snackbar:MatSnackBar, private route: ActivatedRoute) { 
    this.resultrole=this.route.snapshot.data['response'];
    this.dataSource=new MatTableDataSource(this.resultrole);
    
  }

  ngAfterViewInit(): void {
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  


  
}
