import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RgLoginComponent } from './components/rg-login/rg-login.component';
import { RgNotFoundComponent } from './components/rg-not-found/rg-not-found.component';
import { RgPublicMainComponent } from './components/rg-public-main/rg-public-main.component';

const routes: Routes = [
  {
    path: '',
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
      {
        path: '**',
        redirectTo: 'not-found' 
      }    
    ]
  },
  {
    path: '',
    component: RgLoginComponent
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
