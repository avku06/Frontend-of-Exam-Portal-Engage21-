import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import Swal from "sweetalert2";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../../../services/login.service";
import {AttemptService} from "../../../services/attempt.service";

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  qid:any;
  quiz:any;
  attempt:any;
  userId:any;
  isAttempted=false;

  constructor(
    private _route: ActivatedRoute,
    private _quiz: QuizService,
    private _router: Router,
    private _snack:MatSnackBar,
    private loginService:LoginService,
    private attemptService:AttemptService
  ) {}

  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    this.userId=this.loginService.getUser().id;

    this._quiz.getQuiz(this.qid).subscribe(
      (data: any) => {
        this.quiz = data;
      },
      (error:any) => {
        this._snack.open('Error in loading quiz data from server', '', {
          duration: 3000,
        });
      }
    );

    this.attemptService.getAttemptsOfUserAndQuiz(this.userId,this.qid).subscribe(
      (data:any)=>{
        if(data.length > 0){
          this.isAttempted=true;
          this.attempt=data[0];
        }
      },
      (error:any)=>{
        this._snack.open('Error in loading data', '', {
          duration: 3000,
        });
      }
    );
  }

  startQuiz() {
    Swal.fire({
      title: 'Do you want to start the quiz?',
      showCancelButton: true,
      confirmButtonText: `Start`,
      denyButtonText: `Don't save`,
      icon: 'info',
    }).then((result) => {
      if (result.isConfirmed) {
        this._router.navigate(['/user-dashboard/0']);
        let win=window.open('/start/'+this.qid, "",`height=${screen.height},width=${screen.width}`);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

}
