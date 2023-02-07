import { Component } from '@angular/core';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { JobRequest } from 'src/app/models/JobRequest.model';
import { TaAdminService } from 'src/app/services/TaAdminService';

@Component({
  selector: 'app-ta-admin-home',
  templateUrl: './ta-admin-home.component.html',
  styleUrls: ['./ta-admin-home.component.css']
})
export class TaAdminHomeComponent {

  jobRequestDetails: JobRequest = new JobRequest();

  constructor(private taAdminService: TaAdminService) { }

  ngOnInit(): void {
    this.taAdminService.getJobRequestDetails().subscribe((jobRequest: any) => {
      if (jobRequest) {
        this.jobRequestDetails = jobRequest;
      }

    });
  }

}
