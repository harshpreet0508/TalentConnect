import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from "jquery";
import {HiringManagerService} from '../../services/hiringManager';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-job-request',
  templateUrl: './job-request.component.html',
  styleUrls: ['./job-request.component.css']
})
export class JobRequestComponent {
  constructor(private hm:HiringManagerService,private http: HttpClient) { }
  ngOnInit(): void {
  }
  skills: string[] = ["AWS", "Angular", "Azure", "Bash/Shell/Powershell", "C#", "CSS", "C/C++", "Docker", "ETL", "GraphQL", "Java", "Kafka", "MongoDB", ".NET", "PHP", "Python","Salesforce","Selenium","Snowflake"];
  registerForm = new FormGroup({
    reqNumber: new FormControl(null,[Validators.required, Validators.pattern("^[0-9]{6}$")]),
    grade: new FormControl("", [Validators.required, Validators.pattern("[0-9]+"), Validators.min(25), Validators.max(35)]),
    position: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z]+")]),
    hmemployeeId: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{9}$")]),
    hmEmailId: new FormControl("", [Validators.required, Validators.pattern("^[a-z]+[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    hmName: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z]{3,}")]),
    jobStatus:new FormControl(""),
    primarySkillSet:new FormControl(""),
    secondarySkillSet:new FormControl(""),
    goodToHaveSkillSet:new FormControl(""),
    location:new FormControl(""),
  });

  registerSubmitted() {
    this.http.post('http://localhost:8080/talentConnect/api/talentAcquisition/saveJobRequestDetails', this.registerForm.value).subscribe(status=> console.log(JSON.stringify(status)));
    console.log("form submitted");
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
    return this.registerForm.get("reqNumber") as FormControl;
  }
  get Grade(): FormControl {
    return this.registerForm.get("grade") as FormControl;
  }
  get Position(): FormControl {
    return this.registerForm.get("position") as FormControl;
  }
  get hmemployeeId(): FormControl {
    return this.registerForm.get("hmemployeeId") as FormControl;
  }
  get hmEmailId(): FormControl {
    return this.registerForm.get("hmEmailId") as FormControl;
  }
  get hmName(): FormControl {
    return this.registerForm.get("hmName") as FormControl;
  }


}

