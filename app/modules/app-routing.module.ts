import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CarsComponent} from "../components/cars.component";
import {CarDetailComponent} from "../components/car-detail.component";
import {HomeComponent} from "../components/home.component";
import {LoginComponent} from "../components/login.component";

const routes : Routes = [
    {path : 'home', component : HomeComponent},
    {path : 'login', component : LoginComponent},
    {path : 'cars', component : CarsComponent},
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    {path : 'car/view/:id', component : CarDetailComponent},
    {path : 'car/edit/:id', component : CarDetailComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}