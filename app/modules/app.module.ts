import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../components/app.component';
import {CarDetailComponent} from '../components/car-detail.component'
import {CarsComponent} from "../components/cars.component";
import {CarService} from "../services/car.service";
import {DashboardComponent} from "../components/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
    imports : [
        BrowserModule,
        AppRoutingModule
    ],
    declarations : [AppComponent, CarDetailComponent, CarsComponent, DashboardComponent],
    providers : [CarService],
    bootstrap : [AppComponent]
})

export class AppModule{}
