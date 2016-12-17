import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {USERS} from "../consts/mock-users";
import {User} from "../models/user";
@Injectable()
export class AuthenticationService{
    constructor(private _router : Router){}

    logout(){
        localStorage.removeItem('user');
        this._router.navigate(['/login']);
    }

    login(user:User){
        let authenticatedUser = USERS.find(u=>u.email===user.email);
        if(authenticatedUser && authenticatedUser.password===user.password){
            localStorage.setItem('user',authenticatedUser.email);
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

}