import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RgCandidateManagementComponent } from './components/rg-candidate-management/rg-candidate-management.component';
import { RgCityzenRegisterComponent } from './components/rg-cityzen-register/rg-cityzen-register.component';
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
import { RoleGuard } from './guards/role/role.guard';
import { ResultListResolver } from './resolvers/result-list/result-list.resolver';
import { PoliticalPartyListResolver } from './resolvers/political-party-list/political-party-list.resolver';
import { RoleListResolver } from './resolvers/role-list/role-list.resolver';
import { TableListResolver } from './resolvers/table-list/table-list.resolver';
import { UserListResolver } from './resolvers/user-list/user-list.resolver';
import { UserResolver } from './resolvers/user/user.resolver';
import { PoliticalPartyGetAllService } from './services/political-party-get-all.service';
import { CandidateListResolver } from './resolvers/candidate-list/candidate-list.resolver';

const routes: Routes = [
  {
    path: '',
    canActivate: [NoAuthGuard],
    component: RgPublicMainComponent,
    children: [
      {
        path: '',
        component: RgLoginComponent
      },
      {
        path: 'register',
        component: RgCityzenRegisterComponent
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: RgPrivateMainComponent,
    children: [
      {
        path: '',
        resolve: {
          response: UserResolver,
        },
        component: RgDashboardComponent
      },
      {
        data: {
          roles: ['administrator']
        },
        canActivate: [RoleGuard],
        resolve: {
          response: UserListResolver,
          roles: RoleListResolver,
        },
        path: 'user-management',
        component: RgUserManagementComponent
      },
      {
        data: {
          roles: ['administrator']
        },
        canActivate: [RoleGuard],
        path: 'role-management',
        component: RgRoleManagementComponent
      },
      {
        data: {
          roles: ['administrator']
        },
        canActivate: [RoleGuard],
        path: 'permission-management',
        component: RgPermissionManagementComponent
      },
      {
        data: {
          roles: ['administrator', 'jury']
        },
        canActivate: [RoleGuard],
        path: 'table-management',
        resolve: {
          response: TableListResolver,
         
        },
        component: RgTableManagementComponent
      },
      {
        data: {
          roles: ['administrator']
        },
        canActivate: [RoleGuard],

        path: 'political-party-management',
        resolve: {
          response: PoliticalPartyListResolver,
          candidates: CandidateListResolver,
        },
        component: RgPoliticalPartyManagementComponent
      },
      {
        data: {
          roles: ['administrator']
        },
        canActivate: [RoleGuard],
        path: 'candidate-management',
        resolve: {
          response:PoliticalPartyListResolver,
          candidates: CandidateListResolver,
        },
        component: RgCandidateManagementComponent
      },
      {
        data: {
          roles: ['administrator']
        },
        canActivate: [RoleGuard],
        path: 'result-management',
        resolve: {
          response: ResultListResolver,
         
        },
        component: RgResultManagementComponent
      },
      {
        data: {
          roles: ['administrator', 'jury', 'cityzen']
        },
        canActivate: [RoleGuard],
        path: 'reports',
        component: RgReportsViewerComponent
      },

    ]
  },
  {
    path: 'not-found',
    component: RgNotFoundComponent
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
