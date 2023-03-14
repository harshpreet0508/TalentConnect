import { Component } from '@angular/core';
import {HiringManagerService} from '../../services/hiringManager';

@Component({
  selector: 'app-hm-homepage',
  templateUrl: './hm-homepage.component.html',
  styleUrls: ['./hm-homepage.component.css']
})
export class HmHomepageComponent {
  dataSource: any;
  displayedColumns: string[] = ['ReqNumber', 'Grade', 'HmEmployeeId', 'HmEmailId','HmName','JobStatus','Position','PrimarySkillSet','SecondarySkillSet','GoodToHaveSkillSet'];

  constructor(private hm: HiringManagerService) { }

  ngOnInit(): void {
    this.hm.getJobRequestDetails().subscribe((jobRequest: any) => {
      console.log("jobRequest ====", jobRequest);
      if (jobRequest) {
        this.dataSource = jobRequest
      }
    });
  }
}
