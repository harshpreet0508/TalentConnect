import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HiringManagerService } from '../../services/hiringManager';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { JobRequest } from 'src/app/models/JobRequest.model';
import{Router} from '@angular/router'


@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})


export class EditRecordComponent {

  constructor(private hm: HiringManagerService,
    private http: HttpClient,private router:Router,
    private activatedRoute: ActivatedRoute) { }

  jobRequest: JobRequest;
  userid!: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val => {
      this.userid = val['id'];
      this.hm.getJobRequestDetailsById(this.userid).subscribe((res: JobRequest) => {
        console.log(res.reqNumber);
        this.jobRequest = res;
        console.log("jobRequest===", this.jobRequest)
      })
    })
  }

  updateData() {
    this.http.put(`http://localhost:8080/talentConnect/api/hiringManager/updateJobRequestDetails`, this.jobRequest)
      .subscribe(status => console.log("json", JSON.stringify(status)));
    console.log("form submitted", this.userid);
    this.router.navigate(['hm']);
  }
}
