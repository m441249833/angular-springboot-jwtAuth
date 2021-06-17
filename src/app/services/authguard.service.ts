import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor(
    private router: Router,
    private jwtHelper:JwtHelperService,
    private token:TokenStorageService
  ) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const s = this.token.getToken();
    if (s != null) {
        if (!this.jwtHelper.isTokenExpired()) return true;
    }  
    this.router.navigate(['login']);
    return false;
  }

}