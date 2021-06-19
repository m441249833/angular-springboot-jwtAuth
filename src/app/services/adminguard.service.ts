import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AdminGuardService implements CanActivate {
  
  constructor(
    private router: Router,
    private jwtHelper:JwtHelperService,
    private token:TokenStorageService
  ) {}

 // routing condition
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const s = this.token.getToken();
    if (s != null) {
        if (!this.jwtHelper.isTokenExpired()) 
            if (this.token.getRole() == '1') return true;
    }
    window.sessionStorage.clear();
    this.router.navigate(['login']);
    return false;
  }

}