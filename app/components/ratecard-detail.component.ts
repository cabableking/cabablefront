import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {Ratecard} from "../models/ratecard";
import {RatecardService} from "../services/ratecard.service";
import {CommonUtilsService} from "../services/common-utils.service";

@Component({
    selector: 'ratecard-detail',
    template : `
         <div *ngIf="ratecard">
            <div class="panel panel-primary">
                <div class="panel-heading">{{ratecard.name}}</div>
                <table class="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>{{ratecard.id}}</td>
                        </tr>
                        <tr>
                            <td>Name  </td>
                            <td [hidden]="editMode">{{ratecard.name}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{ratecard.name}}" [(ngModel)]="ratecard.name"/></td>
                        </tr>
                        <tr>
                            <td>Type  </td>
                            <td [hidden]="editMode">{{ratecard.type}}</td>
                            <td [hidden]="!editMode">
                                <select [(ngModel)]="ratecard.type" name="type">
                                  <option *ngFor="let c of rateCardTypes" [ngValue]="c">{{c}}</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Base Fare  </td>
                            <td [hidden]="editMode">{{ratecard.baseFare}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{ratecard.baseFare}}" [(ngModel)]="ratecard.baseFare"/></td>
                        </tr>
                        <tr>
                            <td>Rate/KM  </td>
                            <td [hidden]="editMode">{{ratecard.ratePerKM}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{ratecard.ratePerKM}}" [(ngModel)]="ratecard.ratePerKM"/></td>
                        </tr>
                        <tr>
                            <td>Rate/Minute  </td>
                            <td [hidden]="editMode">{{ratecard.ratePerMinute}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{ratecard.ratePerMinute}}" [(ngModel)]="ratecard.ratePerMinute"/></td>
                        </tr>
                        <tr>
                            <td>Inclusive Distance  </td>
                            <td [hidden]="editMode">{{ratecard.inclusiveDistance}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{ratecard.inclusiveDistance}}" [(ngModel)]="ratecard.inclusiveDistance"/></td>
                        </tr>
                        <tr>
                            <td>Other Charges </td>
                            <td [hidden]="editMode">{{ratecard.otherCharges}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{ratecard.otherCharges}}" [(ngModel)]="ratecard.otherCharges"/></td>
                        </tr>
                        <tr>
                            <td>Driver DA </td>
                            <td [hidden]="editMode">{{ratecard.driverDA}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{ratecard.driverDA}}" [(ngModel)]="ratecard.driverDA"/></td>
                        </tr>
                        <tr>
                            <td>Driver DA Timings (From) </td>
                            <td [hidden]="editMode">{{ratecard.driverDATimingsFrom + ' ' + ratecard.driverDATimingsFromAMPM }}</td>
                            <td [hidden]="!editMode">
                                <select [(ngModel)]="ratecard.driverDATimingsFrom" id="driverDATimingsFrom" name="driverDATimingsFrom">
                                  <option *ngFor="let c of timeHours" [ngValue]="c">{{c}}</option>
                                </select>
                                <select [(ngModel)]="ratecard.driverDATimingsFromAMPM" name="driverDATimingsFromAMPM">
                                  <option *ngFor="let c of ['AM','PM']" [ngValue]="c">{{c}}</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Driver DA Timings (To) </td>
                            <td [hidden]="editMode">{{ratecard.driverDATimingsTo + ' ' + ratecard.driverDATimingsToAMPM }}</td>
                            <td [hidden]="!editMode">
                                <select [(ngModel)]="ratecard.driverDATimingsTo" id="driverDATimingsTo" name="driverDATimingsTo">
                                  <option *ngFor="let c of timeHours" [ngValue]="c">{{c}}</option>
                                </select>
                                <select [(ngModel)]="ratecard.driverDATimingsToAMPM" name="driverDATimingsToAMPM">
                                  <option *ngFor="let c of ['AM','PM']" [ngValue]="c">{{c}}</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <back-button></back-button>
            <span [hidden]="!editMode"><button (click)="save()" class="btn btn-default">Save</button></span>
        </div>
    `
})

export class RatecardDetailComponent implements OnInit{
    @Input()
    ratecard:Ratecard;
    rateCardTypes = Object.keys(CommonUtilsService.rateCardTypes);

    timeHours = CommonUtilsService.timeHours;

    editMode:Boolean = false;
    constructor(
        private ratecardService : RatecardService,
        private route : ActivatedRoute,
        private router : Router
    ){}

    ngOnInit(): void{
        //this.route.params.subscribe(p=>this.ratecard=this.ratecardService.getRatecard(+p['id']));
        this.editMode = window.location.pathname.indexOf('edit')!==-1;
    }

    save(){
        this.ratecardService.saveRatecard(this.ratecard); //not working, change to two way binding
        this.router.navigate(['/ratecard/list']);
        return false;
    }
}