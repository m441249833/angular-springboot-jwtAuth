import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {faTimes,faPenSquare} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  users:any[]=[];
  faTimes = faTimes;
  faPenSquare = faPenSquare;

  constructor(private userService : UserService, private modalService:NgbModal){
    this.updateUsersView();
   }

  ngOnInit(): void {
  }

  onUpdate(user:any){
    const ref = this.modalService.open(UpdateUserComponent);
    // make a copy of user so it won't bind to modal instance
    // in case of canceling update modal the data can restore.
    ref.componentInstance.user = JSON.parse(JSON.stringify(user))
    ref.result.then((yes)=>{
      console.log("OK");
      this.updateUsersView();
      console.log(this.users)
    },
    (cancel)=>{
      console.log("cancel");
      console.log(user);
      return;
    }
    )
  }

  onDelete(user:any){
    if (confirm('Are you sure you want to delete user '+user.username+' ?'))
    this.userService.deleteUser(user._id).subscribe(data=>{
      this.users = this.users.filter(u=>u._id!==user._id)
      console.log(this.users);
    })
  }

  updateUsersView(){
    this.userService.getAllUser().subscribe(
      data=>{
        this.users = data;
        this.users.sort((a,b)=> a.id - b.id);
      });
  }


}
