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

}