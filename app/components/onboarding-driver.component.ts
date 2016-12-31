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
            <div class="margin-bottom20">
                <div class="col-sm-4 border-eee center">
                    <h3>Select from existing drivers : </h3>
                    <div class="margin-top30">
                        <select [(ngModel)]="selectedDriverId" class="width100 height30">
                          <option *ngFor="let c of drivers" [ngValue]="c.id">{{c.name}}</option>
                        </select>
                    </div>
                    <button (click)="addDriver()" class="btn btn-default width100 margin-top20 margin-bottom30" type="submit">Add Driver</button>
                </div>
                <div class="col-sm-1">
                    <h2>OR</h2>
                </div>
                <div class="col-sm-7 border-eee">
                    <h3>Add a new driver</h3>
                    <create-driver></create-driver>
                </div>
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
        this._router.navigate(['/onboarding/car',this.onboarding.id]);
        return false;
    }

    ngOnInit(): void{
        this.route.params.subscribe(p=>this.onboarding=this.onboardingService.getOnboarding(+p['id']));
        this.drivers = this.driverService.getDrivers();
    }
}