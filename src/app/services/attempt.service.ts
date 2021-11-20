import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helper";

@Injectable({
  providedIn: 'root'
})
export class AttemptService {

  constructor(private _http: HttpClient) { }

  public getAttemptsOfQuiz(qId:any) {
    return this._http.get(`${baseUrl}/attempts/quiz/${qId}`);
  }
  public SubmitQuiz(attempt:any) {
    return this._http.post(`${baseUrl}/attempts/`, attempt);
  }

  public getAttemptsOfUser(userId:any){
    return this._http.get(`${baseUrl}/attempts/user/${userId}`);
  }

  public getAttemptsOfUserAndQuiz(userId:any,qId:any){
    return this._http.get(`${baseUrl}/attempts/user/${userId}/quiz/${qId}`);
  }

}
