import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {OnboardingService} from "../services/onboarding.service";
import {Onboarding} from "../models/onboarding";
import {Device} from "../models/device";
import {DeviceService} from "../services/device.service";

@Component({
    selector: 'onboarding-device',
    template: `
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Onboarding Device</h3>
          </div>
          <div class="panel-body">
            <div style="margin-bottom: 20px">
                <select [(ngModel)]="selectedDeviceId">
                  <option *ngFor="let c of devices" [ngValue]="c.id">{{c.imei}}</option>
                </select>
                <button (click)="addDevice()" class="btn btn-default" type="submit">Add Device</button>
            </div>
            <back-button></back-button>
          </div>
        </div>
        
    `
})

export class OnboardingDeviceComponent implements OnInit{
    constructor(private onboardingService : OnboardingService, private _router : Router,
                private route : ActivatedRoute, private deviceService : DeviceService){}
    onboarding : Onboarding;
    selectedDeviceId : null;
    devices : Device[];

    addDevice(){
        this.onboardingService.addDeviceToOnboarding(this.onboarding, this.selectedDeviceId);
        this._router.navigate(['/onboarding/driver',this.onboarding.id]);
        return false;
    }

    ngOnInit(): void{
        this.route.params.subscribe(p=>this.onboarding=this.onboardingService.getOnboarding(+p['id']));
        this.devices = this.deviceService.getDevices();
    }
}