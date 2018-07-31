import { Component, OnInit } from '@angular/core';

import { CompotitionsService } from '../../shared/services/compotitions.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-my-compotitions',
  templateUrl: './my-compotitions.component.html',
  styleUrls: ['./my-compotitions.component.css']
})
export class MyCompotitionsComponent implements OnInit {

  myCompetitions: any;
  allCompotitions: any;
  filterComp = new Array();
  user: User = new User();
  pager: number = 1;
  pagedItems = new Array();
  pagedContent = new Array();
  selectedContent = new Array();
  pageItemValue: number;
  firstPage: boolean = true;
  lastPage: boolean = true;
  loader: boolean = true;
  setActive: number;

  constructor(private compotitionsService: CompotitionsService) { }

  ngOnInit() {
    if(localStorage.currentUser){
        this.user = JSON.parse(localStorage.currentUser);
    }
    this.getMyCompetitions();
  }

  getMyCompetitions(){
    this.compotitionsService.getMyCompetitions(this.user).subscribe(
      (data) => {
        this.myCompetitions = data,
        this.getCompotitions();
      }, (error) => {
        console.log(error);
      }
    );
  }

  getCompotitions(){
    this.compotitionsService.getZillionCompotitions().subscribe(
      (data) => {
        this.allCompotitions = data,
        this.filterCompetitions();
      }, (error) => {
        console.log(error);
      }
    );
  }

  filterCompetitions(){
   for(var i = 0; i < this.allCompotitions.length; i++){
     for(var j = 0; j < this.myCompetitions.length; j++){
       if(this.allCompotitions[i].id === this.myCompetitions[j].competitionId){
         this.filterComp.push(this.allCompotitions[i]);
       }
     }
   }
   this.setPaged();
  }

  setPaged(){
    var limit = 9;
    var counter = 0;
    var arrayLength = 1;
    for(var i = 0; i <= this.filterComp.length; i++){
      counter++;
      if(this.filterComp[i]){
        this.pagedContent.push(this.filterComp[i]);
        if(counter == limit){
          counter = 0;
          this.pagedItems.push(this.pagedContent);
          this.pagedContent = new Array();
        }else if(this.filterComp.length == arrayLength && this.pagedContent.length > 0){
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
    window.scrollTo({left: 300, top: 300, behavior: 'smooth'});
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
}
