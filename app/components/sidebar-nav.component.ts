import {Component} from '@angular/core';

@Component({
    selector: 'sidebar-nav',
    template : `
        <!-- menu profile quick info -->
            <div class="profile clearfix">
              <div class="profile_pic">
                <img src="../../images/img.jpg" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Welcome,</span>
                <h2>Operator 1</h2>
              </div>
            </div>
            <!-- /menu profile quick info -->

            <br />

            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li routerLinkActive="active"><a routerLink="/operator/home"><i class="fa fa-home"></i> Home</a></li>
                  <li><a><i class="fa fa-car"></i> Car <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li routerLinkActive="active"><a routerLink="/car/create">Create Car</a></li>
                      <li routerLinkActive="active"><a routerLink="/car/list">View All Cars</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-laptop"></i> Device <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li routerLinkActive="active"><a routerLink="/device/create">Create Device</a></li>
                      <li routerLinkActive="active"><a routerLink="/device/list">View All Devices</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-user"></i> Driver <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li routerLinkActive="active"><a routerLink="/driver/create">Create Driver</a></li>
                      <li routerLinkActive="active"><a routerLink="/driver/list">View All Drivers</a></li>
                    </ul>
                  </li>
                  <li><a><i class="fa fa-money"></i> Rate Card <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li routerLinkActive="active"><a routerLink="/ratecard/create">Create Rate Card</a></li>
                      <li routerLinkActive="active"><a routerLink="/ratecard/list">View All Rate Cards</a></li>
                    </ul>
                  </li>
                  <li routerLinkActive="active"><a routerLink="/onboarding/start"><i class="fa fa-spinner"></i>Start Onboarding</a></li>
                </ul>
              </div>
            </div>
    `
})

export class SidebarNavComponent{
    constructor(){}
}