import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user : any;

  constructor(public login: LoginService,private router:Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
  }

  public logout() {
    Swal.fire({
      title: 'Are you Sure?',
      showCancelButton: true,
      confirmButtonText: `Logout`,
      icon: 'info',
    }).then((e) => {
      if (e.isConfirmed) {
        this.login.logout();
        this.router.navigate(['']);
        this.login.loginStatusSubject.next(true);
      }
    });
  }
}
