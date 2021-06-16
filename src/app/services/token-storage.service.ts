import { Injectable } from '@angular/core';

const TOKEN_KEY= "token";
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

}
