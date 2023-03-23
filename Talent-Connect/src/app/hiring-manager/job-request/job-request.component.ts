import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from "jquery";
import { HiringManagerService } from '../../services/hiringManager';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { JobRequest } from 'src/app/models/JobRequest.model';

@Component({
  selector: 'app-job-request',
  templateUrl: './job-request.component.html',
  styleUrls: ['./job-request.component.css']
})
export class JobRequestComponent {
  constructor(private hm: HiringManagerService, private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  food: string[] = ['Steak', 'Pizza', 'Tacos'];
  skills: string[] = ["AWS", "Angular", "Azure", "Bash/Shell/Powershell", "C#", "CSS", "C/C++", "Docker", "ETL", "GraphQL", "Java", "Kafka", "MongoDB", ".NET", "PHP", "Python", "Salesforce", "Selenium", "Snowflake"];
  userid!: number;
  ngOnInit(): void {
    
  }
  registerForm = new FormGroup({
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

  registerSubmitted() {
    if (!this.registerForm.valid) {
      alert('Invalid inputs!');
      this.registerForm.markAllAsTouched();
      return;
    }
    this.http.post('http://localhost:8080/talentConnect/api/talentAcquisition/saveJobRequestDetails', this.registerForm.value)
      .subscribe(status => console.log(JSON.stringify(status)));
    alert("form submitted");
    this.registerForm.reset();
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
  get jobStatus(): FormControl {
    return this.registerForm.get("jobStatus") as FormControl;
  }
  get primarySkillSet(): FormControl {
    return this.registerForm.get("primarySkillSet") as FormControl;
  }
  get location(): FormControl {
    return this.registerForm.get("location") as FormControl;
  }

  get secondarySkillSet(): FormControl {
    return this.registerForm.get("secondarySkillSet") as FormControl;
  }
  get goodToHaveSkillSet(): FormControl {
    return this.registerForm.get("goodToHaveSkillSet") as FormControl;
  }


}

