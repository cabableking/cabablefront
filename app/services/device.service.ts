import {Injectable} from "@angular/core";
import {Device} from "../models/device";

@Injectable()
export class DeviceService{
    devices : Device[] = [{
        id : 100,
        imei : '74664738837738',
        model : 'Samsung Galaxy champ',
        isAssigned : false
    },{
        id : 101,
        imei : '5746473847332',
        model : 'Micromax canvas Duo',
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