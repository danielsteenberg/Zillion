import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/first';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { User } from '../../shared/models/user';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  titles = ["MR", "MRS", "MISS"];
  kids = [0, 1, 2, 3, 4, 5, 6, 7];
  favSite = ["Yes", "No"];
  errorMessage: boolean = false;
  sending: boolean = false;
  userDetails: User = new User();
  day: number;
  month: number;
  year: number;
  incorrectPassword: boolean = false;
  passwordVarify: string;
  error = '';

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private header: HeaderComponent) { }

  ngOnInit() {
  }

  postUser(userDetails, registerForm){
    this.incorrectPassword = false;
    this.authenticationService.register(userDetails)
        .subscribe(
            (data) => {
              console.log(data)
              this.sending = false;
                //this.router.navigate(['/home']);
                if(data){
                  this.header.setUser();
                  registerForm.reset();
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

  register(registerForm: NgForm){
    this.sending = true;
    this.userDetails.dateOfBirth = this.day.toString() + '/' + this.month.toString() + '/' + this.year.toString();
    if(this.userDetails.password === this.passwordVarify){
      console.log(this.userDetails);
      this.postUser(this.userDetails, registerForm);
    }else{
      this.incorrectPassword = true;
      this.sending = false;
    }
    //registerForm.reset();
  }

}
