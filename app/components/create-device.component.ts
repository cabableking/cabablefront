import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Device} from "../models/device";
import {DeviceService} from "../services/device.service";
import {CommonUtilsService} from "../services/common-utils.service";

@Component({
    selector: 'create-device',
    template: `
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div *ngIf="successMsg">
            <div class="alert alert-success" role="alert">{{successMsg}}</div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Add Device</h3>
          </div>
          <div class="panel-body">
            <form (ngSubmit)="create()">
                <div class="form-group">
                    <label for="imei">IMEI:</label>
                    <input type="text" class="form-control" id="imei" [(ngModel)]="device.imei" name="imei" required="required">
                </div>
                <div class="form-group">
                    <label for="make">Make: </label>
                    <input type="text" class="form-control" id="make" [(ngModel)]="device.device_make" name="make" required="required">
                </div>
                <div class="form-group">
                    <label for="model">Model: </label>
                    <input type="text" class="form-control" id="model" [(ngModel)]="device.device_model" name="model" required="required">
                </div>
                <div class="form-group">
                    <label for="os">Operating System Version: </label>
                    <input type="text" class="form-control" id="os" [(ngModel)]="device.os_version" name="os" required="required">
                </div>
                <div class="form-group">
                    <label for="phone_number">Phone Number:</label>
                    <input type="text" class="form-control" id="phone_number" [(ngModel)]="device.device_phone_number" name="phone_number" required="required">
                </div>
                <div class="form-group">
                    <label for="network_provider">Network Provider:</label>
                    <input type="text" class="form-control" id="network_provider" [(ngModel)]="device.network_provider" name="network_provider" required="required">
                </div>
                <span [hidden]="onboardingPage"><back-button></back-button></span>
                <button (click)="create()" class="btn btn-default" type="submit">Create</button>
            </form>
          </div>
        </div>
        
    `
})

export class CreateDeviceComponent implements OnInit{
    device :Device = {
        imei:'',
        device_make: '',
        device_model: '',
        os_version:'',
        device_phone_number: '',
        network_provider: '',
        created_on: new Date(),
        last_updated_on: new Date(),
        is_assigned: false,
        operator_id: 14
    };
    successMsg:String = '';
    errorMsg:String = '';
    onboardingPage:Boolean = false;
    constructor(private deviceService : DeviceService, private _router : Router){}
    create(){
        this.deviceService.createDevice(this.device).then(resp => {
            if(resp.status==200){
                if(this.onboardingPage){
                    this.successMsg = 'New device added successfully! Please choose it from the list';
                    return false;
                }else{
                    CommonUtilsService.flashMessage = 'Device added successfully!';
                }
                this._router.navigate(['/device/list']);
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