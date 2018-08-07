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
export class ResetUserPasswordService {

  resetUserUrl = "https://www.webdevsolutions.co.za/zillion/assets/phpScripts/resetUserPassword.php";

  constructor(private http: HttpClient) { }

  resetUserPassword(userEmail){
    return this.http.post(this.resetUserUrl, userEmail, httpOptions);
  }

}
