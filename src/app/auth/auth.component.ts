import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login: boolean = true;
  register: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  goToRegister(){
    this.login = false;
    this.register = true;
  }

  goToLogin(){
    this.login = true;
    this.register = false;
  }
}
