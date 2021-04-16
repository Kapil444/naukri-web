import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplicant } from 'src/app/models/JobApplicant';
import { JobDetail } from 'src/app/models/JobDetail';
import { OuterService } from 'src/services/outer.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  job : JobDetail = new JobDetail();
  jobApplicant : JobApplicant = new JobApplicant()
  jobList : JobDetail[]=[]
  searchId: string;
  appliedCheck: boolean;
  constructor(private _outerService: OuterService, private _router: Router, private _routeParams: ActivatedRoute,) { }

  ngOnInit() {
    if (this._routeParams.snapshot.queryParamMap.has('q')) {
      this.searchId = this._routeParams.snapshot.queryParamMap.get('q');
      this.getJobById();
      this.getJobByCandidateAndJobId()
      this.appliedCheck = true;
    }
    
  }
  getJobById(){
    this._outerService.getJobsById(this.searchId).subscribe((res)=>{     
      // @ts-ignore
      this.job = res.data;
    },(err)=>{
      console.log(err)
    })
  }
  applyForJob(){
    if(localStorage.getItem('token')!=null && localStorage.getItem("role")=="ROLE_CUS"){
      this.jobApplicant.candidate_id = localStorage.getItem('userId');
      this.jobApplicant.job_id = this.searchId;
      this.jobApplicant.recruiter_id = this.job.recruiter_id;      
      this._outerService.applyForJob(this.jobApplicant).subscribe((res)=>{
        console.log(res);
        alert("Successfully Applied For Job");
        this._router.navigate(['/home']);
      },(err)=>{
        console.log(err)
      })
    }else{
      this._router.navigate(['/login'])
    }
  }
  getJobByCandidateAndJobId(){
    if(localStorage.getItem('token')!=null && localStorage.getItem("role")=="ROLE_CUS"){        
      this._outerService.getApplicantByJobIdAndCandidateId(this.searchId).subscribe((res)=>{
        // @ts-ignore
        if(res.data.length>0){
          this.appliedCheck = false;   
        }
             
      },(err)=>{
        console.log(err)
      })
    }
  }
}
