import { Component, OnInit } from '@angular/core';
import {SubjectsService} from "../../../services/subjects.service";
import Swal from "sweetalert2";
import {MatSnackBar} from "@angular/material/snack-bar";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  quiz={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    subject:{
      cid:''
    },
    maxDuration:''
  }
  subjects:any
  constructor(private subjectService:SubjectsService,private snack:MatSnackBar,private quizService:QuizService) { }

  ngOnInit(): void {
    this.subjectService.subjects().subscribe(
      (data:any)=>{
        this.subjects=data;
      },
      (error)=>{
        Swal.fire('Error!!', 'error in loading data from server', 'error');
      }
    )
  }

  AddQuiz(){
    if (this.quiz.title.trim() == '' || this.quiz.title == null || this.quiz.maxMarks==null || this.quiz.maxMarks=='' || this.quiz.numberOfQuestions=='' || this.quiz.numberOfQuestions==null || this.quiz.subject.cid==''){
      this.snack.open('Fill the required fields!!', '', {
        duration: 3000,
      });
      return;
    }

    this.quizService.addQuiz(this.quiz).subscribe(
      (data:any)=>{
        Swal.fire('Success', 'quiz is added', 'success');
        this.quiz = {
          title: '',
          description: '',
          maxMarks: '',
          numberOfQuestions: '',
          active: true,
          subject: {
            cid: '',
          },
          maxDuration: ''
        };
      },
      (error)=>{
        Swal.fire('Error!! ', 'Error while adding quiz', 'error');
      }
    )

  }
}
