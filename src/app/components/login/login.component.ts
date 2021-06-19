import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isLoginFailed = false;
  errorMessage='';

  constructor(private auth:AuthService, 
              private tokenStorage:TokenStorageService,
              private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(){
    this.auth.attemptAuth(this.form.username,this.form.password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.TOKEN);
        this.tokenStorage.saveUsername(this.form.username);
        this.tokenStorage.saveRole(data.ROLE);
        this.isLoginFailed = false;
        this.router.navigateByUrl('/home')
      },
      error => {
        console.log(error);
        this.errorMessage = error.error;
        this.isLoginFailed = true;
      }
    );
  }
  

}
