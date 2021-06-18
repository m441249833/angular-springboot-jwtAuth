import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080/'

  constructor(
    private http:HttpClient,
    private token:TokenStorageService) {
    }
  tokenStr = this.token.getToken()
  httpOptions={
    headers: new HttpHeaders({"Content-Type":"application/json","Authorization":this.tokenStr?this.tokenStr:""})
  }
  
  getUser():Observable<User>{
    return this.http.get<User>(`${this.baseUrl}user/currentUser`,this.httpOptions)
  }

}
