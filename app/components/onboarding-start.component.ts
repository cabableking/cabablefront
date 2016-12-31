import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {OnboardingService} from "../services/onboarding.service";
import {Onboarding} from "../models/onboarding";

@Component({
    selector: 'onboarding-start',
    template: `
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Onboarding Home</h3>
          </div>
          <div class="panel-body">
            <back-button></back-button>
            <button (click)="start()" class="btn btn-default" type="submit">Start Onboarding Wizard</button>
          </div>
        </div>
        
    `
})

export class OnboardingStartComponent{
    onboarding : Onboarding = {
        id : Math.ceil(Math.random()*1000),
        operatorId : 0,
        status : 0,
        associatedCarId : 0,
        associatedDeviceId : 0,
        associatedDriverId : 0
    };

    constructor(private onboardingService : OnboardingService, private _router : Router){}
    start(){
        this.onboardingService.createOnboarding(this.onboarding);
        this._router.navigate(['/onboarding/device',this.onboarding.id]);
        return false;
    }
}