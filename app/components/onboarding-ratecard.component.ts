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
            <div class="margin-bottom20">
                <div class="col-sm-4 border-eee center">
                    <h3>Select from existing ratecards : </h3>
                    <div class="margin-top30">
                        <select [(ngModel)]="selectedRatecardId" class="width100 height30">
                          <option *ngFor="let c of ratecards" [ngValue]="c.id">{{c.name}}</option>
                        </select>
                    </div>
                    <button (click)="addRatecard()" class="btn btn-default width100 margin-top20 margin-bottom30" type="submit">Add Ratecard</button>
                </div>
                <div class="col-sm-1">
                    <h2>OR</h2>
                </div>
                <div class="col-sm-7 border-eee">
                    <h3>Add a new ratecard</h3>
                    <create-ratecard></create-ratecard>
                </div>
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
        //this.ratecards = this.ratecardService.getRatecards();
    }
}