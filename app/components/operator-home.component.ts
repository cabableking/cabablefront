import {Component} from '@angular/core';
import {OperatorService} from "../services/operator.service";
import {Router} from "@angular/router";

@Component({
    selector: 'operator-home',
    template: `
            
            <h2>Dashboard</h2>
            <h3>Welcome to the Operator dashboard!</h3>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Actions</h3>
              </div>
              <div class="panel-body">               
                    <div class="col-xs-12">
                        <a class="btn btn-primary" routerLink="/car/create">Create Car</a>
                        <a class="btn btn-primary" routerLink="/cars">View All Cars</a>
                    </div>
                    <div class="col-xs-12">
                        <a class="btn btn-primary" routerLink="/device/create">Create Device</a>
                        <a class="btn btn-primary" routerLink="/device/list">View All Devices</a>
                    </div>
                    <div class="col-xs-12">
                        <a class="btn btn-primary" routerLink="/driver/create">Create Driver</a>
                        <a class="btn btn-primary" routerLink="/driver/list">View All Drivers</a>
                    </div>
                    <div class="col-xs-12">
                        <a class="btn btn-primary" routerLink="/onboarding/start">Start Onboarding</a>
                        <a class="btn btn-primary" (click)="logout()" href="#">logout</a>
                    </div>
              </div>
            </div>  
    	`,
    styles : [`
        a{
            margin: 10px 20px 10px 0;
            width: 200px;
        }
    `]
})

export class OperatorHomeComponent{

    constructor(private operatorService:OperatorService, private _router : Router){}


    logout() {
        this._router.navigate(['/login']);
        return false;
    }
}