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

  
  getUser():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}user/currentUser`,{headers:this.getHeader()})
  }

  getUserById(id:String):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}user/${id}`,{headers:this.getHeader()})
  }

  getAllUser():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}user/all`,{headers:this.getHeader()})
  }

  updateUser(user:any):Observable<User>{
    return this.http.patch<any>(`${this.baseUrl}user/${user._id}`,user,{headers:this.getHeader()})
  }

  deleteUser(id:string){
    return this.http.delete<number>(`${this.baseUrl}user/${id}`,{headers:this.getHeader()})
  }

  private getHeader():HttpHeaders{
    const t = this.token.getToken();
    return new HttpHeaders({"Content-Type":"application/json","Authorization":t?t:""})
  }

}
