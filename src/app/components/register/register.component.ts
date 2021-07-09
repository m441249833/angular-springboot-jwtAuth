import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService,public modal:NgbActiveModal) { }

  form : any={}
  isRegisterFailed:Boolean = false;
  errorMessage:String = "";
  ngOnInit(): void {
  }

  onSubmit(){
    if (this.form.password !== this.form.password2){
      this.isRegisterFailed = true;
      this.errorMessage = "Password not match."
      return;
    }
    const newUser:User= new User(this.form.username,this.form.password,this.form.email);
    this.auth.signUp(newUser).subscribe(
      data=>{
        console.log(data)
        this.clearForm();
        this.modal.close()
      },
      error=>{
        console.log(error.error.message)
        this.errorMessage = error.error.message
        this.isRegisterFailed = true;
        return;
      }
    );
  }

  clearForm(){
    this.form={}
  }

}
