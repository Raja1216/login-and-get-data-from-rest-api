import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 toogled:any = 1;
 sideBar:any;
 user:string | any;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }
  toogle(){
    if (this.toogled) {
     this.sideBar =  document.getElementById('sidebar');
    this.sideBar.style.width = "0"
    this.toogled = 0 ;
    }
    else
    {
      this.sideBar =  document.getElementById('sidebar');
    this.sideBar.style.width = "14rem"
    this.toogled = 1 ;
    }
  }
  logOut(){
    localStorage.removeItem('user');
    localStorage.removeItem('user_id');
    this._router.navigateByUrl('/login');
  }
}
