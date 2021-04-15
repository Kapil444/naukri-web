import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobApplicant } from 'src/app/models/JobApplicant';
import { OuterService } from 'src/services/outer.service';

@Component({
  selector: 'app-job-applicant',
  templateUrl: './job-applicant.component.html',
  styleUrls: ['./job-applicant.component.css']
})
export class JobApplicantComponent implements OnInit {
  searchId: string;
  applicantList:JobApplicant[]=[]
  constructor(private _outerService: OuterService, private _router: Router,private _routeParams: ActivatedRoute) { }

  ngOnInit() {
    if (this._routeParams.snapshot.queryParamMap.has('j')) {
      this.searchId = this._routeParams.snapshot.queryParamMap.get('j');
      this.getApplicantByJobId(this.searchId);
    }
    if(localStorage.getItem('role')!='ROLE_REC'){
      this._router.navigate(['/login'])
    }
  }
  getApplicantByJobId(id){
    this._outerService.getApplicantByJobId(id).subscribe((res)=>{
      console.log(res)
      //@ts-ignore
      this.applicantList = res.data;
    },(err)=>{
      console.log(err)
    })
  }

}
