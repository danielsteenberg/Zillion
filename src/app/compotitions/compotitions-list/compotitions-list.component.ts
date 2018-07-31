import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-compotitions-list',
  templateUrl: './compotitions-list.component.html',
  styleUrls: ['./compotitions-list.component.css']
})
export class CompotitionsListComponent implements OnInit {

  mobile: boolean = false;
  desktop: boolean = true;
  deviceInfo: any;

  constructor(private deviceService: DeviceDetectorService) {
    this.getDeviceType();
  }

  ngOnInit() {
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
