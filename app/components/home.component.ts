import {Component,OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'home',
    template: `
            
            <h2>Dashboard</h2>
            <h3>Welcome to the operator dashboard!</h3>
            <a (click)="logout()" href="#">Click Here to logout</a>
           
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
    }
}