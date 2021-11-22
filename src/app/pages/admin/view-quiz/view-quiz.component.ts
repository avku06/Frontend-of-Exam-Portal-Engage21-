import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../../services/quiz.service";
import Swal from "sweetalert2";
import {SubjectsService} from "../../../services/subjects.service";

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {
  quizzes : any;
  subjects:any;
  quiz_data:any;
  constructor(private quizService: QuizService,private subjectService:SubjectsService) {}

  ngOnInit(): void {
    this.quizService.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        this.quiz_data=data;
      },
      (error) => {
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );

    this.subjectService.subjects().subscribe(
      (data:any)=>{
        this.subjects=data;
      },
      (error)=>{
        Swal.fire('Error!!', 'error in loading subjects from server', 'error');
      }
    )

  }

  filter_quiz(id:any){
    if(id == 0){
      this.quiz_data=this.quizzes;
    }else {
      this.quiz_data=this.quizzes.filter((q: any) => q.subject.cid == id);
    }
  }

  deleteQuiz(qId:any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //delete...
        this.quizService.deleteQuiz(qId).subscribe(
          (data:any) => {
            Swal.fire('Success !!', 'Quiz Deleted', 'success')
              .then((result) => {
                this.quiz_data = this.quizzes.filter((quiz:any) => quiz.qId != qId);
                this.quizzes=this.quiz_data;
              })
          },
          (error:any) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error');
          }
        );
      }
    });
  }

}
