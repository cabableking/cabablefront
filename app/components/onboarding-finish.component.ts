import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {OnboardingService} from "../services/onboarding.service";

@Component({
    selector: 'onboarding-finish',
    template: `
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Onboarding Completed</h3>
          </div>
          <div class="panel-body">
            <div style="margin-bottom: 20px; color: #3c763d">Onboarding Completed Successfully!</div>
            <back-button></back-button>
          </div>
        </div>
        
    `
})

export class OnboardingFinishComponent{

    constructor(private onboardingService : OnboardingService, private _router : Router){}

}