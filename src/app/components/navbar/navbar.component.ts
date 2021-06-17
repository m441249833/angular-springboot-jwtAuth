import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username;

  constructor(private token:TokenStorageService, private router:Router) { 
    if (token.getUsername() !== null){
      this.username = token.getUsername();
    };
  }

  ngOnInit(): void {
  }

  onLogout(){
    this.token.signOut();
    this.router.navigateByUrl('/login');
  }
}
