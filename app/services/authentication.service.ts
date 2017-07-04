import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {USERS} from "../consts/mock-users";
import {User} from "../models/user";
import {CommonUtilsService} from "./common-utils.service";
import {CookieService} from "angular2-cookie/services/cookies.service";
@Injectable()
export class AuthenticationService{
    constructor(
        private commonUtilsService : CommonUtilsService,
        private cookieService : CookieService,
        private _router : Router
    ){}

    login(user:User){
        let authenticatedUser = USERS.find(u=>u.username===user.username);
        if(authenticatedUser && authenticatedUser.password===user.password){
            localStorage.setItem('user',authenticatedUser.username);
            this._router.navigate(['/home']);
            return true;
        }
        return false;
    }

    checkCredentials(){
        if(localStorage.getItem('user')===null){
            this._router.navigate(['/login']);
        }
    }

    logout(){
        var url = this.commonUtilsService.apiUrl + 'auth/logout/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, {},'GET');
    }

}