import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  closeResult: string;
  users: any;
  loggedIn: boolean = false;
  deviceInfo: any;
  mobile: boolean = false;
  desktop: boolean = true;
  modalReference: NgbModalRef;
  success: boolean = false;
  @ViewChild('closeModal') closeModal: ElementRef;

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService, private usersService: UsersService, private deviceService: DeviceDetectorService) {
    this.getDeviceType();
  }

  ngOnInit() {
    this.authenticationService.logout();
  }

  setUser(){
    if(localStorage.currentUser){
        this.users = JSON.parse(localStorage.currentUser);
        this.loggedIn = true;
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 6000);
    }
  }

  // getUsers(){
  //   this.usersService.getUsers().subscribe(
  //     (data) => {
  //       this.users = data[0],
  //       console.log(this.users);
  //     }, (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  logout(){
    this.loggedIn = false;
    this.authenticationService.logout();
    // this.router.navigate(['/home']);
  }

  open(content) {
    this.modalReference = this.modalService.open(content, { backdrop: 'static',windowClass:'animated'});
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }

  close(){
    this.closeModal.nativeElement.click();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getDeviceType() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    console.log(this.deviceInfo);
    if (this.deviceInfo.device === 'iphone' || this.deviceInfo.device === 'android'){
      this.mobile = true;
      this.desktop = false;
      console.log(this.mobile);
    }
  }

}
