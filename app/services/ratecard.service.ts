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
        driverDATimingsToAMPM: 'PM',
        airportPickup: '',
        airportDrop: '',
        roundTrip: '',
        ratePerExtraKM: '',
        ragePerWaitMinute: ''
    }];
    plans = {
            "INTERNORM" : {
                "planname":"INTERNORM",
                "fields":[
                    {"field": "baseFare", "desc": "Base Fare", "type": "String"},
                    {"field": "ratePerKM", "desc": "Rate/KM", "type": "String"},
                    {"field": "ratePerMinute", "desc": "Rate/Minute", "type": "String"},
                    {"field": "inclusiveDistance", "desc": "Inclusive Distance", "type": "String"},
                    {"field": "otherCharges", "desc": "Other Charges", "type": "String"},
                    {"field": "driverDA", "desc": "Driver Daily Allowance", "type": "String"},
                    {"field": "driverDATimingsFrom", "desc": "Driver DA Timings (from)", "type": "select"},
                    {"field": "driverDATimingsFromAMPM", "desc": "", "type": "select"},
                    {"field": "driverDATimingsTo", "desc": "Driver DA Timings (to)", "type": "select"},
                    {"field": "driverDATimingsToAMPM", "desc": "", "type": "select"}
                ]
            },
            "INTRANORM" : {
                "planname":"INRANORM",
                "fields":[
                    {"field": "airportPickup", "desc": "Airport Pickup", "type": "String"},
                    {"field": "airportDrop", "desc": "Airport Drop", "type": "String"},
                    {"field": "roundTrip", "desc": "Round Trip", "type": "String"},
                    {"field": "otherCharges", "desc": "Other Charges", "type": "String"},
                    {"field": "inclusiveDistance", "desc": "Inclusive Distance", "type": "String"},
                    {"field": "ratePerExtraKM", "desc": "Rate/Extra KM", "type": "String"},
                    {"field": "ragePerWaitMinute", "desc": "Waiting Charges/minute", "type": "String"}
                ]
            },
            "INTRARENTAL" : {
                "planname":"INRANORM",
                "fields":[
                    {"field": "airportPickup", "desc": "Airport Pickup", "type": "String"},
                    {"field": "airportDrop", "desc": "Airport Drop", "type": "String"},
                    {"field": "roundTrip", "desc": "Round Trip", "type": "String"},
                    {"field": "otherCharges", "desc": "Other Charges", "type": "String"},
                    {"field": "inclusiveDistance", "desc": "Inclusive Distance", "type": "String"},
                    {"field": "ratePerExtraKM", "desc": "Rate/Extra KM", "type": "String"},
                    {"field": "ragePerWaitMinute", "desc": "Waiting Charges/minute", "type": "String"}
                ]
            },
            "INTERRENTAL" : {
                "planname":"INRANORM",
                "fields":[
                    {"field": "airportPickup", "desc": "Airport Pickup", "type": "String"},
                    {"field": "airportDrop", "desc": "Airport Drop", "type": "String"},
                    {"field": "roundTrip", "desc": "Round Trip", "type": "String"},
                    {"field": "otherCharges", "desc": "Other Charges", "type": "String"},
                    {"field": "inclusiveDistance", "desc": "Inclusive Distance", "type": "String"},
                    {"field": "ratePerExtraKM", "desc": "Rate/Extra KM", "type": "String"},
                    {"field": "ragePerWaitMinute", "desc": "Waiting Charges/minute", "type": "String"}
                ]
            }
    };

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

    getRatecardTypes(){
        return Object.keys(this.plans);
    }

    getRatecardFields(rateCardType){
        return this.plans[rateCardType]['fields'].map(f=>f.field);
    }
}