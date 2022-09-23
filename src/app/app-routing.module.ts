import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RgDashboardComponent } from './components/rg-dashboard/rg-dashboard.component';
import { RgLoginComponent } from './components/rg-login/rg-login.component';
import { RgNotFoundComponent } from './components/rg-not-found/rg-not-found.component';
import { RgPrivateMainComponent } from './components/rg-private-main/rg-private-main.component';
import { RgPublicMainComponent } from './components/rg-public-main/rg-public-main.component';
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
      {
        path: 'not-found',
        component: RgNotFoundComponent
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
      }
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
