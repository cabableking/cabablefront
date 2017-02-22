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
                    <select [(ngModel)]="ratecard.type" name="type" (ngModelChange)="onChangeRateCardType($event)">
                      <option *ngFor="let c of rateCardTypes" [ngValue]="c">{{c}}</option>
                    </select>
                </div>
                <div class="form-group" [hidden]="fieldVisibility('baseFare')">
                    <label for="baseFare">Base Fare</label>
                    <input type="text" class="form-control" id="baseFare" [(ngModel)]="ratecard.baseFare" name="baseFare" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('ratePerKM')">
                    <label for="ratePerKM">Rate/KM</label>
                    <input type="text" class="form-control" id="ratePerKM" [(ngModel)]="ratecard.ratePerKM" name="ratePerKM" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('ratePerMinute')">
                    <label for="ratePerMinute">Rate/Minute</label>
                    <input type="text" class="form-control" id="ratePerMinute" [(ngModel)]="ratecard.ratePerMinute" name="ratePerMinute" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('inclusiveDistance')">
                    <label for="inclusiveDistance">Inclusive Distance</label>
                    <input type="text" class="form-control" id="inclusiveDistance" [(ngModel)]="ratecard.inclusiveDistance" name="inclusiveDistance" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('otherCharges')">
                    <label for="otherCharges">Other Charges</label>
                    <input type="text" class="form-control" id="otherCharges" [(ngModel)]="ratecard.otherCharges" name="otherCharges" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('driverDA')">
                    <label for="driverDA">Driver DA</label>
                    <input type="text" class="form-control" id="driverDA" [(ngModel)]="ratecard.driverDA" name="driverDA" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('driverDATimingsFrom')">
                    <label for="driverDATimingsFrom">Driver DA Timings (From)</label>
                    <select [(ngModel)]="ratecard.driverDATimingsFrom" id="driverDATimingsFrom" name="driverDATimingsFrom">
                      <option *ngFor="let c of timeHours" [ngValue]="c">{{c}}</option>
                    </select>
                    <select [(ngModel)]="ratecard.driverDATimingsFromAMPM" name="driverDATimingsFromAMPM">
                      <option *ngFor="let c of ['AM','PM']" [ngValue]="c">{{c}}</option>
                    </select>
                </div>
                <div class="form-group" [hidden]="fieldVisibility('driverDATimingsTo')">
                    <label for="driverDATimingsTo">Driver DA Timings To</label>
                    <select [(ngModel)]="ratecard.driverDATimingsTo" id="driverDATimingsTo" name="driverDATimingsTo">
                      <option *ngFor="let c of timeHours" [ngValue]="c">{{c}}</option>
                    </select>
                    <select [(ngModel)]="ratecard.driverDATimingsToAMPM" name="driverDATimingsToAMPM">
                      <option *ngFor="let c of ['AM','PM']" [ngValue]="c">{{c}}</option>
                    </select>
                </div>
                <div class="form-group" [hidden]="fieldVisibility('airportPickup')">
                    <label for="airportPickup">Airport Pickup</label>
                    <label class="radio-inline"><input id="airportPickup" type="radio" name="airportPickup" [value]="true" [(ngModel)]="ratecard.airportPickup">Yes</label>
                    <label class="radio-inline"><input type="radio" name="airportPickup" [value]="false" [(ngModel)]="ratecard.airportPickup">No</label>
                </div>
                <div class="form-group" [hidden]="fieldVisibility('airportDrop')">
                    <label for="airportDrop">Airport Drop</label>
                    <input type="checkbox" [(ngModel)]="ratecard.airportDrop" id="airportDrop" name="airportDrop">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('roundTrip')">
                    <label for="roundTrip">Round Trip</label>
                    <input type="checkbox" [(ngModel)]="ratecard.roundTrip" id="roundTrip" name="roundTrip">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('ratePerExtraKM')">
                    <label for="ratePerExtraKM">Rate/Extra KM</label>
                    <input type="text" class="form-control" id="ratePerExtraKM" [(ngModel)]="ratecard.ratePerExtraKM" name="ratePerExtraKM" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('ragePerWaitMinute')">
                    <label for="ragePerWaitMinute">Rate/Wait Minute</label>
                    <input type="text" class="form-control" id="ragePerWaitMinute" [(ngModel)]="ratecard.ragePerWaitMinute" name="ragePerWaitMinute" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('serviceTax')">
                    <label for="serviceTax">Service Tax</label>
                    <input type="text" class="form-control" id="serviceTax" [(ngModel)]="ratecard.serviceTax" name="serviceTax" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('otherTaxes')">
                    <label for="otherTaxes">Other Taxes</label>
                    <input type="text" class="form-control" id="otherTaxes" [(ngModel)]="ratecard.otherTaxes" name="otherTaxes" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('inclusiveTime')">
                    <label for="inclusiveTime">Inclusive Time</label>
                    <input type="text" class="form-control" id="inclusiveTime" [(ngModel)]="ratecard.inclusiveTime" name="inclusiveTime" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('hoursInPackage')">
                    <label for="hoursInPackage">Hours in Package</label>
                    <input type="text" class="form-control" id="hoursInPackage" [(ngModel)]="ratecard.hoursInPackage" name="hoursInPackage" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('extraKMCharge')">
                    <label for="extraKMCharge">Extra KM charge</label>
                    <input type="text" class="form-control" id="extraKMCharge" [(ngModel)]="ratecard.extraKMCharge" name="extraKMCharge" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('extraHourCharge')">
                    <label for="extraHourCharge">Extra hour charge</label>
                    <input type="text" class="form-control" id="extraHourCharge" [(ngModel)]="ratecard.extraHourCharge" name="extraHourCharge" required="required">
                </div>
                
                <div class="form-group" [hidden]="fieldVisibility('applyTwoWay')">
                    <label for="applyTwoWay">Apply Two way</label>
                    <input type="checkbox" [(ngModel)]="ratecard.applyTwoWay" id="applyTwoWay" name="applyTwoWay">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('from')">
                    <label for="from">From</label>
                    <input type="text" class="form-control" id="from" [(ngModel)]="ratecard.from" name="from" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('to')">
                    <label for="to">To</label>
                    <input type="text" class="form-control" id="to" [(ngModel)]="ratecard.to" name="to" required="required">
                </div>
                <div class="form-group" [hidden]="fieldVisibility('fees')">
                    <label for="fees">Fees</label>
                    <input type="text" class="form-control" id="fees" [(ngModel)]="ratecard.fees" name="fees" required="required">
                </div><div class="form-group" [hidden]="fieldVisibility('tollAndParking')">
                    <label for="tollAndParking">Toll & Parking</label>
                    <input type="text" class="form-control" id="tollAndParking" [(ngModel)]="ratecard.tollAndParking" name="tollAndParking" required="required">
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
        driverDATimingsToAMPM: '',
        airportPickup: '',
        airportDrop: '',
        roundTrip: '',
        ratePerExtraKM: '',
        ragePerWaitMinute: '',
        serviceTax:'',
        otherTaxes:'',
        inclusiveTime:'',
        hoursInPackage:'',
        extraKMCharge:'',
        extraHourCharge:'',
        applyTwoWay:'',
        from:'',
        to:'',
        fees:'',
        tollAndParking:'',
    };
    successMsg:String = '';
    onboardingPage:Boolean = false;

    //rateCardTypes = Object.keys(CommonUtilsService.rateCardTypes);
    rateCardTypes=[];
    selectedRateCardType = '';
    rateCardSelectedFields: String[] = [];
    timeHours = CommonUtilsService.timeHours;
    constructor(private ratecardService : RatecardService, private _router : Router){}
    create(){
        this.ratecardService.createRatecard(this.ratecard);
        if(this.onboardingPage){
            this.successMsg = 'New rate card added successfully! Please choose it from the list';
            return false;
        }
        this._router.navigate(['/ratecard/list']);
        return false;
    }

    fieldVisibility(field){
        return this.rateCardSelectedFields.indexOf(field.toLowerCase())==-1;
    }

    onChangeRateCardType(selectedRateCardType){
        this.selectedRateCardType = selectedRateCardType;
        this.ratecardService.getRatecardFields(selectedRateCardType).then(resp => {
            if(resp.status==200){
                let data = JSON.parse(resp['_body']);
                this.rateCardSelectedFields = data[0]['rate_card_keys_list'];
            }
        });
    }

    ngOnInit(){
        this.onboardingPage = window.location.pathname.indexOf('onboarding')!==-1;
        this.ratecardService.getPlanNames().then(resp => {
            if(resp.status==200){
                this.rateCardTypes = JSON.parse(resp['_body']);
            }
        });
    }
}