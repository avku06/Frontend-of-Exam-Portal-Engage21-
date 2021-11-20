import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helper";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public quizzes() {
    return this.http.get(`${baseUrl}/quiz/`);
  }

  //add quiz
  public addQuiz(quiz:any) {
    return this.http.post(`${baseUrl}/quiz/`, quiz);
  }

  //delete quiz
  public deleteQuiz(qId:any) {
    return this.http.delete(`${baseUrl}/quiz/${qId}`);
  }

  public getQuiz(qId:any) {
    return this.http.get(`${baseUrl}/quiz/${qId}`);
  }

  //update quiz
  public updateQuiz(quiz:any) {
    return this.http.put(`${baseUrl}/quiz/`, quiz);
  }

  //get quizzes of subject
  public getQuizzesOfCategory(cid:any) {
    return this.http.get(`${baseUrl}/quiz/subject/${cid}`);
  }
  //qet active quizzes
  public getActiveQuizzes() {
    return this.http.get(`${baseUrl}/quiz/active`);
  }

  //get active quizzes of subject
  public getActiveQuizzesOfSubject(cid:any) {
    return this.http.get(`${baseUrl}/quiz/subject/active/${cid}`);
  }
}
