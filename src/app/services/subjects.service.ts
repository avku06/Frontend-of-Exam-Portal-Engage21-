import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helper";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http:HttpClient) { }

  //load all subjects
  public subjects() {
    return this.http.get(`${baseUrl}/subject/`);
  }

  // add new subject
  public addSubject(subject:any) {
    return this.http.post(`${baseUrl}/subject/`, subject);
  }

}
