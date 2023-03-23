import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { JobRequest } from "../models/JobRequest.model";

@Injectable({
  providedIn: 'root'
})
export class HiringManagerService {

  constructor(private http: HttpClient) { }

  getJobRequestDetails(jobStatus:any): Observable<JobRequest[]> {
    const params = new HttpParams().append('jobStatus', jobStatus);
    this.http.get('url', { params}); 
    return this.http.get<JobRequest[]>(`http://localhost:8080/talentConnect/api/hiringManager/getJobRequestsDetails`,{params}).pipe(
      catchError((err) => { return throwError(err); })
    );
  }

  getJobRequestDetailsById(id:any): Observable<JobRequest> {
    const params = new HttpParams().append('id', id);
    this.http.get('url', { params}); 
    console.log("params",{params});
    return this.http.get<JobRequest>(`http://localhost:8080/talentConnect/api/hiringManager/getJobRequestsDetailsByID`,{params}).pipe(
      catchError((err) => { return throwError(err); })
    );
  }
  //  updateStudents(id:any) : Observable<JobRequest>{
  //   const params = new HttpParams().append('id', id);
  //   this.http.get('url', { params}); 
  //   console.log(id);
  //   // console.log("ghh",student);
  //   console.log("ttthttp://localhost:8080/talentConnect/api/hiringManager/updateJobRequestDetails", {params});
  //   this.http.put<JobRequest>(`http://localhost:8080/talentConnect/api/hiringManager/updateJobRequestDetails`, {params})
  //   .subscribe(status => console.log(JSON.stringify(status)));
  //   console.log("form submitted");
  // }

}