import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "./login.service";
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.loginService.isLoggedIn()){
      return true;
    }
    Swal.fire({
      icon: 'info',
      title: 'Oops',
      text: 'Please Logout to Go Back to the Login Page',
    })
    if(this.loginService.isLoggedIn() && this.loginService.getUserRole()=='ADMIN'){
      this.router.navigate(['admin-dashboard'])
    }
    else {
      this.router.navigate(['user-dashboard'])
    }
    return false;
  }

}
