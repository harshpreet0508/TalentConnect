import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule
} from '@angular/material/card'; 


import {MatToolbarModule} from '@angular/material/toolbar'; 

import {MatMenuModule} from '@angular/material/menu'; 
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import {  HiringManagerModule } from './hiring-manager/hiring-manager.module';
import { TAAdminModule } from './ta-admin/ta-admin.module';
import {  TAMemberModule} from './ta-member/ta-member.module';
import { PanelistModule } from './panelist/panelist.module';
import { TaAdminService } from './services/TaAdminService';
import { JobRequest } from './models/JobRequest.model';

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
    MatToolbarModule,MatMenuModule,MatIconModule, AppRoutingModule, TAAdminModule, PanelistModule,
    HiringManagerModule,TAMemberModule,
    JobRequest
    
  ],
  providers: [TaAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
