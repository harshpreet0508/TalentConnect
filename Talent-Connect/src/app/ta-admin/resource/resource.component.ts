import { Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

export interface Requisition {
  tamsid: string;
  taemployeeid: number;
  taemailid: string;
  taname: string;
  action: string;
}

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent {
  
  displayedColumns: string[] = ['tamsid', 'taemployeeid', 'taemailid', 'taname', 'action'];


}
