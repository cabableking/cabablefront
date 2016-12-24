import {Component, OnInit} from "@angular/core";
import {DriverService} from "../services/driver.service";
import {Driver} from "../models/driver";

@Component({
    moduleId : module.id,
    selector: 'drivers',
    templateUrl : '../templates/drivers.component.html'
})

export class DriversComponent implements OnInit {
    drivers: Driver[];

    constructor(private driverService: DriverService) {}

    getDrivers(): void {
        this.drivers = this.driverService.getDrivers();
    }

    ngOnInit(): void {
        this.getDrivers();
    }
}