import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CarsComponent} from "../components/cars.component";
import {CarDetailComponent} from "../components/car-detail.component";
import {HomeComponent} from "../components/home.component";
import {LoginComponent} from "../components/login.component";
import {CreateOperatorComponent} from "../components/create-operator.component";
import {OperatorsComponent} from "../components/operators.component";
import {OperatorHomeComponent} from "../components/operator-home.component";
import {CreateCarComponent} from "../components/create-car.component";
import {CreateDeviceComponent} from "../components/create-device.component";
import {DevicesComponent} from "../components/devices.component";
import {DeviceDetailComponent} from "../components/device-detail.component";
import {CreateDriverComponent} from "../components/create-driver.component";
import {DriversComponent} from "../components/drivers.component";
import {DriverDetailComponent} from "../components/driver-detail.component";

const routes : Routes = [
    {path : 'home', component : HomeComponent},
    {path : 'login', component : LoginComponent},
    {path : 'operator', component : CreateOperatorComponent},
    {path : 'car/create', component : CreateCarComponent},
    {path : 'car/list', component : CarsComponent},
    {path : 'car/view/:id', component : CarDetailComponent},
    {path : 'car/edit/:id', component : CarDetailComponent},
    {path : 'device/create', component : CreateDeviceComponent},
    {path : 'device/list', component : DevicesComponent},
    {path : 'device/view/:id', component : DeviceDetailComponent},
    {path : 'device/edit/:id', component : DeviceDetailComponent},
    {path : 'driver/create', component : CreateDriverComponent},
    {path : 'driver/list', component : DriversComponent},
    {path : 'driver/view/:id', component : DriverDetailComponent},
    {path : 'driver/edit/:id', component : DriverDetailComponent},
    {path : '', redirectTo : '/home', pathMatch : 'full'},
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