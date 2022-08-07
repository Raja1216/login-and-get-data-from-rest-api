import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this._fb.group({
    user_id: ['', [Validators.required]],
    password: ['', Validators.required],
  });
  error:string='';
  userarray:object | any =[];
  loginUserDetails: object | any;
  constructor( private _fb: FormBuilder,private _auth:LoginService,private _router: Router) { }

  ngOnInit(): void {
   this.getUsers();
  }
  attemptLogin(){
    if (this.loginForm.value.user_id == null || this.loginForm.value.user_id =='' ) {
      this.error = 'Enter user id please.';
      setTimeout(() => {
        this.error ='';
      }, 1000);
      return;
    }
    if (this.loginForm.value.password == null || this.loginForm.value.password =='' ) {
      this.error = 'Enter password please.';
      setTimeout(() => {
        this.error ='';
      }, 1000);
      return;
    }
    if (!this.loginForm.valid) {
      this.error = 'The user credentials were incorrect.';
      setTimeout(() => {
        this.error ='';
      }, 1000);
      return;
    }
    this._auth.signIn({user_id:this.loginForm.value.user_id,password:this.loginForm.value.password}).subscribe(
      (res: any) => {
       console.log(res);
       this.loginUserDetails = res
       if (this.loginUserDetails.length >0) {
        localStorage.setItem('user', this.loginUserDetails[0].name);
        localStorage.setItem('user_id', this.loginUserDetails[0].id);
        console.log(this.loginUserDetails);
         this._router.navigateByUrl('cbt/home');
       }
       else
       {
         this.error = 'The user credentials were incorrect.';
        setTimeout(() => {
          this.error ='';
        }, 1000);
        return;
       }
      },
      (err:any) =>
      {
        console.log(err);
      }
    );

  }
  getUsers(){
    this._auth.getUsers().subscribe(
      (res: any) => {
       console.log(res);
      },
      (err:any) =>
      {
        console.log(err);
      }
    );
  }
}
