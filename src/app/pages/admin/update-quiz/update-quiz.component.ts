import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {SubjectsService} from "../../../services/subjects.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _quiz: QuizService,
    private _sub: SubjectsService,
    private _router: Router,
    private snack:MatSnackBar
  ) {}

  qId :any;
  quiz:any;
  subjects:any;

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qId).subscribe(
      (data: any) => {
        this.quiz = data;
      },
      (error:any) => {
        this.snack.open('Error in loading Quiz Details', '', {
          duration: 3000,
        });
      }
    );

    this._sub.subjects().subscribe(
      (data: any) => {
        this.subjects = data;
      },
      (error:any) => {
        this.snack.open('Error in loading Subjects', '', {
          duration: 3000,
        });
      }
    );
  }

  //update form submit
  public updateData() {

    this._quiz.updateQuiz(this.quiz).subscribe(
      (data:any) => {
        Swal.fire('Success !!', 'quiz updated', 'success').then((e) => {
          this._router.navigate(['/admin-dashboard/view-quiz']);
        });
      },
      (error:any) => {
        Swal.fire('Error', 'error in updating quiz', 'error');

      }
    );
  }

}
