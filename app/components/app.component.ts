import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" routerLink="dashboard">Cabable</a>
            </div>
            <ul class="nav navbar-nav">
              <li><a routerLink="/">Onboarding</a></li>
              <li><a routerLink="/">Profile</a></li>
              <li><a routerLink="/cars">Cars</a></li> 
            </ul>
          </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
})

export class AppComponent {

}