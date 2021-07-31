import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { User } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(user: User){
    return this.http.post('signUpURl',user).pipe(
      catchError(this.handleError));
  }

  signIn(user: User){
    return this.http.post('signInURl',user).pipe(
      catchError(this.handleError), tap(
        responseData => {
          this.handleAuthentication();
        }
      ));
  }

  handleError( errorResp: HttpErrorResponse){
      console.log(errorResp.error.error.message);
      let errorMsg = errorResp.error.error.message;
      return throwError(errorMsg);
  }

  handleAuthentication(){}
}
