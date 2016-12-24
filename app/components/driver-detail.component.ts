import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {Driver} from "../models/driver";
import {DriverService} from "../services/driver.service";

@Component({
    selector: 'driver-detail',
    template : `
         <div *ngIf="driver">
            <div class="panel panel-primary">
                <div class="panel-heading">{{driver.name}}</div>
                <table class="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>{{driver.id}}</td>
                        </tr>
                        <tr>
                            <td>Name  </td>
                            <td [hidden]="editMode">{{driver.name}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.name}}" /></td>
                        </tr>
                        <tr>
                            <td>Address  </td>
                            <td [hidden]="editMode">{{driver.address}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.address}}" /></td>
                        </tr>
                        <tr>
                            <td>License Number  </td>
                            <td [hidden]="editMode">{{driver.licenceNumber}}</td>
                            <td [hidden]="!editMode"><input class="form-control" type="text" value="{{driver.licenceNumber}}" /></td>
                        </tr>
                        <tr>
                            <td>Assigned  </td>
                            <td [hidden]="editMode">{{driver.isAssigned}}</td>
                            <td [hidden]="!editMode">
                                <label class="radio-inline"><input type="radio" name="isAssigned" value="true" [checked]="driver.isAssigned">Yes</label>
                                <label class="radio-inline"><input type="radio" name="isAssigned" value="false" [checked]="!driver.isAssigned">No</label>
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
    constructor(
        private driverService : DriverService,
        private route : ActivatedRoute,
        private router : Router
    ){}

    ngOnInit(): void{
        this.route.params.subscribe(p=>this.driver=this.driverService.getDriver(+p['id']));
        this.editMode = window.location.pathname.indexOf('edit')!==-1;
    }

    save(){
        this.driverService.saveDriver(this.driver); //not working, change to two way binding
        this.router.navigate(['/driver/list']);
        return false;
    }
}