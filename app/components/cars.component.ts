import {Component, OnInit} from '@angular/core';
import {Car} from "../models/car";
import {CarService} from "../services/car.service";

@Component({
    moduleId : module.id,
    selector: 'cars',
    templateUrl : '../templates/cars.component.html'
})

export class CarsComponent implements OnInit {
    cars: Car[];
    selectedCar: Car;

    constructor(private carService: CarService) {
    } //added provider for CarService in app.module.ts

    getCars(): void {
        this.carService.getCars().then(cars => this.cars = cars);
    }

    onSelectCar(car: Car): void {
        this.selectedCar = car;
    }

    ngOnInit(): void {
        this.getCars();
    }
}