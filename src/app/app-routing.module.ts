import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RgCandidateManagementComponent } from './components/rg-candidate-management/rg-candidate-management.component';
import { RgDashboardComponent } from './components/rg-dashboard/rg-dashboard.component';
import { RgLoginComponent } from './components/rg-login/rg-login.component';
import { RgNotFoundComponent } from './components/rg-not-found/rg-not-found.component';
import { RgPermissionManagementComponent } from './components/rg-permission-management/rg-permission-management.component';
import { RgPoliticalPartyManagementComponent } from './components/rg-political-party-management/rg-political-party-management.component';
import { RgPrivateMainComponent } from './components/rg-private-main/rg-private-main.component';
import { RgPublicMainComponent } from './components/rg-public-main/rg-public-main.component';
import { RgReportsViewerComponent } from './components/rg-reports-viewer/rg-reports-viewer.component';
import { RgResultManagementComponent } from './components/rg-result-management/rg-result-management.component';
import { RgRoleManagementComponent } from './components/rg-role-management/rg-role-management.component';
import { RgTableManagementComponent } from './components/rg-table-management/rg-table-management.component';
import { RgUserManagementComponent } from './components/rg-user-management/rg-user-management.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { NoAuthGuard } from './guards/auth/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [NoAuthGuard],
    component: RgPublicMainComponent,
    children:[
      {
        path: '',
        component: RgLoginComponent
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: RgPrivateMainComponent,
    children:[
      {
        path:'',
        component: RgDashboardComponent
      },
      {
        path:'user-management',
        component: RgUserManagementComponent
      },
      {
        path:'role-management',
        component: RgRoleManagementComponent
      },
      {
        path:'permission-management',
        component: RgPermissionManagementComponent
      },
      {
        path:'table-management',
        component: RgTableManagementComponent
      },
      {
        path:'political-party-management',
        component: RgPoliticalPartyManagementComponent
      },
      {
        path:'candidate-management',
        component: RgCandidateManagementComponent
      },
      {
        path:'result-management',
        component: RgResultManagementComponent
      },
      {
        path:'reports',
        component: RgReportsViewerComponent
      },
      
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
