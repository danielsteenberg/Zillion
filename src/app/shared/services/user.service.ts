import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable()
export class UserService {

    userUrl: string = "https://www.webdevsolutions.co.za/zillion/assets/phpScripts/users.php";

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>(this.userUrl);
    }
}
