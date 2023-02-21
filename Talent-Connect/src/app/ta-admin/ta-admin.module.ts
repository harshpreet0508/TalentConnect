import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaAdminHomeComponent } from './ta-admin-home/ta-admin-home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ResourceComponent } from './resource/resource.component'
import { RouterModule, Router } from '@angular/router';

@NgModule({
  declarations: [
    TaAdminHomeComponent,
    ResourceComponent
  ],
  imports: [
    CommonModule, MatToolbarModule, MatPaginatorModule, HttpClientModule, MatTableModule,RouterModule
  ]
})
export class TAAdminModule { }
