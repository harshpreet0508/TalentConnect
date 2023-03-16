import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
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

  onChange(event: MatTabChangeEvent) {
    const tab = event.tab.textLabel;
    console.log(tab);
    this.hm.getJobRequestDetails(tab).subscribe((jobRequest: any) => {
      console.log("jobRequest ====", jobRequest);
      if (jobRequest) {
        this.dataSource = jobRequest
      }
    });
  }
}
