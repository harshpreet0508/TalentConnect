import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {  HmHomepageComponent } from './hiring-manager/hm-homepage/hm-homepage.component';
import { TaAdminHomeComponent } from './ta-admin/ta-admin-home/ta-admin-home.component';
import {   TaMemberHomeComponent} from './ta-member/ta-member-home/ta-member-home.component';
import { PanelistHomeComponent } from './panelist/panelist-home/panelist-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourceComponent } from './ta-admin/resource/resource.component';
import { JobRequestComponent } from './hiring-manager/job-request/job-request.component';
import { EditRecordComponent } from './hiring-manager/edit-record/edit-record.component';
const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'hm', children: [
    {
        path: 'jobRequest',    
        component: JobRequestComponent,
    },
    {
      path:'', 
      component: HmHomepageComponent,
    },{
      path:'edit/:id', 
      component:EditRecordComponent,
    },
  ] },
  { path: 'admin',  children: [
    {
        path: 'resource',    
        component: ResourceComponent,
    },
    {
      path:'', 
      component: TaAdminHomeComponent,
    },
  ]},
  { path: 'member', component: TaMemberHomeComponent },
  { path: 'panel', component: PanelistHomeComponent } 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
