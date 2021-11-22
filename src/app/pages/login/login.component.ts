import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _snackBar:MatSnackBar,private loginService:LoginService,private router:Router) { }

  public LoginData={
    username:'',
    password:''
  }

  ngOnInit(): void {
  }
  hide=true;

  SubmitLoginForm(){
    if (this.LoginData.username.trim() == '' || this.LoginData.username == null) {
      this._snackBar.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.LoginData.password.trim() == '' || this.LoginData.password == null) {
      this._snackBar.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    this.loginService.generateToken(this.LoginData).subscribe(
      (data: any) => {

        //login...
        this.loginService.loginUser(data.token);

        this.loginService.getCurrentUser().subscribe(
          (user: any) => {
            delete user.password;
            this.loginService.setUser(user);

            //redirect : ADMIN: admin-dashboard
            //redirect : NORMAL:normal-dashboard
            if (this.loginService.getUserRole() == 'ADMIN') {
              //admin dashboard
              this.router.navigate(['admin-dashboard']);
              this.loginService.loginStatusSubject.next(true);
            } else if (this.loginService.getUserRole() == 'NORMAL') {
              //normal user dashbaord
              this.router.navigate(['user-dashboard/0']);
              this.loginService.loginStatusSubject.next(true);
            } else {
              this.loginService.logout();
            }
        });
      },
      (error) => {
        this._snackBar.open('Invalid Details !! Try again', '', {
          duration: 3000,
        });
      }
    );
  }

  ClearDetails(){
    this.LoginData.username='';
    this.LoginData.password='';
  }
}
