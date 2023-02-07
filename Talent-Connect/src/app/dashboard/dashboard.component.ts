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
      'name': 'Admin',
      'img': '/assets/adminc.png'
    },
    {
      'name': 'Hiring Manager',
      'img': '/assets/hiring5.png'
    },
    {
      'name': 'Panelist',
      'img': '/assets/panelistc2.png'
    },
    {
      'name': 'TA-Member',
      'img': '/assets/tamember.png'
    },
  ];
}
