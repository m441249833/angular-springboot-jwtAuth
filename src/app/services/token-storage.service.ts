import { Injectable } from '@angular/core';
import { User } from '../model/User';

const TOKEN_KEY= "TOKEN";
const USERNAME_KEY = "USERNAME";
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(){
    window.sessionStorage.clear();
  }

  public saveToken(token:string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken():string | null{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username:string){
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY,username);
  }

  public getUsername():string | null{
    return window.sessionStorage.getItem(USERNAME_KEY);
  }

}
