import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { HiringManagerService } from '../../services/hiringManager';
import { Routes, RouterModule,Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { JobRequest } from 'src/app/models/JobRequest.model';

@Component({
  selector: 'app-hm-homepage',
  templateUrl: './hm-homepage.component.html',
  styleUrls: ['./hm-homepage.component.css']
})
export class HmHomepageComponent {
  dataSource: any;
  displayedColumns: string[] = ['ReqNumber', 'Grade', 'HmEmployeeId', 'HmEmailId', 'HmName', 'Location', 'JobStatus', 'Position', 'PrimarySkillSet', 'SecondarySkillSet', 'GoodToHaveSkillSet','Action'];

  constructor(private hm: HiringManagerService,private router:Router,private route:ActivatedRoute) { 
    this.onChange("Open");
  }

  ngOnInit(): void {
  
  }
 
  onChange(event: any) {
    console.log(event);
    this.hm.getJobRequestDetails(event).subscribe((jobRequest: any) => {
      console.log("jobRequest ====", jobRequest);
      if (jobRequest) {
        this.dataSource = jobRequest
      }
    });
  }

  editForm = new FormGroup({
    reqNumber: new FormControl(null),
    grade: new FormControl("")
  });
  // jobRequest:JobRequest;

  edit(id:number){
    this.router.navigate(['hm/edit',id])
  }

  // updateData(){
  //   this.hm.updateStudents(this.editForm).subscribe(
  //     (resp) => {
  //       console.log(resp);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
  // get f() { return this.editForm.controls; }
}
