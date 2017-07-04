import {Component} from "@angular/core";
import {EventEmitterService} from "../services/event-emitter.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
@Component({
    selector : 'nav-bar',
    template : `
            <!-- top navigation -->
                <div class="top_nav">
                  <div class="nav_menu">
                    <nav>
                      <div class="nav toggle">
                        <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                      </div>
        
                      <ul class="nav navbar-nav navbar-right">
                        <li class="">
                          <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <img src="images/img.jpg" alt="">Operator1
                            <span class=" fa fa-angle-down"></span>
                          </a>
                          <ul class="dropdown-menu dropdown-usermenu pull-right">
                            <li><a href="javascript:;"> Profile</a></li>
                            <li>
                              <a href="javascript:;">
                                <span class="badge bg-red pull-right">50%</span>
                                <span>Settings</span>
                              </a>
                            </li>
                            <li><a href="javascript:;">Help</a></li>
                            <li (click)="logout()"><a href="javascript:;"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>
                          </ul>
                        </li>
        
                        <li role="presentation" class="dropdown">
                          <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-envelope-o"></i>
                            <span class="badge bg-green">6</span>
                          </a>
                          <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                            <li>
                              <a>
                                <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                                <span>
                                  <span>John Smith</span>
                                  <span class="time">3 mins ago</span>
                                </span>
                                <span class="message">
                                  Film festivals used to be do-or-die moments for movie makers. They were where...
                                </span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                                <span>
                                  <span>John Smith</span>
                                  <span class="time">3 mins ago</span>
                                </span>
                                <span class="message">
                                  Film festivals used to be do-or-die moments for movie makers. They were where...
                                </span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                                <span>
                                  <span>John Smith</span>
                                  <span class="time">3 mins ago</span>
                                </span>
                                <span class="message">
                                  Film festivals used to be do-or-die moments for movie makers. They were where...
                                </span>
                              </a>
                            </li>
                            <li>
                              <a>
                                <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                                <span>
                                  <span>John Smith</span>
                                  <span class="time">3 mins ago</span>
                                </span>
                                <span class="message">
                                  Film festivals used to be do-or-die moments for movie makers. They were where...
                                </span>
                              </a>
                            </li>
                            <li>
                              <div class="text-center">
                                <a>
                                  <strong>See All Alerts</strong>
                                  <i class="fa fa-angle-right"></i>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <!-- /top navigation -->
            
            <!--<nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" routerLink="home">Cabable</a>
                </div>
                <div *ngIf="showNavBar">
                    &lt;!&ndash;<ul class="nav navbar-nav">
                      <li><a routerLink="/">Onboarding</a></li>
                      <li><a routerLink="/">Profile</a></li>
                      <li><a routerLink="/cars">Cars</a></li> 
                    </ul>&ndash;&gt;
                </div>
              </div>
            </nav>-->
    `
})

export class NavbarComponent{
    showNavBar : boolean = false;
    errorMsg : String;
    constructor(private _eventEmitterService : EventEmitterService, private authService : AuthenticationService, private router : Router){
        this._eventEmitterService.showNavBar.subscribe(mode=>this.showNavBar=mode);
    }

    logout(){
        this.authService.logout().then(resp => {
            if(resp.status==200){
                this.router.navigate(['/login']);
            }else{
                this.errorMsg = resp['message'];
            }
        });
    }
}