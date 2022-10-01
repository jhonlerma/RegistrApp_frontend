import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog'
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
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { RgLoginComponent } from './components/rg-login/rg-login.component';
import { RgLeftSidebarComponent } from './components/rg-left-sidebar/rg-left-sidebar.component';
import { RgDashboardComponent } from './components/rg-dashboard/rg-dashboard.component';
import { RgAppBarComponent } from './components/rg-app-bar/rg-app-bar.component';
import { RgNotFoundComponent } from './components/rg-not-found/rg-not-found.component';
import { RgPublicMainComponent } from './components/rg-public-main/rg-public-main.component';
import { RgPrivateMainComponent } from './components/rg-private-main/rg-private-main.component';
import { RgUserManagementComponent } from './components/rg-user-management/rg-user-management.component';
import { RgRoleManagementComponent } from './components/rg-role-management/rg-role-management.component';
import { RgPermissionManagementComponent } from './components/rg-permission-management/rg-permission-management.component';
import { RgTableManagementComponent } from './components/rg-table-management/rg-table-management.component';
import { RgPoliticalPartyManagementComponent } from './components/rg-political-party-management/rg-political-party-management.component';
import { RgCandidateManagementComponent } from './components/rg-candidate-management/rg-candidate-management.component';
import { RgResultManagementComponent } from './components/rg-result-management/rg-result-management.component';
import { RgReportsViewerComponent } from './components/rg-reports-viewer/rg-reports-viewer.component';
import { HasPermissionDirective } from './directives/has-permission.directive';

import { RgPoliticalPartyGetAllComponent } from './components/rg-political-party-get-all/rg-political-party-get-all.component';
import { RgPoliticalPartyGetIdComponent } from './components/rg-political-party-get-id/rg-political-party-get-id.component';
import { RgDialogInputComponent } from './components/rg-dialog-input/rg-dialog-input.component';
import { RgDialogUpdateUserComponent } from './components/rg-dialog-update-user/rg-dialog-update-user.component';
import { RgDialogUpdatePoliticalPartyComponent } from './components/rg-dialog-update-political-party/rg-dialog-update-political-party.component';
import { RgConfirmDialogComponent } from './components/rg-confirm-dialog/rg-confirm-dialog.component';
import { RgCityzenRegisterComponent } from './components/rg-cityzen-register/rg-cityzen-register.component';
import { RgDialogUpdateCandidateComponent } from './components/rg-dialog-update-candidate/rg-dialog-update-candidate.component';
import { RgDialogUpdateTableComponent } from './components/rg-dialog-update-table/rg-dialog-update-table.component';

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
    RgUserManagementComponent,
    RgRoleManagementComponent,
    RgPermissionManagementComponent,
    RgTableManagementComponent,
    RgPoliticalPartyManagementComponent,
    RgCandidateManagementComponent,
    RgResultManagementComponent,
    RgReportsViewerComponent,
    HasPermissionDirective,
    RgPoliticalPartyGetAllComponent,
    RgPoliticalPartyGetIdComponent,
    RgDialogInputComponent,
    RgDialogUpdateUserComponent,
    RgDialogUpdatePoliticalPartyComponent,
    RgConfirmDialogComponent,
    RgCityzenRegisterComponent,
    RgDialogUpdateCandidateComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MatDialogModule,
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
    HttpClientModule,
    MatGridListModule,
    MatTableModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
