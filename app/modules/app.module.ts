import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "../components/app.component";
import {CarDetailComponent} from "../components/car-detail.component";
import {CarsComponent} from "../components/cars.component";
import {CarService} from "../services/car.service";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "../components/home.component";
import {LoginComponent} from "../components/login.component";
import {AuthenticationService} from "../services/authentication.service";
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "../components/navbar.component";
import {EventEmitterService} from "../services/event-emitter.service";
import {CreateOperatorComponent} from "../components/create-operator.component";
import {OperatorService} from "../services/operator.service";
import {OperatorsComponent} from "../components/operators.component";
import {OperatorHomeComponent} from "../components/operator-home.component";
import {CreateCarComponent} from "../components/create-car.component";
import {BackButtonComponent} from "../components/back-button.component";
import {DeviceDetailComponent} from "../components/device-detail.component";
import {DevicesComponent} from "../components/devices.component";
import {CreateDeviceComponent} from "../components/create-device.component";
import {DeviceService} from "../services/device.service";
import {DriverDetailComponent} from "../components/driver-detail.component";
import {DriversComponent} from "../components/drivers.component";
import {CreateDriverComponent} from "../components/create-driver.component";
import {DriverService} from "../services/driver.service";
import {OnboardingStartComponent} from "../components/onboarding-start.component";
import {OnboardingService} from "../services/onboarding.service";
import {OnboardingCarComponent} from "../components/onboarding-car.component";
import {OnboardingDeviceComponent} from "../components/onboarding-device.component";
import {OnboardingDriverComponent} from "../components/onboarding-driver.component";
import {OnboardingFinishComponent} from "../components/onboarding-finish.component";
import {CreateRatecardComponent} from "../components/create-ratecard.component";
import {CommonUtilsService} from "../services/common-utils.service";
import {RatecardService} from "../services/ratecard.service";
import {RatecardsComponent} from "../components/ratecards.component";
import {RatecardDetailComponent} from "../components/ratecard-detail.component";
import {OnboardingRatecardComponent} from "../components/onboarding-ratecard.component";
import {SidebarNavComponent} from "../components/sidebar-nav.component";


@NgModule({
    imports : [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations : [AppComponent, HomeComponent,LoginComponent,NavbarComponent,
        CarDetailComponent, CarsComponent,CreateCarComponent,
        CreateOperatorComponent, OperatorsComponent, OperatorHomeComponent,
        DeviceDetailComponent, DevicesComponent,CreateDeviceComponent,
        DriverDetailComponent, DriversComponent,CreateDriverComponent,
        CreateRatecardComponent, RatecardsComponent, RatecardDetailComponent,
        OnboardingStartComponent,OnboardingCarComponent, OnboardingRatecardComponent,OnboardingDeviceComponent,
        OnboardingDriverComponent, OnboardingFinishComponent, BackButtonComponent, SidebarNavComponent
    ],
    providers : [CarService,AuthenticationService, EventEmitterService,OperatorService,DeviceService, DriverService,
        OnboardingService,CommonUtilsService, RatecardService],
    bootstrap : [AppComponent]
})

export class AppModule{}
