import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Device} from "../models/device";
import {DeviceService} from "../services/device.service";

@Component({
    selector: 'create-device',
    template: `
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
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
                <back-button></back-button>
                <button (click)="create()" class="btn btn-default" type="submit">Create</button>
            </form>
          </div>
        </div>
        
    `
})

export class CreateDeviceComponent{
    device :Device = {
        id : Math.ceil(Math.random()*1000),
        imei : '',
        model : '',
        isAssigned : false
    };
    constructor(private deviceService : DeviceService, private _router : Router){}
    create(){
        this.deviceService.createDevice(this.device);
        this._router.navigate(['/device/list']);
        return false;
    }
}