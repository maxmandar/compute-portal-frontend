import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../interfaces/login';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

import {MatSnackBar } from '@angular/material/snack-bar';


import { Router } from '@angular/router';// to redirect post login correct route

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  isLoading = false; // add loading variable


  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar // add MatSnackBar to constructor
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }


  onLoginSubmit() {
    console.log('Submitting login form...');
    if (this.loginForm.valid) {
      const login: Login = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      console.log(login);
      this.isLoading = true; // set loading to true
      // Call your login service here
        this.AuthService.login(login).subscribe(
          {
          next: response => {
            console.log('Login response:', response);
            this.isLoading = false; // set loading to false on successful response
            this.router.navigate(['/project/list']);
          },
          error: error => {
            // console.error(error);
            console.error('Login error:', error);
            this.isLoading = false; // set loading to false on error
            if (error instanceof HttpErrorResponse) {
              // display error message using Angular Material snackbar
              const errorObj = error.error;
              const errorMessage = errorObj && errorObj.error_description ? errorObj.error_description : error.message;
              // const errorMessage = error.error && error.error.error ? error.error.error : error.message;

              this.snackBar.open(errorMessage, 'Close', { duration: 3000 });
  
            }

          },
          complete: () => {
            // handle completion
            console.log('Login request completed');
            this.isLoading = false; // set loading to false on completion
          }
        });
    }
  }

  onLogoutSubmit(){

    this.AuthService.logout();

  }




}
