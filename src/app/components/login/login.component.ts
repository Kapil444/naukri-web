import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPayload } from 'src/app/models/LoginPayload';
import { OuterService } from 'src/services/outer.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: LoginPayload = new LoginPayload;
  username: string;
  password;
  passShow: boolean;
  acceptKeep: boolean;
  toggle = false;
  constructor(private _outerService: OuterService, private _router: Router,) { }

  ngOnInit() {
  }
  login(loginData) {
    console.log(loginData)
    this._outerService.loginUser(loginData).subscribe((res) => {
      console.log(res);
      // @ts-ignore
      var decodedToken = this.getDecodedAccessToken(res.token);
      console.log(decodedToken)
      // @ts-ignore
      localStorage.setItem('token',res.token)
      localStorage.setItem("role",decodedToken.role);
      localStorage.setItem("userId",decodedToken._id);
      localStorage.setItem("userName",decodedToken.userName);
      
      this._router.navigate(['/home'])
    }, (err) => {
      alert("Invalid Username and Password")
    })
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

}
