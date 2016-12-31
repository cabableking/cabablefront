import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Driver} from "../models/driver";
import {DriverService} from "../services/driver.service";

@Component({
    selector: 'create-driver',
    template: `
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div *ngIf="successMsg">
            <div class="alert alert-success" role="alert">{{successMsg}}</div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Add Driver</h3>
          </div>
          <div class="panel-body">
            <form (ngSubmit)="create()">
                <div class="form-group">
                    <label for="name">name:</label>
                    <input type="text" class="form-control" id="name" [(ngModel)]="driver.name" name="name" required="required">
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" [(ngModel)]="driver.address" name="address" required="required">
                </div>
                <div class="form-group">
                    <label for="licenceNumber">Licence Number</label>
                    <input type="text" class="form-control" id="licenceNumber" [(ngModel)]="driver.licenceNumber" name="licenceNumber" required="required">
                </div>
                <span [hidden]="onboardingPage"><back-button></back-button></span>
                <button (click)="create()" class="btn btn-default" type="submit">Create</button>
            </form>
          </div>
        </div>
        
    `
})

export class CreateDriverComponent implements OnInit{
    driver :Driver = {
        id : Math.ceil(Math.random()*1000),
        name : '',
        address : '',
        licenceNumber : '',
        isAssigned : false
    };
    successMsg:String = '';
    onboardingPage:Boolean = false;
    constructor(private driverService : DriverService, private _router : Router){}
    create(){
        this.driverService.createDriver(this.driver);
        if(this.onboardingPage){
            this.successMsg = 'New driver added successfully! Please choose it from the list';
            return false;
        }
        this._router.navigate(['/driver/list']);
        return false;
    }
    ngOnInit(){
        this.onboardingPage = window.location.pathname.indexOf('onboarding')!==-1;
    }
}