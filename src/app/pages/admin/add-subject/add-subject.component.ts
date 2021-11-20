import { Component, OnInit } from '@angular/core';
import {SubjectsService} from "../../../services/subjects.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  subject={
    name:'',
    description:''
  }
  constructor(private subjectService:SubjectsService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  AddSubject(){
    if (this.subject.name.trim() == '' || this.subject.name == null) {
      this.snack.open('Subject Name Required !!', '', {
        duration: 3000,
      });
      return;
    }

    this.subjectService.addSubject(this.subject).subscribe(
      (data: any) => {
        this.subject.name = '';
        this.subject.description = '';
        Swal.fire('Success !!', 'Subject is added successfuly', 'success');
      },
      (error) => {
        this.snack.open(error.error.text,'',{
          duration:3000,
        })
        // Swal.fire('Error !!', 'Server error !!', 'error');
      }
    );
  }

}
