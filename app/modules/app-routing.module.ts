import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CarsComponent} from "../components/cars.component";
import {CarDetailComponent} from "../components/car-detail.component";
import {HomeComponent} from "../components/home.component";
import {LoginComponent} from "../components/login.component";
import {CreateOperatorComponent} from "../components/create-operator.component";
import {OperatorsComponent} from "../components/operators.component";
import {OperatorHomeComponent} from "../components/operator-home.component";

const routes : Routes = [
    {path : 'home', component : HomeComponent},
    {path : 'login', component : LoginComponent},
    {path : 'operator', component : CreateOperatorComponent},
    {path : 'cars', component : CarsComponent},
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    {path : 'car/view/:id', component : CarDetailComponent},
    {path : 'car/edit/:id', component : CarDetailComponent},
    {path : 'operator/create', component : CreateOperatorComponent},
    {path : 'operator/list', component : OperatorsComponent},
    {path : 'operator/login', component : LoginComponent},
    {path : 'operator/home', component : OperatorHomeComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}