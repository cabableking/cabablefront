import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../components/app.component';
import {CarDetailComponent} from '../components/car-detail.component'
import {CarsComponent} from "../components/cars.component";
import {CarService} from "../services/car.service";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "../components/home.component";
import {LoginComponent} from "../components/login.component";
import {AuthenticationService} from "../services/authentication.service";
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "../components/navbar.component";
import {EventEmitterService} from "../services/event-emitter.service";


@NgModule({
    imports : [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations : [AppComponent, CarDetailComponent, CarsComponent,
        HomeComponent,LoginComponent,NavbarComponent],
    providers : [CarService,AuthenticationService, EventEmitterService],
    bootstrap : [AppComponent]
})

export class AppModule{}
