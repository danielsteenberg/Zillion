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
export class UsersService {

  userUrl: string = "https://www.webdevsolutions.co.za/zillion/assets/phpScripts/users.php";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.userUrl, httpOptions);
  }
}
