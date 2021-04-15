import { Injectable } from "@angular/core";
import { LoginPayload } from "src/app/models/LoginPayload";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Requests } from "src/app/models/Requests";
import { Observable } from "rxjs";
import { User } from "src/app/models/User";
import { JobDetail } from "src/app/models/JobDetail";
import { JobApplicant } from "src/app/models/JobApplicant";
@Injectable({
    providedIn: 'root'
})
export class OuterService {
    request: Requests = new Requests();
    constructor(private _http: HttpClient) { }
    loginUser(loginData: LoginPayload): Observable<Response> {
        return this._http.post<Response>(this.request.host + this.request.login_req, loginData);
    }
    registUser(user: User): Observable<Response> {
        return this._http.post<Response>(this.request.host + this.request.regiser_user, user);
    }
    jobPost(job: JobDetail): Observable<Response> {
        return this._http.post<Response>(this.request.host + this.request.job_post, job);
    }
    getAllJobs(): Observable<Response> {
        return this._http.get<Response>(this.request.host + this.request.get_all_job);
    }
    getJobsByRec(): Observable<Response> {
        return this._http.get<Response>(this.request.host + this.request.get_job_rec+localStorage.getItem('userId'));
    }
    getJobsById(id): Observable<Response> {
        return this._http.get<Response>(this.request.host + this.request.get_job_id+id);
    }
    getApplicantByJobIdAndCandidateId(id): Observable<Response> {
        return this._http.get<Response>(this.request.host + this.request.get_applicant_By_job_can+id+"/"+localStorage.getItem('userId'));
    }
    getApplicantByJobId(id): Observable<Response> {
        return this._http.get<Response>(this.request.host + this.request.get_applicant_By_job+id);
    }
    applyForJob(jobApplicant: JobApplicant): Observable<Response> {
        return this._http.post<Response>(this.request.host + this.request.job_applicant, jobApplicant);
    }
}