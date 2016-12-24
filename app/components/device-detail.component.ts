import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {Device} from "../models/device";
import {DeviceService} from "../services/device.service";

@Component({
    selector: 'device-detail',
    template : `
         <div *ngIf="device">
            <div class="panel panel-primary">
                <div class="panel-heading">{{device.imei}}</div>
                <table class="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>{{device.id}}</td>
                        </tr>
                        <tr>
                            <td>IMEI  </td>
                            <td [hidden]="editMode">{{device.imei}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{device.imei}}" /></td>
                        </tr>
                        <tr>
                            <td>Model  </td>
                            <td [hidden]="editMode">{{device.model}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{device.model}}" /></td>
                        </tr>
                        <tr>
                            <td>Assigned  </td>
                            <td [hidden]="editMode">{{device.isAssigned}}</td>
                            <td [hidden]="!editMode">
                                <label class="radio-inline"><input type="radio" name="isAssigned" value="true" [checked]="device.isAssigned">Yes</label>
                                <label class="radio-inline"><input type="radio" name="isAssigned" value="false" [checked]="!device.isAssigned">No</label>
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
    constructor(
        private deviceService : DeviceService,
        private route : ActivatedRoute,
        private router : Router
    ){}

    ngOnInit(): void{
        this.route.params.subscribe(p=>this.device=this.deviceService.getDevice(+p['id']));
        this.editMode = window.location.pathname.indexOf('edit')!==-1;
    }

    save(){
        this.deviceService.saveDevice(this.device); //not working, change to two way binding
        this.router.navigate(['/device/list']);
        return false;
    }
}