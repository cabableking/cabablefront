import {Injectable} from "@angular/core";
import {Driver} from "../models/driver";

@Injectable()
export class DriverService{
    drivers : Driver[] = [{
        id : Math.ceil(Math.random()*1000),
        name : 'Vikas Singh',
        address : 'HBR Layout, Bangalore',
        licenceNumber : 'DSI4638303',
        isAssigned : false
    }];
    getDrivers(){
        return this.drivers;
    }

    getDriver(id:Number){
        return this.drivers.find(c=> c.id===id);
    }

    createDriver(driver:Driver){
        this.drivers.push(driver);
    }

    saveDriver(driver:Driver){
        this.drivers = this.drivers.filter(c=>c.id!==driver.id);
        this.createDriver(driver);
    }
}