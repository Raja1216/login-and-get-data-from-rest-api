import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/services/home.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  empId: number;
  employeeDetails: object | any;
  isLoding: boolean = false;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _homeService: HomeService
  ) {
    this.empId = this._activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getEmpDetails(this.empId);
  }
  getEmpDetails(empId: number) {
    this.isLoding = true;
    this._homeService.getEmployeeDetails({ id: empId }).subscribe(
      (res: any) => {
        this.isLoding = false;
        this.employeeDetails = res[0];
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  getMoreDetails() {
    this.employeeDetails.view_more;
    window.open(this.employeeDetails.view_more, '_blank');
  }
}
