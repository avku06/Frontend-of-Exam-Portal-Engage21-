import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../../services/question.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId:any;
  qTitle:any;
  questions :any;

  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _snak: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data: any) => {
        this.questions = data;
      },
      (error) => {
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }

  //delete quesion
  deleteQuestion(qid:any) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure , want to delete this question?',
    }).then((result) => {
      if (result.isConfirmed) {
        //confim
        this._question.deleteQuestion(qid).subscribe(
          (data) => {
            Swal.fire('Success !', 'Question Deleted !', 'success');
            this.questions = this.questions.filter((q:any) => q.quesId != qid);
          },

          (error) => {
            Swal.fire('Error !', 'Error in deleting question !', 'error');

          }
        );
      }
    });
  }
}
