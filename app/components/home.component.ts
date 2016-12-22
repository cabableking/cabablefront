import {Component,OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'home',
    template: `
            
            <h2>Dashboard</h2>
            <h3>Welcome to the SuperAdmin dashboard!</h3>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Actions</h3>
              </div>
              <div class="panel-body">               
                    <a class="btn btn-primary" routerLink="/operator/create">Create Operator</a>
                    <a class="btn btn-primary" routerLink="/operator/list">View All Operators</a>
                    <a class="btn btn-primary" (click)="logout()" href="#">logout</a>
              </div>
            </div>  
    	`
})

export class HomeComponent implements OnInit{

    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
        return false;
    }
}