import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {SubjectsService} from "../../../services/subjects.service";

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css']
})
export class ViewSubjectsComponent implements OnInit {

  subjects:any;

  constructor(private subjectService: SubjectsService) {}

  ngOnInit(): void {
    this.subjectService.subjects().subscribe(
      (data: any) => {
        this.subjects = data;
      },
      (error:any) => {
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    );
  }

}
