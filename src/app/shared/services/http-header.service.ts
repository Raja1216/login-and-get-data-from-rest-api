import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpHeaderService {
  httpOptions: object | any = {};
  constructor() {
    this.httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
}
