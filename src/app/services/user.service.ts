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

  
  getUser():Observable<User>{
    return this.http.get<User>(`${this.baseUrl}user/currentUser`,{headers:this.getHeader()})
  }

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}user/${id}`,{headers:this.getHeader()})
  }

  getAllUser():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}user/all`,{headers:this.getHeader()})
  }

  updateUser(user:any):Observable<User>{
    return this.http.put<any>(`${this.baseUrl}user/update`,user,{headers:this.getHeader()})
  }

  deleteUser(id:number){
    return this.http.delete<number>(`${this.baseUrl}user/delete?id=${id}`,{headers:this.getHeader()})
  }

  private getHeader():HttpHeaders{
    let t = this.token.getToken();
    return new HttpHeaders({"Content-Type":"application/json","Authorization":t?t:""})
  }

}
