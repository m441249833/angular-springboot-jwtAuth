import { Injectable } from '@angular/core';

const TOKEN_KEY= "TOKEN";
const USERNAME_KEY = "USERNAME";
const ROLE_KEY = "ROLE_ID";
@Injectable({
  providedIn: 'root'
})

//get information from session storage;
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

  public saveRole(roleId:string){
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY,roleId);
  }

  public getRole():string | null{
    return window.sessionStorage.getItem(ROLE_KEY)
  }

}
