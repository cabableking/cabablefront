import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <nav-bar></nav-bar>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                        <sidebar-nav></sidebar-nav>
                </div>
                <div class="col-sm-9">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </div>
    `
})

export class AppComponent {

}