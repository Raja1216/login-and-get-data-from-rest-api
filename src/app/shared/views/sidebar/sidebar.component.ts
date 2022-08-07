import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  linkActive: string = 'home';
  user_id:number | any;
  constructor() { this.user_id = localStorage.getItem('user_id')}

  ngOnInit(): void {
    this.user_id = Number(this.user_id) ;
    console.log(this.user_id) ;
  }
  navigateToProfile(){
    return `/cbt/${this.user_id}/profile`;
  }
}
