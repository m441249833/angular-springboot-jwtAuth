import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {JwtModule} from '@auth0/angular-jwt';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { AuthGuardService } from './services/authguard.service';
import {AdminGuardService} from './services/adminguard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path: 'login' , component: LoginComponent
  },
  {
    path: 'home',component: HomeComponent,canActivate:[AuthGuardService] // use a guard to prevent unauthorized request
  },
  {
    path:'contact',component: ContactComponent,canActivate:[AuthGuardService]
  },
  {
    path:'adminPage',component:AdminPageComponent,canActivate:[AdminGuardService]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    ContactComponent,
    AdminPageComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: function getToken(){
          return sessionStorage.getItem("TOKEN");
        }
      }
    }),
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    NgbModule
  ],
  providers: [AuthGuardService,AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
