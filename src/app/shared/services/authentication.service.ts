import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable()
export class AuthenticationService {

  userUrl: string = "https://www.webdevsolutions.co.za/zillion/assets/phpScripts/getUser.php";
  postUser: string = "https://www.webdevsolutions.co.za/zillion/assets/phpScripts/postUser.php";

    constructor(private http: HttpClient) { }

    login(userDetails) {
        return this.http.post<any>(this.userUrl, userDetails, httpOptions)
            .map(user => {
                // if (user && user.token) {
                  if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    register(userDetails) {
      return this.http.post<any>(this.postUser, userDetails, httpOptions)
          .map(user => {
              // if (user && user.token) {
                if (user) {
                  localStorage.setItem('currentUser', JSON.stringify(user));
              }

              return user;
          });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
