import {Injectable} from '@angular/core';
import {Car} from "../models/car";
import {CARS} from "../consts/mock-cars";

@Injectable()
export class CarService{
    getCars():Promise<Car[]>{
        return Promise.resolve(CARS);
    }

    getCar(id:Number):Promise<Car>{
        return this.getCars()
            .then(cars=>cars.find(car=>car.id===id));
    }
}