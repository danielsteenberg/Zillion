import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CompotitionsService } from '../../shared/services/compotitions.service';
import { User } from '../../shared/models/user';
import { Competiton } from '../../shared/models/competition';

@Component({
  selector: 'app-zillion-compotitions',
  templateUrl: './zillion-compotitions.component.html',
  styleUrls: ['./zillion-compotitions.component.css']
})
export class ZillionCompotitionsComponent implements OnInit {

  images = new Array();
  closeResult: string;
  mobile: boolean = false;
  desktop: boolean = true;
  deviceInfo: any;
  allCompotitions: any;
  titles = ["MR", "MRS", "MISS"];
  user: User = new User();
  enter: Competiton = new Competiton();
  competitionName: string;
  successMessage: boolean = false;
  errorMessage: boolean = false;
  pager: number = 1;
  pagedItems = new Array();
  pagedContent = new Array();
  selectedContent = new Array();
  pageItemValue: number;
  firstPage: boolean = true;
  lastPage: boolean = true;
  loader: boolean = true;
  term: string;
  setActive: number;
  slideConfig = {
    "slidesToShow": 2,
    "slidesToScroll": 1
  };

  constructor(private deviceService: DeviceDetectorService, private modalService: NgbModal, private compotitionsService: CompotitionsService) {
    this.getDeviceType();
  }

  ngOnInit() {
    this.getCompotitions();
    if(localStorage.currentUser){
        this.user = JSON.parse(localStorage.currentUser);
    }
  }

  afterChange(e) {
    console.log('afterChange');
  }

  getCompotitions(){
    this.compotitionsService.getZillionCompotitions().subscribe(
      (data) => {
        this.allCompotitions = data,
        this.setPromo(),
        this.setPaged()
      }, (error) => {
        console.log(error);
      }
    );
  }

  setPromo(){
    for(var i = 0; i < this.allCompotitions.length; i++){
      console.log(this.allCompotitions[i].active);
      if(this.allCompotitions[i].category == 'zillionCompotitions' && this.allCompotitions[i].active != 0){
        this.images.push(this.allCompotitions[i]);
      }
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

  enterCompetition(){
    if(localStorage.currentUser){
      this.enter.userId = this.user.id;
      console.log(this.enter);
    }

    this.compotitionsService.enterCompotition(this.enter)
        .subscribe(
            (data) => {
              if(data){
                this.successMessage = true;
                setTimeout(() => {
                  this.successMessage = false;
                }, 9000);
              }

            },
            (error) => {
              console.log(error);
            });
  }

  setPaged(){
    var limit = 9;
    var counter = 0;
    var arrayLength = 1;
    for(var i = 0; i <= this.images.length; i++){
      counter++;
      if(this.images[i]){
        this.pagedContent.push(this.images[i]);
        if(counter == limit){
          counter = 0;
          this.pagedItems.push(this.pagedContent);
          this.pagedContent = new Array();
        }else if(this.images.length == arrayLength && this.pagedContent.length > 0){
            this.pagedItems.push(this.pagedContent);
        }
      }
      arrayLength++;
    }
    this.selectedContentItems(0);
  }

  selectedContentItems(position: number){
    this.selectedContent = new Array();
    this.loader = false;
    this.selectedContent = this.pagedItems[position];
    this.pageItemValue = position;
    window.scrollTo({left: 300, top: 500, behavior: 'smooth'});
    this.setActive = position;

    if(position == 0){
      this.firstPage = true;
    }else{
      this.firstPage = false;
    }

    if(position == (this.pagedItems.length - 1)){
      this.lastPage = true;
    }else{
      this.lastPage = false;
    }
  }

  netPage(){
    this.selectedContentItems(this.pageItemValue + 1);
  }

  prevPage(){
    this.selectedContentItems(this.pageItemValue - 1);
  }

  open(content, competition) {
    if(this.user.id){
      console.log("Logged in");
      this.modalService.open(content, { backdrop: 'static',windowClass:'animated'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });

      this.enter.competitionId = competition.id;
      this.competitionName = competition.name;
    }else{
      this.errorMessage = true;
      setTimeout(() => {
        this.errorMessage = false;
      }, 9000);
    }
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
}
