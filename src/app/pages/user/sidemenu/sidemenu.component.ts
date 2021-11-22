import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {LoginService} from "../../../services/login.service";
import {Router} from "@angular/router";
import {SubjectsService} from "../../../services/subjects.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sidemenu-user',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  subjects:any;
  constructor(private loginService:LoginService,private router:Router,private subjectService:SubjectsService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.subjectService.subjects().subscribe(
      (data: any) => {
        this.subjects = data;
      },
      (error) => {
        this._snack.open('Error in loading subjects from server', '', {
          duration: 3000,
        });
      }
    );
  }
}
