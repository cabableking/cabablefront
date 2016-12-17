import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {User} from "../models/user";
import {EventEmitterService} from "../services/event-emitter.service";

@Component({
    selector: 'login-form',
    template: `
       
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Login</h3>
          </div>
          <div class="panel-body">
            <form (ngSubmit)="login()">
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" [(ngModel)]="user.email" name="email" required="required">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" [(ngModel)]="user.password" name="password" required="required">
                </div>
                <button (click)="login()" class="btn btn-default" type="submit">Login</button>
            </form>
          </div>
        </div>
        
    `
})

export class LoginComponent {
    public user:User = {email:'',password:''};
    public errorMsg = '';

    constructor(private _service:AuthenticationService, private _eventEmitterService : EventEmitterService) {}

    login(event:Event) {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Invalid Credentials!';
        }else {
            this._eventEmitterService.showNavBar.emit(true);
        }
        return false;
    }
}