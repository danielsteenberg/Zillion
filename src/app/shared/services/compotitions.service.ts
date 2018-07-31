import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable()
export class CompotitionsService {

  zillionCompotitionsUrl = "https://www.webdevsolutions.co.za/zillion/assets/phpScripts/zillionCompotitions.php";
  addCompotition = "https://www.webdevsolutions.co.za/zillion/assets/phpScripts/addCompotition.php";
  editCompotition = "https://www.webdevsolutions.co.za/zillion/assets/phpScripts/editCompotition.php";
  upload = "https://www.webdevsolutions.co.za/zillion/assets/common/";
  enter = "https://www.webdevsolutions.co.za/zillion/assets/phpScripts/enterCompetition.php";
  myCompotitionsUrl = "https://www.webdevsolutions.co.za/zillion/assets/phpScripts/myEnteredCompetitons.php";


  constructor(private http: HttpClient) { }

  getZillionCompotitions(){
    return this.http.get(this.zillionCompotitionsUrl, httpOptions);
  }

  postCompotitions(compotition){
    return this.http.post(this.addCompotition, compotition, httpOptions);
  }

  updateCompotitions(compotition){
    return this.http.post(this.editCompotition, compotition, httpOptions);
  }

  uploadImage(image){
    return this.http.post(this.upload, image);
  }

  enterCompotition(newCompotition){
    return this.http.post(this.enter, newCompotition, httpOptions);
  }

  getMyCompetitions(myCompetitions){
    return this.http.post(this.myCompotitionsUrl, myCompetitions, httpOptions);
  }

}
