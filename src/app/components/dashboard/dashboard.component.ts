import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username:string='';
  email:string='';
  role:string='';

  constructor(private userService:UserService) {    
    this.userService.getUser().subscribe(data=>{
    this.username = data.username;
    this.email = data.email;
    this.role = data.role.name;
  }) }

  ngOnInit(): void {
  }
  

  

}
