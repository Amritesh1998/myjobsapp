import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http:HttpClient) { }  

  fetchJobs(){
    return this.http.get('https://nut-case.s3.amazonaws.com/jobs.json');
  }
}
