import {Component} from "@angular/core";
import {OperatorService} from "../services/operator.service";
import {Operator} from "../models/operator";
import {Router} from "@angular/router";

@Component({
    selector: 'create-operator',
    template: `
        <div *ngIf="errorMsg">
            <div class="alert alert-danger" role="alert">{{errorMsg}}</div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Create Operator</h3>
          </div>
          <div class="panel-body">
            <form (ngSubmit)="create()">
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" [(ngModel)]="operator.email" name="email" required="required">
                </div>
                <div class="form-group">
                    <label for="address1">Address 1:</label>
                    <input type="text" class="form-control" id="address1" [(ngModel)]="operator.address1" name="address1" required="required">
                </div>
                <div class="form-group">
                    <label for="address2">Address 2:</label>
                    <input type="text" class="form-control" id="address2" [(ngModel)]="operator.address2" name="address2" required="required">
                </div>
                <div class="form-group">
                    <label for="logo">Logo</label>
                    <input type="file" class="form-control" id="logo" (change)="onChange($event)" name="logo">
                </div>
                <div class="form-group">
                    <label for="documents">Documents</label>
                    <input type="file" class="form-control" id="documents" [(ngModel)]="operator.documents" name="documents">
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" class="form-control" id="phone" [(ngModel)]="operator.phoneNumber" name="phone" required="required">
                </div>
                <div class="form-group">
                    <label for="city">City:</label>
                    <input type="text" class="form-control" id="city" [(ngModel)]="operator.city" name="city" required="required">
                </div>
                <div class="form-group">
                    <label for="country">Country:</label>
                    <input type="text" class="form-control" id="country" [(ngModel)]="operator.country" name="country" required="required">
                </div>
                <div class="form-group">
                    <label for="website">Website:</label>
                    <input type="url" class="form-control" id="website" [(ngModel)]="operator.website" name="website" required="required">
                </div>
               
                <button (click)="create()" class="btn btn-default" type="submit">Create</button>
            </form>
          </div>
        </div>
        
    `
})

export class CreateOperatorComponent{
    operator : Operator = {
        email : '',
        address1 : '',
        address2 : '',
        phoneNumber : '',
        logo : '',
        documents : '',
        city : '',
        country : '',
        website : '',
        password : 'password',
        role : 'operator'
    };
    constructor(private operatorService : OperatorService, private _router : Router){}
    create(){
        if(this.operator.email && this.operator.address1 && this.operator.address2 && this.operator.phoneNumber &&
            this.operator.city && this.operator.country && this.operator.website){
            this.operatorService.createOperator(this.operator);
            this._router.navigate(['/operator/list']);
        }
        return false;
    }

    onChange(event){
        var files = event.srcElement.files;
        console.log(files);
    }
}