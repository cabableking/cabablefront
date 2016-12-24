import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {OnboardingService} from "../services/onboarding.service";
import {Onboarding} from "../models/onboarding";
import {Driver} from "../models/driver";
import {DriverService} from "../services/driver.service";

@Component({
    selector: 'onboarding-driver',
    template: `
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Onboarding Driver</h3>
          </div>
          <div class="panel-body">
            <div style="margin-bottom: 20px">
                <select [(ngModel)]="selectedDriverId">
                  <option *ngFor="let c of drivers" [ngValue]="c.id">{{c.name}}</option>
                </select>
                <button (click)="addDriver()" class="btn btn-default" type="submit">Add Driver</button>
            </div>
            <back-button></back-button>
          </div>
        </div>
        
    `
})

export class OnboardingDriverComponent implements OnInit{
    constructor(private onboardingService : OnboardingService, private _router : Router,
                private route : ActivatedRoute, private driverService : DriverService){}
    onboarding : Onboarding;
    selectedDriverId : null;
    drivers : Driver[];

    addDriver(){
        this.onboardingService.addDriverToOnboarding(this.onboarding, this.selectedDriverId);
        this._router.navigate(['/onboarding/finish']);
        return false;
    }

    ngOnInit(): void{
        this.route.params.subscribe(p=>this.onboarding=this.onboardingService.getOnboarding(+p['id']));
        this.drivers = this.driverService.getDrivers();
    }
}