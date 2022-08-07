import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employeeList: object | any =[];
  isLoding:boolean=false;
  constructor(private _homeService:HomeService, private _router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

//Get Employee Data
getEmployees(){
  this.isLoding=true;
  this._homeService.getEmployees().subscribe(
    (res: any) => {
     this.isLoding = false
     this.employeeList = res
    },
    (err:any) =>
    {
      console.log(err);
    }
  );
}
goToEmployeeDetailsPage(empId:number){
this._router.navigate([`cbt/${empId}/emp-details`]);
}
}
