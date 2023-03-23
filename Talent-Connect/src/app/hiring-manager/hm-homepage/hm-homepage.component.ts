import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { HiringManagerService } from '../../services/hiringManager';
import { Routes, RouterModule,Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { JobRequest } from 'src/app/models/JobRequest.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hm-homepage',
  templateUrl: './hm-homepage.component.html',
  styleUrls: ['./hm-homepage.component.css']
})
export class HmHomepageComponent {
  dataSource: any;
  displayedColumns: string[] = ['ReqNumber', 'Grade', 'HmEmployeeId', 'HmEmailId', 'HmName', 'Location', 'JobStatus', 'Position', 'PrimarySkillSet', 'SecondarySkillSet', 'GoodToHaveSkillSet','Action'];

  constructor(private hm: HiringManagerService,
    private router:Router,
    private route:ActivatedRoute,
    private http: HttpClient) { 
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

  edit(id:number){
    this.router.navigate(['hm/edit',id])
  }
  delete1(id:number){
    alert("Are you sure");
    this.hm.deleteJobRequestDetailsById(id).subscribe(res => {
      console.log("Success");
      this.onChange("Open");
    });
    
  }
}
