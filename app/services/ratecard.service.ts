import {Injectable} from "@angular/core";
import {Ratecard} from "../models/ratecard";
import {CommonUtilsService} from "./common-utils.service";

@Injectable()
export class RatecardService{
    ratecards : Ratecard[] = [{
        id : 100,
        name : 'Default Rate Card 1',
        type : CommonUtilsService.rateCardTypes.INTERNORM,
        baseFare : '50',
        ratePerKM : '10',
        ratePerMinute: '6',
        inclusiveDistance: '5',
        otherCharges: '0',
        driverDA: '0',
        driverDATimingsFrom: '10',
        driverDATimingsFromAMPM: 'AM',
        driverDATimingsTo: '08',
        driverDATimingsToAMPM: 'PM'
    }];
    getRatecards(){
        return this.ratecards;
    }

    getRatecard(id:Number){
        return this.ratecards.find(c=> c.id===id);
    }

    createRatecard(ratecard:Ratecard){
        this.ratecards.push(ratecard);
    }

    saveRatecard(ratecard:Ratecard){
        this.ratecards = this.ratecards.filter(c=>c.id!==ratecard.id);
        this.createRatecard(ratecard);
    }
}