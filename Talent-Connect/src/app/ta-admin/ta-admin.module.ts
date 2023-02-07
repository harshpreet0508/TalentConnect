import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaAdminHomeComponent } from './ta-admin-home/ta-admin-home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    TaAdminHomeComponent
  ],
  imports: [
    CommonModule,MatToolbarModule,MatPaginatorModule
  ]
})
export class TAAdminModule { }
