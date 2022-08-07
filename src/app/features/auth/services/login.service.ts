import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { HttpHeaderService } from 'src/app/shared/services/http-header.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient,private _httpHeaders: HttpHeaderService) { }

  signIn(params:any) {
    const URL ='https://retoolapi.dev/B13laa/getusers';
    this._httpHeaders.httpOptions.params = params;
    return this._http.get<any>(URL, this._httpHeaders.httpOptions).pipe(
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

  getUsers(){
    const URL ='https://retoolapi.dev/B13laa/getusers';
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
}
