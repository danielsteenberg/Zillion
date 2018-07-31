import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  closeResult: string;
  user: any;
  mobile: boolean = false;
  desktop: boolean = true;
  deviceInfo: any;

  constructor(private deviceService: DeviceDetectorService, private modalService: NgbModal) { }

  ngOnInit() {
    if(localStorage.currentUser){
        this.user = JSON.parse(localStorage.currentUser);
        this.getDeviceType();
    }
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
