import { Component, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: any;
 

  constructor(public modal:NgbActiveModal, private userService:UserService) {}

  ngOnInit(): void {
      
  }

  onSubmit(){
    switch (this.user.role.id){
      case '1': {this.user.role.name = "Administrator";break;}
      case '2': {this.user.role.name = "User";break;}
    }
    console.log(this.user)
    //TODO
    this.userService.updateUser(this.user).subscribe(data=>{
      this.modal.close();
      return;
    });

  }
  

}
