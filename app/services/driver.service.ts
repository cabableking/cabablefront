import {Injectable} from '@angular/core';
import {Driver} from "../models/driver";
import {CommonUtilsService} from "./common-utils.service";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Injectable()
export class DriverService{

    constructor(
        private commonUtilsService : CommonUtilsService,
        private cookieService : CookieService
    ){}
    getDrivers(){
        var url = this.commonUtilsService.apiUrl + 'driver/getAll/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    getDriver(driver_license_no){
        var url = this.commonUtilsService.apiUrl + 'driver/get/?access_token='+
            this.cookieService.get('access_token') + '&driver_license_no='+driver_license_no;
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    createDriver(driver:Driver){
        var url = this.commonUtilsService.apiUrl + 'driver/create/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, driver,'POST');
    }

    saveDriver(driver:Driver){
        var url = this.commonUtilsService.apiUrl + 'driver/update/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, driver,'POST');
    }

    deleteDriver(driver_license_no){
        var url = this.commonUtilsService.apiUrl + 'driver/delete/?access_token='+
            this.cookieService.get('access_token')+'&driver_license_no='+driver_license_no;
        return this.commonUtilsService.ajax(url, {},'DELETE');
    }
}