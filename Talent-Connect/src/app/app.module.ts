import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule
} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HiringManagerModule } from './hiring-manager/hiring-manager.module';
import { TAAdminModule } from './ta-admin/ta-admin.module';
import { TAMemberModule } from './ta-member/ta-member.module';
import { PanelistModule } from './panelist/panelist.module';
import { TaAdminService } from './services/TaAdminService';
import {NgConfirmModule} from 'ng-confirm-box';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule, MatMenuModule, MatIconModule, AppRoutingModule, TAAdminModule, PanelistModule,
    HiringManagerModule, TAMemberModule, MatTableModule,MatFormFieldModule,FormsModule, ReactiveFormsModule,
    MatInputModule,NgConfirmModule,NgToastModule,


  ],
  providers: [TaAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
