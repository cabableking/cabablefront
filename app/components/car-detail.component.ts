import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Car} from "../models/car";
import {CarService} from '../services/car.service';

@Component({
    selector: 'car-detail',
    template : `
         <div *ngIf="car">
            <div class="panel panel-primary">
                <div class="panel-heading">{{car.registrationNumber}}</div>
                <table class="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>{{car.id}}</td>
                        </tr>
                        <tr>
                            <td>Registration Number  </td>
                            <td [hidden]="editMode">{{car.registrationNumber}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.registrationNumber}}" /></td>
                        </tr>
                        <tr>
                            <td>Model  </td>
                            <td [hidden]="editMode">{{car.model}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.model}}" /></td>
                        </tr>
                        <tr>
                            <td>Associated Device Id  </td>
                            <td>{{car.associatedDeviceId}}</td>
                        </tr>
                        <tr>
                            <td>Associated Driver Id  </td>
                            <td>{{car.associatedDriverId}}</td>
                        </tr> 
                        <tr>
                            <td>Capacity  </td>
                            <td [hidden]="editMode">{{car.capacity}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.capacity}}" /></td>
                        </tr>    
                        <tr>
                            <td>Year  </td>
                            <td [hidden]="editMode">{{car.year}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.year}}" /></td>
                        </tr>
                        <tr>
                            <td>Color  </td>
                            <td [hidden]="editMode">{{car.color}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.color}}" /></td>
                        </tr>
                        <tr>
                            <td>Category  </td>
                            <td [hidden]="editMode">{{car.category}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.category}}" /></td>
                        </tr>
                        <tr>
                            <td>Operator Id  </td>
                            <td>{{car.operatorId}}</td>
                        </tr>
                        <tr>
                            <td>Make  </td>
                            <td [hidden]="editMode">{{car.make}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.make}}" /></td>
                        </tr>
                        <tr>
                            <td>AC  </td>
                            <td [hidden]="editMode">{{car.hasAC}}</td>
                            <td [hidden]="!editMode">
                                <label class="radio-inline"><input type="radio" name="hasAC" value="true" [checked]="car.hasAC">Yes</label>
                                <label class="radio-inline"><input type="radio" name="hasAC" value="false" [checked]="!car.hasAC">No</label>
                            </td>
                        </tr>
                        <tr>
                            <td>Assigned  </td>
                            <td [hidden]="editMode">{{car.isAssigned}}</td>
                            <td [hidden]="!editMode">
                                <label class="radio-inline"><input type="radio" name="isAssigned" value="true" [checked]="car.isAssigned">Yes</label>
                                <label class="radio-inline"><input type="radio" name="isAssigned" value="false" [checked]="!car.isAssigned">No</label>
                            </td>
                        </tr>
                        <tr>
                            <td>States Permit Map  </td>
                            <td>{{car.statesPermitMap}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button class="btn btn-primary" (click)="goBack()">Back</button>
        </div>
    `
})

export class CarDetailComponent implements OnInit{
    @Input()
    car:Car;

    editMode:Boolean = false;
    constructor(
        private carService : CarService,
        private route : ActivatedRoute,
        private location : Location
    ){}

    ngOnInit(): void{
        this.route.params
            .switchMap((params:Params)=> this.carService.getCar(+params['id']))
            .subscribe(car=>this.car = car);
        this.editMode = window.location.pathname.indexOf('edit')!==-1;
    }

    goBack():void{
        this.location.back();
    }
}