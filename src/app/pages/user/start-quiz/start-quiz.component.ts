import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../services/question.service";
import {QuizService} from "../../../services/quiz.service";
import Swal from "sweetalert2";
import {AttemptService} from "../../../services/attempt.service";
import {LoginService} from "../../../services/login.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  qid:any;
  questions:any;

  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;
  attempt:any;
  isSubmit = false;

  timer: any;

  constructor(
    private locationSt: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _quiz: QuizService,
    private _attempt:AttemptService,
    private _login:LoginService,
    private snack:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.preventBackButton();
    this.qid = this._route.snapshot.params['qid'];
    this.loadQuestions();
  }
  loadQuestions() {
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data: any) => {
        this.questions = data;

        this.timer = this.questions[0].quiz.maxDuration * 60;
        this.startTimer();
      },

      (error) => {
        Swal.fire('Error', 'Error in loading questions of quiz', 'error');
      }
    );
  }

  preventBackButton() {
    // @ts-ignore
    history.pushState(null, null, location.href);
    this.locationSt.onPopState(() => {
      // @ts-ignore
      return history.pushState(null, null, location.href);
    });
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: `Submit`,
      icon: 'info',
    }).then((e) => {
      if (e.isConfirmed) {
        this.evalQuiz();
      }
    });
  }

  startTimer() {
    let t = window.setInterval(() => {
      //code
      if (this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000);
  }

  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }

  evalQuiz() {
    //calculation
    //call to sever  to check questions
    this._question.evalQuiz(this.questions).subscribe(
      (data: any) => {
        this.marksGot = data.marksGot;
        this.correctAnswers = data.correctAnswers;
        this.attempted = data.attempted;
        this.isSubmit = true;
        this.attempt={
          marksGot : this.marksGot,
          correct_ques:this.correctAnswers,
          attempted_ques:this.attempted,
          quiz:{
            qId:this.qid,
          },
          user:{
            id:this._login.getUser().id,
          }
        };
        this._attempt.SubmitQuiz(this.attempt).subscribe(
          (data:any)=>{
            Swal.fire('Success', 'Result added to Database. You can Close the Window', 'success');
          },
          (error:any)=>{
            this.snack.open('Error in adding result to the Database', '', {
              duration: 3000,
            });
          }
        );
      },
      (error) => {
        this.snack.open('Error in evaluating quiz. Check your internet connection', '', {
          duration: 3000,
        });
      }
    );
  }


  printPage(){
    window.print();
  }
}
