import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HeaderComponent } from '../../header/header.component';
import { ResetUserPasswordService } from '../../shared/services/reset-user-password.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  userDetails: User = new User();
  email: string;
  errorMessage: boolean = false;
  successMessage: boolean = false;

  constructor(private resetUserPasswordService: ResetUserPasswordService, private header: HeaderComponent) { }

  ngOnInit() {
  }

  resetForm(resetForm: NgForm) {
    this.userDetails.email = this.email;
        this.resetUserPasswordService.resetUserPassword(this.userDetails)
            .subscribe(
                (data) => {
                    //this.router.navigate(['/home']);
                    resetForm.reset();
                    this.successMessage = true;
                    setTimeout(() => {
                      this.successMessage = false;
                    }, 9000);
                    this.header.close();
                },
                (error) => {
                  this.errorMessage = true;
                  setTimeout(() => {
                    this.errorMessage = false;
                  }, 9000);
                });
    }

}
