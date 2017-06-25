import {Injectable} from "@angular/core";
import {Ratecard} from "../models/ratecard";
import {CommonUtilsService} from "./common-utils.service";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Injectable()
export class RatecardService{
    constructor(
        private commonUtilsService : CommonUtilsService,
        private cookieService : CookieService
    ){}


    /**
     * returns all the rate card fields for selected rateCardType/plan name
     */
    getRatecardFields(rateCardType){
        var url = this.commonUtilsService.apiUrl + 'ratecard/plans/?access_token='+this.cookieService.get('access_token')+'&plantype='+rateCardType;
        return this.commonUtilsService.ajax(url, {},'GET');
    }



    getPlans(){
        var url = this.commonUtilsService.apiUrl + 'ratecard/plans/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, {},'GET');
    }


    /**
     * return all the plan names or rate card types available in db :
     * [INTERNORM | INTRANORM | INTERRENTAL | INTRARENTAL | FLATFEES]
     */
    getPlanNames(){
        var url = this.commonUtilsService.apiUrl + 'ratecard/plannames/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    getRatecards(){
        var url = this.commonUtilsService.apiUrl + 'ratecard/get/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    getRatecard(ratecard_license_no){
        var url = this.commonUtilsService.apiUrl + 'ratecard/get/?access_token='+
            this.cookieService.get('access_token') + '&ratecard_license_no='+ratecard_license_no;
        return this.commonUtilsService.ajax(url, {},'GET');
    }


    createRatecard(ratecard:Ratecard, selectedFields, selectedRateCardType : string){
        var dataToSend = {name : ratecard.name, cardMap : {}};
        var rateCardKeys = Object.keys(ratecard);
        for(var i=0;i<rateCardKeys.length;i++){
            if(selectedFields.indexOf(rateCardKeys[i].toLowerCase())!==-1){
                dataToSend.cardMap[rateCardKeys[i]] = ratecard[rateCardKeys[i]];
            }
        }
        dataToSend['plan_id'] = CommonUtilsService.rateCardTypes[selectedRateCardType];
        var url = this.commonUtilsService.apiUrl + 'ratecard/create/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, dataToSend,'POST');
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