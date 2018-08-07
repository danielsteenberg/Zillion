import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HeaderComponent } from '../../header/header.component';
import { ResetUserPasswordService } from '../../shared/services/reset-user-password.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email: string;
  errorMessage: boolean = false;
  successMessage: boolean = false;

  constructor(private resetUserPasswordService: ResetUserPasswordService, private header: HeaderComponent) { }

  ngOnInit() {
  }

  resetForm(resetForm: NgForm) {
        this.resetUserPasswordService.resetUserPassword(this.email)
            .subscribe(
                (data) => {
                    //this.router.navigate(['/home']);
                    if(data){
                      resetForm.reset();
                      this.successMessage = true;
                      setTimeout(() => {
                        this.successMessage = false;
                      }, 9000);
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
                    console.log(error);
                });
    }

}
