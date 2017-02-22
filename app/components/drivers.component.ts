import {Component, OnInit} from '@angular/core';
import {Driver} from "../models/driver";
import {DriverService} from "../services/driver.service";
import {CommonUtilsService} from "../services/common-utils.service";
import {Router} from "@angular/router";

@Component({
    moduleId : module.id,
    selector: 'drivers',
    templateUrl : '../templates/drivers.component.html'
})

export class DriversComponent implements OnInit {
    drivers: Driver[];
    errorMsg = '';
    successMsg = '';

    constructor(
        private driverService: DriverService,
        private _router : Router
    ) {}

    getDrivers(): void {
        this.driverService.getDrivers().then(resp => {
            if(resp.status==200){
                this.drivers = JSON.parse(resp['_body']);
            }else{
                this.errorMsg = resp['message'];
            }
        });
    }

    deleteDriver(license_num){
        this.driverService.deleteDriver(license_num).then(resp => {
            if(resp.status==200){
                CommonUtilsService.flashMessage = 'Driver deleted successfully!';
                this._router.navigate(['/driver/list']);
            }else{
                this.errorMsg = resp['message'];
            }
        });
        return false;
    }

    ngOnInit(): void {
        this.getDrivers();
        if(CommonUtilsService.flashMessage){
            this.successMsg = CommonUtilsService.flashMessage;
            CommonUtilsService.flashMessage = '';
        }
    }
}