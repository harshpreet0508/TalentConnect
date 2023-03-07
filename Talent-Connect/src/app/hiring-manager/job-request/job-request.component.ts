import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from "jquery";

@Component({
  selector: 'app-job-request',
  templateUrl: './job-request.component.html',
  styleUrls: ['./job-request.component.css']
})
export class JobRequestComponent {
  constructor() { }
  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    reqno: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{6}$")]),
    grade: new FormControl("", [Validators.required, Validators.pattern("[0-9]+"), Validators.min(25), Validators.max(35)]),
    position: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z]+")]),
    eid: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{9}$")]),
    email: new FormControl("", [Validators.required, Validators.pattern("^[a-z]+[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    hmname: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z]{3,}")]),
    jobstatus: new FormControl("", [Validators.required])
  });

  registerSubmitted() {
    console.log(this.registerForm);
  }
  getSelect1Value(skillset1: string): void {
    if (skillset1 != '') {
      $("#skillset2 option[value='" + skillset1 + "'").hide();
      $("#skillset3 option[value='" + skillset1 + "'").hide();
    }
  }

  getSelect2Value(skillset2: string): void {
    if (skillset2 != '') {
      $("#skillset3 option[value='" + skillset2 + "'").hide();
    }
  }



  get Reqno(): FormControl {
    return this.registerForm.get("reqno") as FormControl;
  }
  get Grade(): FormControl {
    return this.registerForm.get("grade") as FormControl;
  }
  get Position(): FormControl {
    return this.registerForm.get("position") as FormControl;
  }
  get Eid(): FormControl {
    return this.registerForm.get("eid") as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  get Hmname(): FormControl {
    return this.registerForm.get("hmname") as FormControl;
  }


}

