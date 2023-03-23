import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HiringManagerService } from '../../services/hiringManager';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { JobRequest } from 'src/app/models/JobRequest.model';


@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent {
  constructor(private hm: HiringManagerService, private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  jobRequest:JobRequest;
  userid!: number;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val => {
      this.userid = val['id'];
      this.hm.getJobRequestDetailsById(this.userid).subscribe((res:JobRequest)=>{
        console.log(res.reqNumber);
        this.jobRequest =res;
        console.log("jobRequest===",this.jobRequest)
      })
    })
  }

  updateData() {
  }
}
