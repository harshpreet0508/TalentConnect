import { Component } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router){
  }
  navigate(url:string){
  //do your any operations
  this.router.navigate([url]);
  
  }
  cardImg: any[] = [
    {
      'name': 'TA-Admin',
      'img': '/assets/adminc.png',
      'url': 'admin'
    },
    {
      'name': 'Hiring Manager',
      'img': '/assets/hiring5.png',
      'url': 'hm'
    },
    {
      'name': 'Panelist',
      'img': '/assets/panelistc2.png',
      'url':'panel'
    },
    {
      'name': 'TA-Member',
      'img': '/assets/tamember.png',
      'url':'member'
    },
  ];
}
