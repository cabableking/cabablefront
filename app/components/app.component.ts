import {Component} from '@angular/core';
import {EventEmitterService} from "../services/event-emitter.service";
@Component({
    selector: 'my-app',
    template: `
        
            <div class="container body">
              <div class="main_container">
                <div *ngIf="!loginPage">
                    <div class="col-md-3 left_col">
                      <div class="left_col scroll-view">
                        <div class="navbar nav_title" style="border: 0;">
                          <a routerLink="/operator/home" class="site_title"><i class="fa fa-paw"></i> <span>Cabable</span></a>
                        </div>
            
                        <div class="clearfix"></div>
                        <sidebar-nav></sidebar-nav>
                      </div>
                    </div>
                    <nav-bar></nav-bar>
                </div>
                <div class="right_col" role="main">
                    <router-outlet></router-outlet>
                </div>
              </div>
            </div>
        
        
      
    `
})

export class AppComponent{
    loginPage : boolean = false;

    constructor(private _eventEmitterService : EventEmitterService){
        this._eventEmitterService.loginPage.subscribe(mode=>this.loginPage=mode);
    }

    loadScript() {
        let node = document.createElement('script');
        node.src = '../../static/js/custom_template.js';
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

    ngOnInit(){
        this.loadScript();
    }
}