import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { JobRequest } from "../models/JobRequest.model";

@Injectable({
  providedIn: 'root'
})
export class TaAdminService {

  constructor(private http: HttpClient) { }

  getJobRequestDetails(): Observable<JobRequest[]> {
    return this.http.get<JobRequest[]>(`http:localhost:8080/talentConnect/api/talentAcquisition/getJobRequestsDetails`).pipe(
      catchError((err) => { return throwError(err); })
    );
  }


  saveJobRequest(jobRequest: JobRequest): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http
      .post(`http:localhost:8080/talentConnect/api/talentAcquisition/saveJobRequestDetails`, jobRequest, {
        headers, responseType: 'text'
      })
      .pipe(catchError((err) => {
        return throwError(err)
      }))
  }
}