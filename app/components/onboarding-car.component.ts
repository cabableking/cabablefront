import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {OnboardingService} from "../services/onboarding.service";
import {Onboarding} from "../models/onboarding";
import {Car} from "../models/car";
import {CarService} from "../services/car.service";

@Component({
    selector: 'onboarding-car',
    template: `
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Onboarding Car</h3>
          </div>
          <div class="panel-body">
            <div style="margin-bottom: 20px">
                <select [(ngModel)]="selectedCarId">
                  <option *ngFor="let c of cars" [ngValue]="c.id">{{c.registrationNumber}}</option>
                </select>
                <button (click)="addCar()" class="btn btn-default" type="submit">Add Car</button>
            </div>
            <back-button></back-button>
          </div>
        </div>
        
    `
})

export class OnboardingCarComponent implements OnInit{
    constructor(private onboardingService : OnboardingService, private _router : Router,
                private route : ActivatedRoute, private carService : CarService){}
    onboarding : Onboarding;
    selectedCarId : null;
    cars : Car[];

    addCar(){
        this.onboardingService.addCarToOnboarding(this.onboarding, this.selectedCarId);
        //this._router.navigate(['/onboarding/finish']);
        this._router.navigate(['/onboarding/ratecard',this.onboarding.id]);
        return false;
    }

    ngOnInit(): void{
        this.route.params.subscribe(p=>this.onboarding=this.onboardingService.getOnboarding(+p['id']));
        this.cars = this.carService.getCars();
    }
}