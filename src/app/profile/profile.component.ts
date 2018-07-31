import { Component, OnInit } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: boolean = true;
  compotitions: boolean = false;
  support: boolean = false;
  user: any;
  mobile: boolean = false;
  desktop: boolean = true;
  deviceInfo: any;

  constructor(private deviceService: DeviceDetectorService, ) { }

  ngOnInit() {
    if(localStorage.currentUser){
        this.user = JSON.parse(localStorage.currentUser);
        this.getDeviceType();
    }
  }

  setProfile(){
    this.profile = true;
    this.compotitions = false;
    this.support = false;
  }

  setCompotition(){
    this.profile = false;
    this.compotitions = true;
    this.support = false;
  }

  setSupport(){
    this.profile = false;
    this.compotitions = false;
    this.support = true;
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
