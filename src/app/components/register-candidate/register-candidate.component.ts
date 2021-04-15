import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { OuterService } from 'src/services/outer.service';

@Component({
  selector: 'app-register-candidate',
  templateUrl: './register-candidate.component.html',
  styleUrls: ['./register-candidate.component.css']
})
export class RegisterCandidateComponent implements OnInit {
 user : User = new User();
  constructor(private _outerService: OuterService, private _router: Router,) { }

  ngOnInit() {
    this.user.role = "ROLE_REC";
  }
  registerCandidate(){
    console.log(this.user)    
    this._outerService.registUser(this.user).subscribe((res)=>{      
      alert("Register Successfully ")
    this._router.navigate(['/login'])
    },(err)=>{
      console.log(err)
    })   
  }
  selectedUserType(type){
    this.user.role = type;
    console.log(type)
  }

}
