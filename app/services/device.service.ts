import {Injectable} from "@angular/core";
import {Device} from "../models/device";

@Injectable()
export class DeviceService{
    devices : Device[] = [{
        id : Math.ceil(Math.random()*1000),
        imei : '74664738837738',
        model : 'Samsung Galaxy champ',
        isAssigned : false
    }];
    getDevices(){
        return this.devices;
    }

    getDevice(id:Number){
        return this.devices.find(c=> c.id===id);
    }

    createDevice(device:Device){
        this.devices.push(device);
    }

    saveDevice(device:Device){
        this.devices = this.devices.filter(c=>c.id!==device.id);
        this.createDevice(device);
    }
}