import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {OnboardingService} from "../services/onboarding.service";
import {Onboarding} from "../models/onboarding";
import {Ratecard} from "../models/ratecard";
import {RatecardService} from "../services/ratecard.service";

@Component({
    selector: 'onboarding-ratecard',
    template: `
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Select Ratecard</h3>
          </div>
          <div class="panel-body">
            <div style="margin-bottom: 20px">
                <select [(ngModel)]="selectedRatecardId">
                  <option *ngFor="let c of ratecards" [ngValue]="c.id">{{c.name}}</option>
                </select>
                <button (click)="addRatecard()" class="btn btn-default" type="submit">Add Ratecard</button>
            </div>
            <back-button></back-button>
          </div>
        </div>
        
    `
})

export class OnboardingRatecardComponent implements OnInit{
    constructor(private onboardingService : OnboardingService, private _router : Router,
                private route : ActivatedRoute, private ratecardService : RatecardService){}
    onboarding : Onboarding;
    selectedRatecardId : null;
    ratecards : Ratecard[];

    addRatecard(){
        this.onboardingService.addRatecardToOnboarding(this.onboarding, this.selectedRatecardId);
        this._router.navigate(['/onboarding/finish']);
        return false;
    }

    ngOnInit(): void{
        this.route.params.subscribe(p=>this.onboarding=this.onboardingService.getOnboarding(+p['id']));
        this.ratecards = this.ratecardService.getRatecards();
    }
}