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
                    <label for="photo">Upload Photo</label>
                    <input type="text" class="form-control" id="photo" [(ngModel)]="driver.photo" name="photo" required="required">
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="text" class="form-control" id="age" [(ngModel)]="driver.age" name="age" required="required">
                </div>
                <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" class="form-control" id="first_name" [(ngModel)]="driver.first_name" name="first_name" required="required">
                </div>
                <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" class="form-control" id="last_name" [(ngModel)]="driver.last_name" name="last_name" required="required">
                </div>
                <div class="form-group">
                    <label for="driver_license_no">Licence Number</label>
                    <input type="text" class="form-control" id="driver_license_no" [(ngModel)]="driver.driver_license_no" name="driver_license_no" required="required">
                </div>
                <div class="form-group">
                    <label for="license_photo">Licence Photo</label>
                    <input type="text" class="form-control" id="license_photo" [(ngModel)]="driver.license_photo" name="license_photo" required="required">
                </div>
                <div class="form-group">
                    <label for="gender">Gender </label>
                    <label class="radio-inline"><input type="radio" id="gender" name="gender" value="M"  [(ngModel)]="driver.gender">Male</label>
                    <label class="radio-inline"><input type="radio" name="gender" value="F"  [(ngModel)]="driver.gender">Female</label>
                    <label class="radio-inline"><input type="radio" name="gender" value="O"  [(ngModel)]="driver.gender">Others</label>
                </div>
                <div class="form-group">
                    <label for="rating">Rating</label>
                    <input type="text" class="form-control" id="rating" [(ngModel)]="driver.rating" name="rating" required="required">
                </div>
                <div class="form-group">
                    <label for="contact_num">Contact Number</label>
                    <input type="text" class="form-control" id="contact_num" [(ngModel)]="driver.contact_num" name="contact_num" required="required">
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" [(ngModel)]="driver.address" name="address">
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
        photo: '',
        age:0,
        created_on: new Date(),
        first_name:'',
        last_name:'',
        driver_license_no:'',
        license_photo: '',
        gender: '',
        rating:'',
        updated_on: new Date(),
        contact_num: '',
        address: '',
        is_assigned: false,
        operator_id: 14
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