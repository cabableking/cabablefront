import {Injectable} from '@angular/core';
import {Car} from "../models/car";
import {CommonUtilsService} from "./common-utils.service";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Injectable()
export class CarService{

    constructor(
        private commonUtilsService : CommonUtilsService,
        private cookieService : CookieService
    ){}
    getCars(){
        var url = this.commonUtilsService.apiUrl + 'car/getAll/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    getCar(car_reg_id){
        var url = this.commonUtilsService.apiUrl + 'car/get/?access_token='+
            this.cookieService.get('access_token') + '&car_reg_id='+car_reg_id;
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    createCar(car:Car){
        var url = this.commonUtilsService.apiUrl + 'car/create/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, car,'POST');
    }

    saveCar(car:Car){
        var url = this.commonUtilsService.apiUrl + 'car/update/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, car,'POST');
    }

    deleteCar(car_reg_id){
        var url = this.commonUtilsService.apiUrl + 'car/delete/?access_token='+
            this.cookieService.get('access_token')+'&car_reg_id='+car_reg_id;
        return this.commonUtilsService.ajax(url, {},'DELETE');
    }
}