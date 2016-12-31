import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Device} from "../models/device";
import {DeviceService} from "../services/device.service";

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
                    <label for="model">Model</label>
                    <input type="text" class="form-control" id="model" [(ngModel)]="device.model" name="model" required="required">
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
        id : Math.ceil(Math.random()*1000),
        imei : '',
        model : '',
        isAssigned : false
    };
    successMsg:String = '';
    onboardingPage:Boolean = false;
    constructor(private deviceService : DeviceService, private _router : Router){}
    create(){
        this.deviceService.createDevice(this.device);
        if(this.onboardingPage){
            this.successMsg = 'New device added successfully! Please choose it from the list';
            return false;
        }
        this._router.navigate(['/device/list']);
        return false;
    }
    ngOnInit(){
        this.onboardingPage = window.location.pathname.indexOf('onboarding')!==-1;
    }
}