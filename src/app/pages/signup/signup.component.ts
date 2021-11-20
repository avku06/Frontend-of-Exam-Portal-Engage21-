import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService:UserService,private _snackBar:MatSnackBar) {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sem:'',
    branch:''
  };


  ngOnInit(): void {
  }
  hide=true;


  SubmitRegisterationForm() {
    // console.log(this.user);
    if (this.user.username == '' || this.user.username == null || this.user.password == '' || this.user.password == null || this.user.firstName == '' || this.user.firstName == null || this.user.lastName == '' || this.user.lastName == null || this.user.email == '' || this.user.email == null || this.user.phone == '' || this.user.phone == null || this.user.sem == '' || this.user.sem == null || this.user.branch == '' || this.user.branch == null) {
      this._snackBar.open('Fill the required(*) fields !!','',{
        duration:3000,
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      //success
      (data)=>{
        Swal.fire('Success','Registration completed ','success')
          .then((result) => {
            this.ClearDetails();
          });
      },
      //error
      (error)=>{
        this._snackBar.open(error.error.text,'',{
          duration:3000,
        })
      }
    );
  }


  ClearDetails(){
    this.user.username='';
    this.user.sem='';
    this.user.branch='';
    this.user.phone='';
    this.user.email='';
    this.user.lastName='';
    this.user.firstName='';
    this.user.password='';
  }
}
