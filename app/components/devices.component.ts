import {Component, OnInit} from "@angular/core";
import {DeviceService} from "../services/device.service";
import {Device} from "../models/device";

@Component({
    moduleId : module.id,
    selector: 'devices',
    templateUrl : '../templates/devices.component.html'
})

export class DevicesComponent implements OnInit {
    devices: Device[];

    constructor(private deviceService: DeviceService) {}

    getDevices(): void {
        this.devices = this.deviceService.getDevices();
    }

    ngOnInit(): void {
        this.getDevices();
    }
}