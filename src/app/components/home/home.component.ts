import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobDetail } from 'src/app/models/JobDetail';
import { OuterService } from 'src/services/outer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  job : JobDetail = new JobDetail();
  jobList : JobDetail[]=[]
  constructor(private _outerService: OuterService, private _router: Router,) { }

  ngOnInit() {
    this.getAllJob();
  }
  getAllJob(){
    this._outerService.getAllJobs().subscribe((res)=>{
      // @ts-ignore
      this.jobList = res.data;
    },(err)=>{
      console.log(err)
    })
  }
}
