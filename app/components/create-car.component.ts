import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Car} from "../models/car";
import {CarService} from "../services/car.service";
import {CommonUtilsService} from "../services/common-utils.service";

@Component({
    selector: 'create-car',
    template: `
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div *ngIf="successMsg">
            <div class="alert alert-success" role="alert">{{successMsg}}</div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Add Car</h3>
          </div>
          <div class="panel-body">
            <form (ngSubmit)="create()">
                <div class="form-group">
                    <label for="regNum">Registration Number:</label>
                    <input type="text" class="form-control" id="regNum" [(ngModel)]="car.car_reg_id" name="regNum" required="required">
                </div>
                <div class="form-group">
                    <label for="type">Parent Category</label>
                    <select [(ngModel)]="car.parent_category" name="type">
                      <option *ngFor="let c of carParentCategories" [ngValue]="c">{{c}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="model">Model</label>
                    <input type="text" class="form-control" id="model" [(ngModel)]="car.model" name="model" required="required">
                </div>
                <div class="form-group">
                    <label for="capacity">Capacity:</label>
                    <input type="text" class="form-control" id="capacity" [(ngModel)]="car.capacity" name="capacity" required="required">
                </div>
                <div class="form-group">
                    <label for="year">Year:</label>
                    <input type="text" class="form-control" id="year" [(ngModel)]="car.year" name="year" required="required">
                </div>
                <div class="form-group">
                    <label for="color">Color:</label>
                    <input type="text" class="form-control" id="color" [(ngModel)]="car.color" name="color" required="required">
                </div>
                <div class="form-group">
                    <label for="category">Category:</label>
                    <input type="text" class="form-control" id="category" [(ngModel)]="car.category" name="category" required="required">
                </div>
                <span [hidden]="onboardingPage"><back-button></back-button></span>
                <button (click)="create()" class="btn btn-default" type="submit">Create</button>
            </form>
          </div>
        </div>
        
    `
})

export class CreateCarComponent implements OnInit{
    car :Car = {
        car_reg_id : '',
        model : '',
        capacity : 0,
        year : 0,
        color : '',
        category : '',
        operator_id : 14,
        make : '',
        has_ac : false,
        is_assigned : false,
        states_permit_map : 0,
        parent_category : ''
    };
    successMsg:String = '';
    errorMsg:String = '';
    onboardingPage:Boolean = false;
    carParentCategories = CommonUtilsService.carParentCategories;
    constructor(private carService : CarService, private _router : Router){}
    create(){
        this.carService.createCar(this.car).then(resp => {
            if(resp.status==200){
                if(this.onboardingPage){
                    this.successMsg = 'New car added successfully! Please choose it from the list';
                    return false;
                }else{
                    CommonUtilsService.flashMessage = 'Car added successfully!';
                }
                this._router.navigate(['/car/list']);
            }else{
                this.errorMsg = resp['message'];
            }
        });
        return false;
    }
    ngOnInit(){
        this.onboardingPage = window.location.pathname.indexOf('onboarding')!==-1;
    }
}