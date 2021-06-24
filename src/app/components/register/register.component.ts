import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }

  form : any={}
  ngOnInit(): void {
  }

  onSubmit(){
    if (this.form.password !== this.form.password2){
      alert("password don't match!");
      return;
    }
    const newUser:User= new User(this.form.username,this.form.password,this.form.email);
    this.auth.signUp(newUser).subscribe(
      data=>{
        console.log(data)
        alert("Sign up success!")
        window.location.reload()
      },
      error=>{
        console.log(error)
        alert(error.error)
        window.location.reload()
      }
    );
    this.clearForm();
  }

  clearForm(){
    this.form={}
  }

}
