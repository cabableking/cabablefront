import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {Device} from "../models/device";
import {DeviceService} from "../services/device.service";
import {CommonUtilsService} from "../services/common-utils.service";

@Component({
    selector: 'device-detail',
    template : `
         <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div *ngIf="successMsg">
            <div class="alert alert-success" role="alert">{{successMsg}}</div>
        </div>
         <div *ngIf="device">
            <div class="panel panel-primary">
                <div class="panel-heading">{{device.imei}}</div>
                <table class="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>IMEI  </td>
                            <td>{{device.imei}}</td>
                        </tr>
                        <tr>
                            <td>Make  </td>
                            <td [hidden]="editMode">{{device.device_make}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{device.device_make}}" [(ngModel)]="device.device_make"/></td>
                        </tr>
                        <tr>
                            <td>Model  </td>
                            <td [hidden]="editMode">{{device.device_model}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{device.device_model}}" [(ngModel)]="device.device_model"/></td>
                        </tr>
                        <tr>
                            <td>Operating System Version  </td>
                            <td [hidden]="editMode">{{device.os_version}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{device.os_version}}" [(ngModel)]="device.os_version"/></td>
                        </tr>    
                        <tr>
                            <td>Phone Number  </td>
                            <td [hidden]="editMode">{{device.device_phone_number}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{device.device_phone_number}}" [(ngModel)]="device.device_phone_number"/></td>
                        </tr>
                        <tr>
                            <td>Network Provider  </td>
                            <td [hidden]="editMode">{{device.network_provider}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{device.network_provider}}" [(ngModel)]="device.network_provider"/></td>
                        </tr>
                        <tr>
                            <td>Created On  </td>
                            <td>{{device.created_on}}</td>
                        </tr>
                        <tr>
                            <td>Last Updated On  </td>
                            <td>{{device.last_updated_on}}</td>
                        </tr>
                        <tr>
                            <td>Operator Id  </td>
                            <td>{{device.operator_id}}</td>
                        </tr>
                        <tr>
                            <td>Assigned  </td>
                            <td [hidden]="editMode">{{device.is_assigned}}</td>
                            <td [hidden]="!editMode">
                                <label class="radio-inline"><input type="radio" name="is_assigned" [value]="true"  [(ngModel)]="device.is_assigned">Yes</label>
                                <label class="radio-inline"><input type="radio" name="is_assigned" [value]="false"  [(ngModel)]="device.is_assigned">No</label>
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

export class DeviceDetailComponent implements OnInit{
    @Input()
    device:Device;

    editMode:Boolean = false;
    errorMsg = '';
    successMsg = '';
    constructor(
        private deviceService : DeviceService,
        private route : ActivatedRoute,
        private router : Router
    ){}

    ngOnInit(){
        this.route.params.subscribe(p=>{
            this.deviceService.getDevice(p['id']).then(resp => {
                if(resp.status==200){
                    this.device = JSON.parse(resp['_body']);
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
        this.deviceService.saveDevice(this.device).then(resp => {
            if(resp.status==200){
                CommonUtilsService.flashMessage = 'Device details updated successfully!';
                this.router.navigate(['/device/view/'+this.device.imei]);
            }else{
                this.errorMsg = resp['message'];
            }
        });
        return false;
    }
}