import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { TokenStorageService } from './token-storage.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private tokenService:TokenStorageService) { }

}
