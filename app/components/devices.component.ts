import {Component, OnInit} from '@angular/core';
import {Device} from "../models/device";
import {DeviceService} from "../services/device.service";
import {CommonUtilsService} from "../services/common-utils.service";
import {Router} from "@angular/router";

@Component({
    moduleId : module.id,
    selector: 'devices',
    templateUrl : '../templates/devices.component.html'
})

export class DevicesComponent implements OnInit {
    devices: Device[];
    errorMsg = '';
    successMsg = '';

    constructor(
        private deviceService: DeviceService,
        private _router : Router
    ) {}

    getDevices(): void {
        this.deviceService.getDevices().then(resp => {
            if(resp.status==200){
                this.devices = JSON.parse(resp['_body']);
            }else{
                this.errorMsg = resp['message'];
            }
        });
    }

    deleteDevice(imei){
        this.deviceService.deleteDevice(imei).then(resp => {
            if(resp.status==200){
                CommonUtilsService.flashMessage = 'Device deleted successfully!';
                this._router.navigate(['/device/list']);
            }else{
                this.errorMsg = resp['message'];
            }
        });
        return false;
    }

    ngOnInit(): void {
        this.getDevices();
        if(CommonUtilsService.flashMessage){
            this.successMsg = CommonUtilsService.flashMessage;
            CommonUtilsService.flashMessage = '';
        }
    }
}