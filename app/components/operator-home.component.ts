import {Component} from '@angular/core';
import {OperatorService} from "../services/operator.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../services/event-emitter.service";
import {AuthenticationService} from "../services/authentication.service";

@Component({
    selector: 'operator-home',
    template: `
        <div class="panel panel-default">
              <div class="panel-heading auto">
                <span class="bold">Dashboard</span>
                <span class="right"><a (click)="logout()" href="javascript:;">logout</a></span>
              </div>
              <div class="panel-body">               
                    <div class="col-xs-12">
                        Welcome to operator dashboard!
                    </div>
              </div>
        </div>            
    `
})

export class OperatorHomeComponent{

    constructor(
        private operatorService:OperatorService,
        private _eventEmitterService : EventEmitterService,
        private authService:AuthenticationService,
        private router : Router
    ){
        this._eventEmitterService.loginPage.emit(false);
    }


    logout() {
        this.authService.logout().then(resp => {
            if(resp.status==200){
                this.router.navigate(['/login']);
            }
        });
    }
}