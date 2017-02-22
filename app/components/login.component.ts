import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {User} from "../models/user";
import {EventEmitterService} from "../services/event-emitter.service";
import {OperatorService} from "../services/operator.service";
import {Router} from "@angular/router";
import {CommonUtilsService} from "../services/common-utils.service";
import {CookieService} from "angular2-cookie/core";

@Component({
    selector: 'login-form',
    template: `
        <div style="width: 400px;margin: 10% auto;">
            <div *ngIf="errorMsg">
                <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
            </div>
            <div style="margin-bottom: 30px" class="hide">
              <span>Login As :</span>
              <label class="radio-inline"><input #superAdmin type="radio" name="loginAs" value="sa" checked (click)="setUserRole($event)">SuperAdmin</label>
              <label class="radio-inline"><input #operator type="radio" name="loginAs" value="op" (click)="setUserRole($event)" checked>Operator</label>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">{{userRole}} Login</h3>
              </div>
              <div class="panel-body">
                <form (ngSubmit)="login()">
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" [(ngModel)]="user.username" name="email" required="required">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" [(ngModel)]="user.password" name="password" required="required">
                    </div>
                    <button (click)="login()" class="btn btn-default" type="submit">Login</button>
                </form>
              </div>
            </div>
        </div>   
    `
})

export class LoginComponent {
    public user:User = {username:'',password:''};
    public errorMsg = '';
    public userRole = 'Operator';

    constructor(private _service:AuthenticationService,private commonUtilsService : CommonUtilsService,
                private _eventEmitterService : EventEmitterService, private operatorService : OperatorService,
                private _router: Router, private cookieService : CookieService) {
        this._eventEmitterService.loginPage.emit(true);
    }

    login(event:Event) {
        if(this.userRole == 'SuperAdmin'){
            if(!this._service.login(this.user)){
                this.errorMsg = 'Invalid Credentials!';
            }else {
                this._eventEmitterService.showNavBar.emit(true);
            }
        }else{
            /*if(this.operatorService.operatorExists(this.user)){
                this._eventEmitterService.showNavBar.emit(true);
                this._router.navigate(['/operator/home']);
            }else{
                this.errorMsg = 'Invalid Credentials!';
            }*/
            var url = this.commonUtilsService.apiUrl + 'auth/login/';
            this.commonUtilsService.ajax(url, this.user,'POST').then(res => {
                if(res){
                    let data = JSON.parse(res['_body']);
                    if(res.status==200){
                        this.cookieService.put('access_token',data['access_token']);
                        this.cookieService.put('refresh_token',data['refresh_token']);
                        this.cookieService.put('scope',data['scope']);
                        //console.log(this.cookieService.get('scope'));
                        this._router.navigate(['/operator/home']);
                    }else{
                        this.errorMsg = data.message;
                    }
                }
            });
        }
        return false;
    }
    setUserRole(event){
        var target = event.target || event.srcElement || event.currentTarget;
        if(target.value == 'sa'){
            this.userRole = 'SuperAdmin';
        }else{
            this.userRole = 'Operator';
        }
    }
}