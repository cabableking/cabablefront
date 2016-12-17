import {Component} from "@angular/core";
import {EventEmitterService} from "../services/event-emitter.service";
@Component({
    selector : 'nav-bar',
    template : `
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" routerLink="home">Cabable</a>
                </div>
                <div *ngIf="showNavBar">
                    <ul class="nav navbar-nav">
                      <li><a routerLink="/">Onboarding</a></li>
                      <li><a routerLink="/">Profile</a></li>
                      <li><a routerLink="/cars">Cars</a></li> 
                    </ul>
                </div>
              </div>
            </nav>
    `
})

export class NavbarComponent{
    showNavBar : boolean = false;
    constructor(private _eventEmitterService : EventEmitterService){
        this._eventEmitterService.showNavBar.subscribe(mode=>this.showNavBar=mode);
    }
}