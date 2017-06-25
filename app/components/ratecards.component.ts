import {Component, OnInit} from "@angular/core";
import {RatecardService} from "../services/ratecard.service";
import {Ratecard} from "../models/ratecard";

@Component({
    moduleId : module.id,
    selector: 'ratecards',
    templateUrl : '../templates/ratecards.component.html'
})

export class RatecardsComponent implements OnInit {
    ratecards: Ratecard[];

    constructor(private ratecardService: RatecardService) {}

    getRatecards(): void {
        this.ratecardService.getRatecards().then(resp => {
            if(resp.status==200){
                this.ratecards = JSON.parse(resp['_body']);
            }
        });
    }

    ngOnInit(): void {
        this.getRatecards();
    }
}