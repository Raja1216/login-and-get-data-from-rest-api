import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaderService } from 'src/app/shared/services/http-header.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient,private _httpHeaders: HttpHeaderService) { }

  getEmployees(){
    const URL ='https://retoolapi.dev/GFHqAV/getemployees';
    return this._http.get<any>(URL).pipe(
      tap(
        {
          next: (res: any) => {
            return res;
          },
          error: (error) => {
            return error;
          },
        }
      )
    );
  }
  getEmployeeDetails(params:number | any){
    const URL ='https://retoolapi.dev/H2F0Ui/getemployedetail';
    this._httpHeaders.httpOptions.params = params;
    return this._http.get<any>(URL,this._httpHeaders.httpOptions).pipe(
      tap(
        {
          next: (res: any) => {
            return res;
          },
          error: (error) => {
            return error;
          },
        }
      )
    );
  }
}
