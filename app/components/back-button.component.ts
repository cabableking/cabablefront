import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'back-button',
    template : `
         <button class="btn btn-primary" (click)="goBack()">Back</button>
    `
})

export class BackButtonComponent{
    constructor(private location : Location){}

    goBack():void{
        this.location.back();
    }
}