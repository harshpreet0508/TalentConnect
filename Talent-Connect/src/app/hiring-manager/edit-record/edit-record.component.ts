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
  food: string[] = ['Steak', 'Pizza', 'Tacos'];
  skills: string[] = ["AWS", "Angular", "Azure", "Bash/Shell/Powershell", "C#", "CSS", "C/C++", "Docker", "ETL", "GraphQL", "Java", "Kafka", "MongoDB", ".NET", "PHP", "Python", "Salesforce", "Selenium", "Snowflake"];
  userid!: number;
  isUpdateActive:boolean = false;

  editForm = new FormGroup({
    reqNumber: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]{6}$")]),
    grade: new FormControl("", [Validators.required, Validators.pattern("[0-9]+"), Validators.min(25), Validators.max(35)]),
    position: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z]+")]),
    hmemployeeId: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{9}$")]),
    hmEmailId: new FormControl("", [Validators.required, Validators.pattern("^[a-z]+[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    hmName: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z]{3,}")]),
    jobStatus: new FormControl("", [Validators.required]),
    primarySkillSet: new FormControl("", [Validators.required]),
    secondarySkillSet: new FormControl("", [Validators.required]),
    goodToHaveSkillSet: new FormControl("", [Validators.required]),
    location: new FormControl("", [Validators.required]),
    jobId: new FormControl("")
  });

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
  getSelect1Value(skillset1: string): void {
    if (skillset1 != '') {
      $("#skillset2 option[value='" + skillset1 + "'").hide();
      $("#skillset3 option[value='" + skillset1 + "'").hide();
    }
  }

  getSelect2Value(skillset2: string): void {
    if (skillset2 != '') {
      $("#skillset1 option[value='" + skillset2 + "'").hide();
      $("#skillset3 option[value='" + skillset2 + "'").hide();
    }
  }
  getSelect3Value(skillset3: string): void {
    if (skillset3 != '') {
      $("#skillset1 option[value='" + skillset3 + "'").hide();
      $("#skillset2 option[value='" + skillset3 + "'").hide();
    }
  }

  get reqNumber(): FormControl {
    return this.editForm.get("reqNumber") as FormControl;
  }
  get Grade(): FormControl {
    return this.editForm.get("grade") as FormControl;
  }
  get Position(): FormControl {
    return this.editForm.get("position") as FormControl;
  }
  get hmemployeeId(): FormControl {
    return this.editForm.get("hmemployeeId") as FormControl;
  }
  get hmEmailId(): FormControl {
    return this.editForm.get("hmEmailId") as FormControl;
  }
  get hmName(): FormControl {
    return this.editForm.get("hmName") as FormControl;
  }
  get jobStatus(): FormControl {
    return this.editForm.get("jobStatus") as FormControl;
  }
  get primarySkillSet(): FormControl {
    return this.editForm.get("primarySkillSet") as FormControl;
  }
  get location(): FormControl {
    return this.editForm.get("location") as FormControl;
  }

  get secondarySkillSet(): FormControl {
    return this.editForm.get("secondarySkillSet") as FormControl;
  }
  get goodToHaveSkillSet(): FormControl {
    return this.editForm.get("goodToHaveSkillSet") as FormControl;
  }

}
