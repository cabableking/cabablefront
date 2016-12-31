import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Ratecard} from "../models/ratecard";
import {RatecardService} from "../services/ratecard.service";
import {CommonUtilsService} from "../services/common-utils.service";

@Component({
    selector: 'create-ratecard',
    template: `
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div *ngIf="successMsg">
            <div class="alert alert-success" role="alert">{{successMsg}}</div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Add Ratecard</h3>
          </div>
          <div class="panel-body">
            <form (ngSubmit)="create()">
                <div class="form-group">
                    <label for="name">name:</label>
                    <input type="text" class="form-control" id="name" [(ngModel)]="ratecard.name" name="name" required="required">
                </div>
                <div class="form-group">
                    <label for="type">Type</label>
                    <select [(ngModel)]="ratecard.type" name="type">
                      <option *ngFor="let c of rateCardTypes" [ngValue]="c">{{c}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="baseFare">Base Fare</label>
                    <input type="text" class="form-control" id="baseFare" [(ngModel)]="ratecard.baseFare" name="baseFare" required="required">
                </div>
                <div class="form-group">
                    <label for="ratePerKM">Rate/KM</label>
                    <input type="text" class="form-control" id="ratePerKM" [(ngModel)]="ratecard.ratePerKM" name="ratePerKM" required="required">
                </div>
                <div class="form-group">
                    <label for="ratePerMinute">Rate/Minute</label>
                    <input type="text" class="form-control" id="ratePerMinute" [(ngModel)]="ratecard.ratePerMinute" name="ratePerMinute" required="required">
                </div><div class="form-group">
                    <label for="inclusiveDistance">Inclusive Distance</label>
                    <input type="text" class="form-control" id="inclusiveDistance" [(ngModel)]="ratecard.inclusiveDistance" name="inclusiveDistance" required="required">
                </div>
                <div class="form-group">
                    <label for="otherCharges">Other Charges</label>
                    <input type="text" class="form-control" id="otherCharges" [(ngModel)]="ratecard.otherCharges" name="otherCharges" required="required">
                </div>
                <div class="form-group">
                    <label for="driverDA">Driver DA</label>
                    <input type="text" class="form-control" id="driverDA" [(ngModel)]="ratecard.driverDA" name="driverDA" required="required">
                </div>
                <div class="form-group">
                    <label for="driverDATimingsFrom">Driver DA Timings (From)</label>
                    <select [(ngModel)]="ratecard.driverDATimingsFrom" id="driverDATimingsFrom" name="driverDATimingsFrom">
                      <option *ngFor="let c of timeHours" [ngValue]="c">{{c}}</option>
                    </select>
                    <select [(ngModel)]="ratecard.driverDATimingsFromAMPM" name="driverDATimingsFromAMPM">
                      <option *ngFor="let c of ['AM','PM']" [ngValue]="c">{{c}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="driverDATimingsTo">Driver DA Timings To</label>
                    <select [(ngModel)]="ratecard.driverDATimingsTo" id="driverDATimingsTo" name="driverDATimingsTo">
                      <option *ngFor="let c of timeHours" [ngValue]="c">{{c}}</option>
                    </select>
                    <select [(ngModel)]="ratecard.driverDATimingsToAMPM" name="driverDATimingsToAMPM">
                      <option *ngFor="let c of ['AM','PM']" [ngValue]="c">{{c}}</option>
                    </select>
                </div>
                
                <span [hidden]="onboardingPage"><back-button></back-button></span>
                <button (click)="create()" class="btn btn-default" type="submit">Create</button>
            </form>
          </div>
        </div>
        
    `
})

export class CreateRatecardComponent implements OnInit{
    ratecard :Ratecard = {
        id : Math.ceil(Math.random()*1000),
        name : '',
        type : '',
        baseFare : '',
        ratePerKM : '',
        ratePerMinute: '',
        inclusiveDistance: '',
        otherCharges: '',
        driverDA: '',
        driverDATimingsFrom: '',
        driverDATimingsFromAMPM: '',
        driverDATimingsTo: '',
        driverDATimingsToAMPM: ''
    };
    successMsg:String = '';
    onboardingPage:Boolean = false;

    rateCardTypes = Object.keys(CommonUtilsService.rateCardTypes);
    timeHours = CommonUtilsService.timeHours;
    constructor(private ratecardService : RatecardService, private _router : Router){}
    create(){
        this.ratecardService.createRatecard(this.ratecard);
        if(this.onboardingPage){
            this.successMsg = 'New car added successfully! Please choose it from the list';
            return false;
        }
        this._router.navigate(['/ratecard/list']);
        return false;
    }

    ngOnInit(){
        this.onboardingPage = window.location.pathname.indexOf('onboarding')!==-1;
    }
}