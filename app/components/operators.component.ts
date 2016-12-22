import {Component, OnInit} from "@angular/core";
import {Operator} from "../models/operator";
import {Location} from '@angular/common';
import {OperatorService} from "../services/operator.service";

@Component({
    moduleId : module.id,
    selector : 'operators',
    templateUrl : '../templates/operators.component.html'
})

export class OperatorsComponent implements OnInit{
    operators : Operator[];
    constructor(private operatorService:OperatorService,private location : Location){}
    getOperators(){
        this.operators = this.operatorService.getOperators();
    }

    goBack():void{
        this.location.back();
    }

    ngOnInit(){
        this.getOperators();
    }
}