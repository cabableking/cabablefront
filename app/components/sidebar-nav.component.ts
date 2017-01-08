import {Component} from '@angular/core';

@Component({
    selector: 'sidebar-nav',
    template : `
        <div class="sidebar-nav">
          <div class="navbar navbar-default" role="navigation">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <span class="visible-xs navbar-brand">Operator Actions</span>
            </div>
            <div class="navbar-collapse collapse sidebar-navbar-collapse">
              <ul class="nav navbar-nav">
                <li routerLinkActive="active"><a routerLink="/operator/home">Home</a></li>
                <li routerLinkActive="active"><a routerLink="/car/create">Create Car</a></li>
                <li routerLinkActive="active"><a routerLink="/car/list">View All Cars</a></li>
                <li routerLinkActive="active"><a routerLink="/device/create">Create Device</a></li>
                <li routerLinkActive="active"><a routerLink="/device/list">View All Devices</a></li>
                <li routerLinkActive="active"><a routerLink="/driver/create">Create Driver</a></li>
                <li routerLinkActive="active"><a routerLink="/driver/list">View All Drivers</a></li>
                <li routerLinkActive="active"><a routerLink="/onboarding/start">Start Onboarding</a></li>
              </ul>
            </div>
          </div>
        </div>
    `,
    styles : [`
        @media (min-width: 768px) {
          .sidebar-nav .navbar .navbar-collapse {
            padding: 0;
            max-height: none;
          }
          .sidebar-nav .navbar ul {
            float: none;
            display: block;
          }
          .sidebar-nav .navbar li {
            float: none;
            display: block;
          }
          .sidebar-nav .navbar li a {
            padding-top: 12px;
            padding-bottom: 12px;
          }
        }
    `]
})

export class SidebarNavComponent{
    constructor(){}
}