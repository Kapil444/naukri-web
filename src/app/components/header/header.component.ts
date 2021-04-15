import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role :string
  constructor(private _router: Router,) { }

  ngOnInit() {
   this.role = localStorage.getItem("role")
   console.log(this.role)
  }
  logout(){
    localStorage.clear();
    this._router.navigate(['/home'])
    location.reload()
  }
}
