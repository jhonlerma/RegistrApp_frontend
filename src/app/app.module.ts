import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppComponent } from './app.component';
import { RgLoginComponent } from './components/rg-login/rg-login.component';
import { RgLeftSidebarComponent } from './components/rg-left-sidebar/rg-left-sidebar.component';
import { RgDashboardComponent } from './components/rg-dashboard/rg-dashboard.component';
import { RgAppBarComponent } from './components/rg-app-bar/rg-app-bar.component';
import { RgNotFoundComponent } from './components/rg-not-found/rg-not-found.component';
import { RgPublicMainComponent } from './components/rg-public-main/rg-public-main.component';
import { RgPrivateMainComponent } from './components/rg-private-main/rg-private-main.component';

@NgModule({
  declarations: [
    AppComponent,
    RgLeftSidebarComponent,
    RgDashboardComponent,
    RgLoginComponent,
    RgAppBarComponent,
    RgNotFoundComponent,
    RgPublicMainComponent,
    RgPrivateMainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
