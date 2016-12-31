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
        this.ratecards = this.ratecardService.getRatecards();
    }

    ngOnInit(): void {
        this.getRatecards();
    }
}