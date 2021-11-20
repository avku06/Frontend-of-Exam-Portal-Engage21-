import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../services/question.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  qId:any;
  qTitle:any;
  question = {
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    quiz:{
      qId:''
    },
    marks:''
  };

  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private snack:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this.question.quiz['qId'] = this.qId;
  }

  formSubmit() {
    if (this.question.content.trim() == '' || this.question.content == null) {
      this.snack.open('Fill the question content!!', '', {
        duration: 3000,
      });
      return;
    }

    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      this.snack.open('Fill atleast two options', '', {
        duration: 3000,
      });
      return;
    }
    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      this.snack.open('Fill atleast two options', '', {
        duration: 3000,
      });
      return;
    }
    if (this.question.answer.trim() == '' || this.question.answer == null) {
      this.snack.open('Select answer of the question', '', {
        duration: 3000,
      });
      return;
    }

    //form submit
    this._question.addQuestion(this.question).subscribe(
      (data: any) => {
        Swal.fire('Success ', 'Question Added. Add Another one', 'success');
        this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
        this.question.marks='';
      },
      (error:any) => {
        Swal.fire('Error', 'Error in adding question', 'error');
      }
    );
  }

}
