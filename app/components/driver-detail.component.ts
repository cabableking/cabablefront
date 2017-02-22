import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {Driver} from "../models/driver";
import {DriverService} from "../services/driver.service";
import {CommonUtilsService} from "../services/common-utils.service";

@Component({
    selector: 'driver-detail',
    template : `
         <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div *ngIf="successMsg">
            <div class="alert alert-success" role="alert">{{successMsg}}</div>
        </div>
         <div *ngIf="driver">
            <div class="panel panel-primary">
                <div class="panel-heading">{{driver.driver_license_no}}</div>
                <table class="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>License Number  </td>
                            <td>{{driver.driver_license_no}}</td>
                        </tr>
                        <tr>
                            <td>Photo  </td>
                            <td [hidden]="editMode">{{driver.photo}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.photo}}" [(ngModel)]="driver.photo"/></td>
                        </tr>
                        <tr>
                            <td>Age  </td>
                            <td [hidden]="editMode">{{driver.age}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.age}}" [(ngModel)]="driver.age"/></td>
                        </tr>
                        <tr>
                            <td>Created On  </td>
                            <td [hidden]="editMode">{{driver.created_on}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.created_on}}" [(ngModel)]="driver.created_on"/></td>
                        </tr>
                        <tr>
                            <td>First Name  </td>
                            <td [hidden]="editMode">{{driver.first_name}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.first_name}}" [(ngModel)]="driver.first_name"/></td>
                        </tr>
                        <tr>
                            <td>Last Name  </td>
                            <td [hidden]="editMode">{{driver.last_name}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.last_name}}" [(ngModel)]="driver.last_name"/></td>
                        </tr>
                        <tr>
                            <td>License Number  </td>
                            <td [hidden]="editMode">{{driver.driver_license_no}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.driver_license_no}}" [(ngModel)]="driver.driver_license_no"/></td>
                        </tr>
                        <tr>
                            <td>License Photo  </td>
                            <td [hidden]="editMode">{{driver.license_photo}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.license_photo}}" [(ngModel)]="driver.license_photo"/></td>
                        </tr>
                        <tr>
                            <td>Gender  </td>
                            <td [hidden]="editMode">{{driver.gender}}</td>
                            <td [hidden]="!editMode">
                                <label class="radio-inline"><input type="radio" id="gender" name="gender" value="M"  [(ngModel)]="driver.gender">Male</label>
                                <label class="radio-inline"><input type="radio" name="gender" value="F"  [(ngModel)]="driver.gender">Female</label>
                                <label class="radio-inline"><input type="radio" name="gender" value="O"  [(ngModel)]="driver.gender">Others</label>
                            </td>
                        </tr>
                        <tr>
                            <td>Rating  </td>
                            <td [hidden]="editMode">{{driver.rating}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.rating}}" [(ngModel)]="driver.rating"/></td>
                        </tr>
                        <tr>
                            <td>Updated On  </td>
                            <td [hidden]="editMode">{{driver.updated_on}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.updated_on}}" [(ngModel)]="driver.updated_on"/></td>
                        </tr>
                        <tr>
                            <td>Contact Num  </td>
                            <td [hidden]="editMode">{{driver.contact_num}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.contact_num}}" [(ngModel)]="driver.contact_num"/></td>
                        </tr>
                        <tr>
                            <td>Address  </td>
                            <td [hidden]="editMode">{{driver.address}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.address}}" [(ngModel)]="driver.address"/></td>
                        </tr>
                        <tr>
                            <td>Operator Id  </td>
                            <td>{{driver.operator_id}}</td>
                        </tr>
                        <tr>
                            <td>Assigned  </td>
                            <td [hidden]="editMode">{{driver.is_assigned}}</td>
                            <td [hidden]="!editMode">
                                <label class="radio-inline"><input type="radio" name="is_assigned" [value]="true"  [(ngModel)]="driver.is_assigned">Yes</label>
                                <label class="radio-inline"><input type="radio" name="is_assigned" [value]="false"  [(ngModel)]="driver.is_assigned">No</label>
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

export class DriverDetailComponent implements OnInit{
    @Input()
    driver:Driver;

    editMode:Boolean = false;
    errorMsg = '';
    successMsg = '';
    constructor(
        private driverService : DriverService,
        private route : ActivatedRoute,
        private router : Router
    ){}

    ngOnInit(){
        this.route.params.subscribe(p=>{
            this.driverService.getDriver(p['id']).then(resp => {
                if(resp.status==200){
                    this.driver = JSON.parse(resp['_body']);
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
        this.driverService.saveDriver(this.driver).then(resp => {
            if(resp.status==200){
                CommonUtilsService.flashMessage = 'Driver details updated successfully!';
                this.router.navigate(['/driver/view/'+this.driver.driver_license_no]);
            }else{
                this.errorMsg = resp['message'];
            }
        });
        return false;
    }
}