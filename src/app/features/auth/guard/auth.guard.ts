import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.isLoggedIn()) {
        return true;
        }
     this._router.navigate(['/login']);
  return false;
  }

  public isLoggedIn(): boolean {
    let status = false;
    if ((localStorage.getItem('user') === 'undefined' || localStorage.getItem('user') === '' || localStorage.getItem('user') === null) || (localStorage.getItem('user_id') === 'undefined' || localStorage.getItem('user_id') === '' || localStorage.getItem('user_id') === null)) {
      status = false;
    }
      else {
       status = true;
       }
    return status;
    }
 }

