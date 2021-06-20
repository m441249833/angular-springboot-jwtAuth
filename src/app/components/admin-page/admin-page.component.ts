import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {faTimes,faPenSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  users:any[]=[];
  faTimes = faTimes;
  faPenSquare = faPenSquare;

  constructor(private userService : UserService){
    userService.getAllUser().subscribe(
      data=>{
        this.users = data;
      });
   }

  ngOnInit(): void {
  }

  onUpdate(user:any){
    
  }

  onDelete(id:number){
    
  }

}
