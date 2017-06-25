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
        id : 0,
        driver_license_no : '',
        car_reg_id : '',
        device_imei : '',
        is_complete : false
    };

    constructor(private onboardingService : OnboardingService, private _router : Router){}
    start(){
        this.onboardingService.createOnboarding(this.onboarding).then(resp => {
            if(resp.status==200){
                var onboardingId = JSON.parse(resp['_body']);
                if(onboardingId){
                    this.onboarding.id = onboardingId;
                    this._router.navigate(['/onboarding/device',this.onboarding.id]);
                }

            }
        });

        return false;
    }
}