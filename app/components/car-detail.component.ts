import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {Car} from "../models/car";
import {CarService} from "../services/car.service";
import {CommonUtilsService} from "../services/common-utils.service";

@Component({
    selector: 'car-detail',
    template : `
         <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div *ngIf="successMsg">
            <div class="alert alert-success" role="alert">{{successMsg}}</div>
        </div>
         <div *ngIf="car">
            <div class="panel panel-primary">
                <div class="panel-heading">{{car.car_reg_id}}</div>
                <table class="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>Registration Number  </td>
                            <td>{{car.car_reg_id}}</td>
                        </tr>
                        <tr>
                            <td>Model  </td>
                            <td [hidden]="editMode">{{car.model}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.model}}" [(ngModel)]="car.model"/></td>
                        </tr>
                        <tr>
                            <td>Capacity  </td>
                            <td [hidden]="editMode">{{car.capacity}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.capacity}}" [(ngModel)]="car.capacity"/></td>
                        </tr>    
                        <tr>
                            <td>Year  </td>
                            <td [hidden]="editMode">{{car.year}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.year}}" [(ngModel)]="car.year"/></td>
                        </tr>
                        <tr>
                            <td>Color  </td>
                            <td [hidden]="editMode">{{car.color}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.color}}" [(ngModel)]="car.color"/></td>
                        </tr>
                        <tr>
                            <td>Category  </td>
                            <td [hidden]="editMode">{{car.category}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.category}}" [(ngModel)]="car.category"/></td>
                        </tr>
                        <tr>
                            <td>Operator Id  </td>
                            <td>{{car.operator_id}}</td>
                        </tr>
                        <tr>
                            <td>Make  </td>
                            <td [hidden]="editMode">{{car.make}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{car.make}}" [(ngModel)]="car.make"/></td>
                        </tr>
                        <tr>
                            <td>AC  </td>
                            <td [hidden]="editMode">{{car.has_ac}}</td>
                            <td [hidden]="!editMode">
                                <label class="radio-inline"><input type="radio" name="hasAC" [value]="true" [(ngModel)]="car.has_ac">Yes</label>
                                <label class="radio-inline"><input type="radio" name="hasAC" [value]="false" [(ngModel)]="car.has_ac">No</label>
                            </td>
                        </tr>
                        <tr>
                            <td>Assigned  </td>
                            <td [hidden]="editMode">{{car.is_assigned}}</td>
                            <td [hidden]="!editMode">
                                <label class="radio-inline"><input type="radio" name="isAssigned" [value]="true"  [(ngModel)]="car.is_assigned">Yes</label>
                                <label class="radio-inline"><input type="radio" name="isAssigned" [value]="false"  [(ngModel)]="car.is_assigned">No</label>
                            </td>
                        </tr>
                        <tr>
                            <td>States Permit Map  </td>
                            <td>{{car.states_permit_map}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <back-button></back-button>
            <span [hidden]="!editMode"><button (click)="save()" class="btn btn-default">Save</button></span>
        </div>
    `
})

export class CarDetailComponent implements OnInit{
    @Input()
    car:Car;

    editMode:Boolean = false;
    errorMsg = '';
    successMsg = '';
    car_reg_id = '';
    constructor(
        private carService : CarService,
        private route : ActivatedRoute,
        private router : Router
    ){}

    ngOnInit(){
        this.route.params.subscribe(p=>{
            this.carService.getCar(p['id']).then(resp => {
                if(resp.status==200){
                    this.car = JSON.parse(resp['_body']);
                }else{
                    this.errorMsg = resp['message'];
                }
            });
        });

        if(CommonUtilsService.flashMessage){
            this.successMsg = CommonUtilsService.flashMessage;
            CommonUtilsService.flashMessage = '';
        }

        this.editMode = window.location.pathname.indexOf('edit')!==-1;
    }

    save(){
        this.carService.saveCar(this.car).then(resp => {
            if(resp.status==200){
                CommonUtilsService.flashMessage = 'Car details updated successfully!';
                this.router.navigate(['/car/view/'+this.car.car_reg_id]);
            }else{
                this.errorMsg = resp['message'];
            }
        });
        return false;
    }
}