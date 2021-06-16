import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtToken } from '../model/jwtToken';
import { User } from '../model/User';

let httpOptions={
  headers: new HttpHeaders({"Content-Type":"application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:8080/'
  constructor(private http : HttpClient) {}

  attemptAuth(username:string, password:string):Observable<jwtToken>{
    return this.http.post<jwtToken>(this.baseUrl+'login',{
      "username":username,
      "password":password
    },httpOptions)
  }

  signUp(info:User):Observable<string>{
    return this.http.post<string>(this.baseUrl+'signup',info,httpOptions);
  }
}
