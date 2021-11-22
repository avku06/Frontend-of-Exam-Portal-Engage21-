import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../../../services/login.service";
import {AttemptService} from "../../../services/attempt.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  cid:any;
  quizzes:any;
  nonattempted_quiz:any;
  constructor(private _route: ActivatedRoute, private _quiz: QuizService,private _snack:MatSnackBar,
              private loginService:LoginService,private attemptService:AttemptService) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.cid = params['cid'];
      //load all quiz
      if (this.cid == 0) {
        this._quiz.getActiveQuizzes().subscribe(
          (data: any) => {
            this.quizzes = data;
          },
          (error:any) => {
            this._snack.open('Error in loading quizzes from server', '', {
              duration: 3000,
            });
          }
        );
      } else {

        this._quiz.getActiveQuizzesOfSubject(this.cid).subscribe(
          (data: any) => {
            this.quizzes = data;
          },
          (error:any) => {
            this._snack.open('Error in loading quizzes from server', '', {
              duration: 3000,
            });
          }
        );
      }
    });
  }

}
