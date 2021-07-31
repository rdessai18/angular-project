import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { User } from './user-model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signInMode = false;
  user: User;
  errorMessage: string = null;
  switchLoginMode(){
    this.signInMode= !this.signInMode;
  }
  
  loginToApp(form: NgForm){
      this.user = form.value;
      if(this.signInMode){
        this.authService.signIn(this.user).subscribe(
          responseData => {},
          errorMsg => {
            console.log(errorMsg);
            this.errorMessage = errorMsg;
          }
        );
      } else {
        this.authService.signup(this.user).subscribe(
          responseData => {},
          errorMsg => {
            console.log(errorMsg);
            this.errorMessage = errorMsg;
          }
        );
      }
    };
}
