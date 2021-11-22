import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  Logout(){
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Logout',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.loginService.logout();
        this.router.navigate(['']);
        this.loginService.loginStatusSubject.next(true);
      }
    });
  }
}
