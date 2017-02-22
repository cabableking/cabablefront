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
            <div class="margin-bottom20">
                <div class="col-sm-4 border-eee center">
                    <h3>Select from existing cars : </h3>
                    <div class="margin-top30">
                        <select [(ngModel)]="selectedCarId" class="width100 height30">
                          <option *ngFor="let c of cars" [ngValue]="c.car_reg_id">{{c.car_reg_id}}</option>
                        </select>
                    </div>
                    <button (click)="addCar()" class="btn btn-default width100 margin-top20 margin-bottom30" type="submit">Add Car</button>
                </div>
                <div class="col-sm-1">
                    <h2>OR</h2>
                </div>
                <div class="col-sm-7 border-eee">
                    <h3>Add a new car</h3>
                    <create-car></create-car>
                </div>
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
    errorMsg = '';
    addCar(){
        this.onboardingService.addCarToOnboarding(this.onboarding, this.selectedCarId);
        //this._router.navigate(['/onboarding/finish']);
        this._router.navigate(['/onboarding/ratecard',this.onboarding.id]);
        return false;
    }

    ngOnInit(): void{
        this.route.params.subscribe(p=>this.onboarding=this.onboardingService.getOnboarding(+p['id']));
        this.carService.getCars().then(resp => {
            if(resp.status==200){
                this.cars = JSON.parse(resp['_body']);
            }else{
                this.errorMsg = resp['message'];
            }
        });
    }
}