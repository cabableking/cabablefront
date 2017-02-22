import {Injectable} from '@angular/core';
import {Device} from "../models/device";
import {CommonUtilsService} from "./common-utils.service";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Injectable()
export class DeviceService{

    constructor(
        private commonUtilsService : CommonUtilsService,
        private cookieService : CookieService
    ){}
    getDevices(){
        var url = this.commonUtilsService.apiUrl + 'device/getAll/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    getDevice(imei){
        var url = this.commonUtilsService.apiUrl + 'device/get/?access_token='+
            this.cookieService.get('access_token') + '&imei='+imei;
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    createDevice(device:Device){
        var url = this.commonUtilsService.apiUrl + 'device/create/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, device,'POST');
    }

    saveDevice(device:Device){
        var url = this.commonUtilsService.apiUrl + 'device/update/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, device,'POST');
    }

    deleteDevice(imei){
        var url = this.commonUtilsService.apiUrl + 'device/delete/?access_token='+
            this.cookieService.get('access_token')+'&imei='+imei;
        return this.commonUtilsService.ajax(url, {},'DELETE');
    }
}