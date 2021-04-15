import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobDetail } from 'src/app/models/JobDetail';
import { OuterService } from 'src/services/outer.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {
  job : JobDetail = new JobDetail();
  startDate : string;
  endDate:string;
  constructor(private _outerService: OuterService, private _router: Router,) { }

  ngOnInit() {
    if(localStorage.getItem("role") !="ROLE_REC"){
      this._router.navigate(['/login'])
    }
  }
  createJob(){
    this.job.recruiter_id = localStorage.getItem("userId");
    console.log(this.job)
    this._outerService.jobPost(this.job).subscribe((res)=>{
         console.log(res)
         this._router.navigate(['/home'])
    })
    
  }
}
