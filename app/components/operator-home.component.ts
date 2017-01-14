import {Component} from '@angular/core';
import {OperatorService} from "../services/operator.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../services/event-emitter.service";

@Component({
    selector: 'operator-home',
    template: `
        <div class="panel panel-default">
              <div class="panel-heading auto">
                <span class="bold">Dashboard</span>
                <span class="right"><a (click)="logout()" href="#">logout</a></span>
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

    constructor(private operatorService:OperatorService, private _router : Router, private _eventEmitterService : EventEmitterService){
        this._eventEmitterService.loginPage.emit(false);
    }


    logout() {
        this._router.navigate(['/login']);
        return false;
    }
}