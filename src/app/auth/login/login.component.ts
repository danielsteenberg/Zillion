import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/first';
import { NgForm } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDetails: User = new User();
  email: string;
  password: string;
  sending: boolean = false;
  returnUrl: string;
  error = '';
  errorMessage: boolean = false;

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private header: HeaderComponent) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = '/';
  }

  login(loginForm: NgForm) {
        this.userDetails.email = this.email;
        this.userDetails.password = this.password;
        this.sending = true;
        this.authenticationService.login(this.userDetails)
            .subscribe(
                (data) => {
                  this.sending = false;
                    //this.router.navigate(['/home']);
                    if(data){
                      this.header.setUser();
                      loginForm.reset();
                      this.header.close();
                    }
                    else{
                      this.errorMessage = true;
                      setTimeout(() => {
                        this.errorMessage = false;
                      }, 9000);
                    }
                },
                (error) => {
                    this.error = error;
                    this.sending = false;
                });
    }
}
