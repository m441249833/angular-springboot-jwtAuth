import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imgUrl : string = 'url(../../../assets/images/login.jpg)';

  form: any={}
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage='';

  constructor(private auth:AuthService, private tokenStorage:TokenStorageService) {}

  ngOnInit(): void {
  }

  onSubmit(){
    this.auth.attemptAuth(this.form.username,this.form.password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        window.location.reload();
      },
      error => {
        console.log(error);
        this.errorMessage = error;
        this.isLoginFailed = true;
      }
    );
  }
  

}
