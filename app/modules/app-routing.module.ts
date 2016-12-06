import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CarsComponent} from "../components/cars.component";
import {DashboardComponent} from "../components/dashboard.component";
import {CarDetailComponent} from "../components/car-detail.component";

const routes : Routes = [
    {path : 'cars', component : CarsComponent},
    {path : 'dashboard', component: DashboardComponent},
    {path : '', redirectTo : '/dashboard', pathMatch : 'full'},
    {path : 'car/view/:id', component : CarDetailComponent},
    {path : 'car/edit/:id', component : CarDetailComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}