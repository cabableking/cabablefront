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
                          <option *ngFor="let c of ratecards" [ngValue]="c.rate_card_id">{{c.name}}</option>
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
    onboardingId : Number;
    selectedRatecardId : null;
    ratecards;

    addRatecard(){
        //this.onboardingService.addRatecardToOnboarding(this.onboarding, this.selectedRatecardId);
        //this._router.navigate(['/onboarding/finish']);
        this.onboardingService.saveOnboarding({id: this.onboardingId, rate_card_ids : [this.selectedRatecardId]}).then(resp => {
            if(resp.status==200){
                var onboarding = JSON.parse(resp['_body']);
                if(onboarding && onboarding.id){
                    this.onboardingService.saveOnboarding({id: this.onboardingId, is_complete : true}).then(resp => {
                        if(resp.status==200){
                            var onboarding = JSON.parse(resp['_body']);
                            if(onboarding && onboarding.id){
                                this._router.navigate(['/onboarding/finish']);
                            }

                        }
                    });
                    //this._router.navigate(['/onboarding/finish']);
                }

            }
        });



        return false;
    }

    ngOnInit(): void{
        //this.route.params.subscribe(p=>this.onboarding=this.onboardingService.getOnboarding(+p['id']));
        //this.ratecards = this.ratecardService.getRatecards();


        this.route.params.subscribe(p=>this.onboardingId=(+p['id']));
        this.ratecardService.getRatecards().then(resp => {
            if(resp.status==200){
                this.ratecards = JSON.parse(resp['_body']);
            }
        });
    }
}