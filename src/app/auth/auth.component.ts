import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login: boolean = true;
  register: boolean = false;
  forgotPassword: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  goToRegister(){
    this.login = false;
    this.register = true;
    this.forgotPassword = false;
  }

  goToLogin(){
    this.login = true;
    this.register = false;
    this.forgotPassword = false;
  }

  goToForgotPassword(){
    this.login = false;
    this.register = false;
    this.forgotPassword = true;
  }
}
