import {Injectable} from '@angular/core';
import {Car} from "../models/car";
import {CARS} from "../consts/mock-cars";

@Injectable()
export class CarService{
    cars : Car[] = [{
        id : Math.ceil(Math.random()*1000),
        registrationNumber : 'KA03 HX4555',
        model : 'Hyundai',
        associatedDeviceId : 3,
        associatedDriverId : 4,
        capacity : 4,
        year : 2005,
        color : 'blue',
        category : 'Sedan',
        operatorId : 1,
        make : '2005',
        hasAC : true,
        isAssigned : true,
        statesPermitMap : 4
    }];
    getCars(){
        //return Promise.resolve(CARS);
        return this.cars;
    }

    getCar(id:Number){
        return this.cars.find(c=> c.id===id);
    }

    createCar(car:Car){
        this.cars.push(car);
    }

    saveCar(car:Car){
        this.cars = this.cars.filter(c=>c.id!==car.id);
        this.createCar(car);
    }
}