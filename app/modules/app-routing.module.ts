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
import {OnboardingStartComponent} from "../components/onboarding-start.component";
import {OnboardingCarComponent} from "../components/onboarding-car.component";
import {OnboardingDeviceComponent} from "../components/onboarding-device.component";
import {OnboardingDriverComponent} from "../components/onboarding-driver.component";
import {OnboardingFinishComponent} from "../components/onboarding-finish.component";
import {CreateRatecardComponent} from "../components/create-ratecard.component";
import {RatecardsComponent} from "../components/ratecards.component";
import {RatecardDetailComponent} from "../components/ratecard-detail.component";
import {OnboardingRatecardComponent} from "../components/onboarding-ratecard.component";

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
    {path : 'ratecard/create', component : CreateRatecardComponent},
    {path : 'ratecard/list', component : RatecardsComponent},
    {path : 'ratecard/view/:id', component : RatecardDetailComponent},
    {path : 'ratecard/edit/:id', component : RatecardDetailComponent},
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    {path : 'operator/create', component : CreateOperatorComponent},
    {path : 'operator/list', component : OperatorsComponent},
    {path : 'operator/login', component : LoginComponent},
    {path : 'operator/home', component : OperatorHomeComponent},
    {path : 'onboarding/start', component : OnboardingStartComponent},
    {path : 'onboarding/device/:id', component : OnboardingDeviceComponent},
    {path : 'onboarding/driver/:id', component : OnboardingDriverComponent},
    {path : 'onboarding/car/:id', component : OnboardingCarComponent},
    {path : 'onboarding/ratecard/:id', component : OnboardingRatecardComponent},
    {path : 'onboarding/finish', component : OnboardingFinishComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}