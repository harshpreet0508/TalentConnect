import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HmHomepageComponent } from './hm-homepage/hm-homepage.component';
import { JobRequestComponent } from '../hiring-manager/job-request/job-request.component';
import { RouterModule, Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    HmHomepageComponent,
    JobRequestComponent
  ],
  imports: [
    CommonModule,RouterModule,MatFormFieldModule,FormsModule,
    ReactiveFormsModule,MatInputModule,MatToolbarModule, MatPaginatorModule, HttpClientModule, MatTableModule,RouterModule
  ]
})
export class HiringManagerModule { }
