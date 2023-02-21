import { Component } from '@angular/core';
import { TaAdminService } from 'src/app/services/TaAdminService';

@Component({
  selector: 'app-ta-admin-home',
  templateUrl: './ta-admin-home.component.html',
  styleUrls: ['./ta-admin-home.component.css']
})

export class TaAdminHomeComponent {
  dataSource: any;
  displayedColumns: string[] = ['ReqNumber', 'Grade', 'HmEmployeeId', 'HmEmailId', 'JdUrl', 'Assignment', 'ReqNoOpenings', 'GLCode', 'Location', 'Designation', 'TaResourceID'];

  constructor(private taAdminService: TaAdminService) { }

  ngOnInit(): void {
    this.taAdminService.getJobRequestDetails().subscribe((jobRequest: any) => {
      console.log("jobRequest ====", jobRequest);
      if (jobRequest) {
        this.dataSource = jobRequest
      }
    });
  }
}