import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobApplicant } from 'src/app/models/JobApplicant';
import { JobDetail } from 'src/app/models/JobDetail';
import { OuterService } from 'src/services/outer.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  job : JobDetail = new JobDetail();
  jobList : JobDetail[]=[]
  applicantList : JobApplicant[]=[];
  constructor(private _outerService: OuterService, private _router: Router,) { }

  ngOnInit() {
    this.getJobsByRec();
    if(localStorage.getItem("role")!='ROLE_REC'){
      this._router.navigate(['/login']);
    }
  }
  getJobsByRec(){
    this._outerService.getJobsByRec().subscribe((res)=>{
      // @ts-ignore
      this.jobList = res.data;
    },(err)=>{
      console.log(err)
    })
  }
  
}
