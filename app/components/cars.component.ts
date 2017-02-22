import {Component, OnInit} from '@angular/core';
import {Car} from "../models/car";
import {CarService} from "../services/car.service";
import {CommonUtilsService} from "../services/common-utils.service";
import {Router} from "@angular/router";

@Component({
    moduleId : module.id,
    selector: 'cars',
    templateUrl : '../templates/cars.component.html'
})

export class CarsComponent implements OnInit {
    cars: Car[];
    errorMsg = '';
    successMsg = '';

    constructor(
        private carService: CarService,
        private _router : Router
    ) {}

    getCars(): void {
        this.carService.getCars().then(resp => {
            if(resp.status==200){
                this.cars = JSON.parse(resp['_body']);
            }else{
                this.errorMsg = resp['message'];
            }
        });
    }

    deleteCar(car_reg_id){
        this.carService.deleteCar(car_reg_id).then(resp => {
            if(resp.status==200){
                CommonUtilsService.flashMessage = 'Car deleted successfully!';
                this._router.navigate(['/car/list']);
            }else{
                this.errorMsg = resp['message'];
            }
        });
        return false;
    }

    ngOnInit(): void {
        this.getCars();
        if(CommonUtilsService.flashMessage){
            this.successMsg = CommonUtilsService.flashMessage;
            CommonUtilsService.flashMessage = '';
        }
    }
}