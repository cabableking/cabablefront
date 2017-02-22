import {Injectable} from "@angular/core";
import {Ratecard} from "../models/ratecard";
import {CommonUtilsService} from "./common-utils.service";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Injectable()
export class RatecardService{
    ratecards : Ratecard[] = [];
    /*plans = {
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
    };*/

    plans = [];

    constructor(
        private commonUtilsService : CommonUtilsService,
        private cookieService : CookieService
    ){}

    /*getRatecards(){
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
    */

    getRatecardFields(rateCardType){
        var url = this.commonUtilsService.apiUrl + 'ratecard/plans/?access_token='+this.cookieService.get('access_token')+'&plantype='+rateCardType;
        return this.commonUtilsService.ajax(url, {},'GET');
        //return this.plans[rateCardType]['fields'].map(f=>f.field);
    }



    getPlans(){
        var url = this.commonUtilsService.apiUrl + 'ratecard/plans/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    getPlanNames(){
        var url = this.commonUtilsService.apiUrl + 'ratecard/plannames/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    getRatecards(){
        var url = this.commonUtilsService.apiUrl + 'ratecard/getAll/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    getRatecard(ratecard_license_no){
        var url = this.commonUtilsService.apiUrl + 'ratecard/get/?access_token='+
            this.cookieService.get('access_token') + '&ratecard_license_no='+ratecard_license_no;
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    createRatecard(ratecard:Ratecard){
        var url = this.commonUtilsService.apiUrl + 'ratecard/create/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, ratecard,'POST');
    }

    saveRatecard(ratecard:Ratecard){
        var url = this.commonUtilsService.apiUrl + 'ratecard/update/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, ratecard,'POST');
    }

    deleteRatecard(ratecard_license_no){
        var url = this.commonUtilsService.apiUrl + 'ratecard/delete/?access_token='+
            this.cookieService.get('access_token')+'&ratecard_license_no='+ratecard_license_no;
        return this.commonUtilsService.ajax(url, {},'DELETE');
    }
}