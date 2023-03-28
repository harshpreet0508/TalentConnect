import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { HiringManagerService } from '../../services/hiringManager';
import { Routes, RouterModule,Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { JobRequest } from 'src/app/models/JobRequest.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  id: string;
}
@Component({
  selector: 'app-hm-homepage',
  templateUrl: './hm-homepage.component.html',
  styleUrls: ['./hm-homepage.component.css']
})
export class HmHomepageComponent {
  animal: string;
  name: string;
  dataSource: any;
  displayedColumns: string[] = ['ReqNumber', 'Grade', 'HmEmployeeId', 'HmEmailId', 'HmName', 'Location', 'JobStatus', 'Position', 'PrimarySkillSet', 'SecondarySkillSet', 'GoodToHaveSkillSet','Action'];

  constructor(private hm: HiringManagerService,
    private router:Router,
    private route:ActivatedRoute,
    private http: HttpClient, public snackBar:MatSnackBar,public dialog: MatDialog) { 
    this.onChange("Open");
  }

  ngOnInit(): void {
  }
 
  onChange(event: any) {
    console.log(event);
    this.hm.getJobRequestDetails(event).subscribe((jobRequest: any) => {
      console.log("jobRequest ====", jobRequest);
      if (jobRequest) {
        this.dataSource = jobRequest
      }
    });
  }

  edit(id:number){
    this.router.navigate(['hm/edit',id])
  }
  openDialog(id:number): void {
    let res:string;
    const dialogRef = this.dialog.open(viewDialog, {
      data: {id: id, animal: "this.animal"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      res = result;
    });
  }
  
  delete1(id:number){
    let result= prompt("Type Y to confirm delete?");
    if (result==="Y" || result==="y"){
    this.hm.deleteJobRequestDetailsById(id).subscribe(res => {
      console.log("Success");
      this.onChange("Open");
    });
    this.snackBar.open("Action complete", "Record Deleted", {
      duration: 2000,
    });
  }
    
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'confirmDialog.html',
})
export class viewDialog {
  constructor(
    public dialogRef: MatDialogRef<viewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
