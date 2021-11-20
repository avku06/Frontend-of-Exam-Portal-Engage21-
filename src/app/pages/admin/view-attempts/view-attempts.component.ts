import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {AttemptService} from "../../../services/attempt.service";
import Swal from "sweetalert2";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-view-attempts',
  templateUrl: './view-attempts.component.html',
  styleUrls: ['./view-attempts.component.css']
})
export class ViewAttemptsComponent implements OnInit {

  attempts:any;
  qId:any;
  quiz:any;
  constructor(private _route: ActivatedRoute,
              private _quiz:QuizService,
              private attemptService:AttemptService,
              private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qId'];

    this._quiz.getQuiz(this.qId).subscribe(
      (data: any) => {
        this.quiz = data;
      },
      (error:any) => {
        this._snack.open('Error in loading quiz data', '', {
          duration: 3000,
        });
      }
    );

    this.attemptService.getAttemptsOfQuiz(this.qId).subscribe(
      (data:any)=>{
        this.attempts=data;
        // console.log(this.attempts);
      },
      (error:any)=>{
        Swal.fire('Error!!', 'Error in loading quiz attempts from server', 'error');
      }
    );

  }

}
