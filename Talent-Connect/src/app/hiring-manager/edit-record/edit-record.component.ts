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
  editForm =  new FormGroup({
    reqNumber: new FormControl(null),
    grade: new FormControl('')
  });
  jobRequest:JobRequest;
  userid!: number;
  ngOnInit(): void {
    // const id = this.router.snapshot.paramMap.get('id');
    // // console.log(id);
    // this.hm.getJobRequestDetailsById(id)
    //   .subscribe((result:JobRequest) => {
    //     console.log("result:",result);
    //     this.jobRequest=result[0];
    //     const id = this.jobRequest.reqNumber;
    //     console.log(id);
    //     // console.log(this.reqNumber);
    //     this.editForm = new FormGroup({
    //       reqNumber: new FormControl(this.reqNumber),
    //       grade: new FormControl("")
    //     });
    //   });
    // this.editForm=this.fb.group({})
    this.activatedRoute.params.subscribe(val => {
      this.userid = val['id'];
      this.hm.getJobRequestDetailsById(this.userid).subscribe(res=>{
        console.log(res.reqNumber);
        // this.editForm.setValue({reqNumber:res.reqNumber,
        //   grade:res.grade,}) ;
      })
    })
  }

  updateData() {
    // console.log(this.editForm.value);
    // this.http.put('http://localhost:8080/talentConnect/api/talentAcquisition/saveJobRequestDetails', this.registerForm.value)
    //   .subscribe(status => console.log(JSON.stringify(status)));
    // alert("form submitted");
  }
  get reqNumber(): FormControl {
    return this.editForm.get("reqNumber") as FormControl;
  }
  get Grade(): FormControl {
    return this.editForm.get("grade") as FormControl;
  }
}
