import {Injectable} from '@angular/core';
import {Onboarding} from "../models/onboarding";
import {CommonUtilsService} from "./common-utils.service";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Injectable()
export class OnboardingService{

    constructor(
        private commonUtilsService : CommonUtilsService,
        private cookieService : CookieService
    ){}
    getOnboardings(){
        var url = this.commonUtilsService.apiUrl + 'onboarding/getAll/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    getOnboarding(onboarding_reg_id){
        var url = this.commonUtilsService.apiUrl + 'onboarding/get/?access_token='+
            this.cookieService.get('access_token') + '&onboarding_reg_id='+onboarding_reg_id;
        return this.commonUtilsService.ajax(url, {},'GET');
    }

    createOnboarding(onboarding:Onboarding){
        var url = this.commonUtilsService.apiUrl + 'relationship/startonboarding/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, onboarding,'PUT');
    }

    saveOnboarding(params){
        var url = this.commonUtilsService.apiUrl + 'relationship/update/?access_token='+this.cookieService.get('access_token');
        return this.commonUtilsService.ajax(url, params,'POST');
    }

    deleteOnboarding(onboarding_reg_id){
        var url = this.commonUtilsService.apiUrl + 'onboarding/delete/?access_token='+
            this.cookieService.get('access_token')+'&onboarding_reg_id='+onboarding_reg_id;
        return this.commonUtilsService.ajax(url, {},'DELETE');
    }

    /*addDeviceToOnboarding(onboarding : Onboarding, imei : String){
        this.onboardings = this.onboardings.filter(c=>c.id!==onboarding.id);
        let ob = onboarding;
        ob.associatedDeviceId = deviceId;
        this.createOnboarding(ob);
    }*/


    /*

    //onboardingStatus = {'NOT_INITIATED' : 0, INITIATED : 1, COMPLETED : 2};
    onboardings : Onboarding[] = [];
    getOnboardings(){
        return this.onboardings;
    }

    getOnboarding(id:Number){
        return this.onboardings.find(c=> c.id===id);
    }

    createOnboarding(onboarding:Onboarding){
        this.onboardings.push(onboarding);
    }

    saveOnboarding(onboarding:Onboarding){
        this.onboardings = this.onboardings.filter(c=>c.id!==onboarding.id);
        this.createOnboarding(onboarding);
    }

    addDeviceToOnboarding(onboarding : Onboarding, deviceId : Number){
        this.onboardings = this.onboardings.filter(c=>c.id!==onboarding.id);
        let ob = onboarding;
        ob.associatedDeviceId = deviceId;
        this.createOnboarding(ob);
    }

    addDriverToOnboarding(onboarding : Onboarding, driverId : Number){
        this.onboardings = this.onboardings.filter(c=>c.id!==onboarding.id);
        let ob = onboarding;
        ob.associatedDriverId = driverId;
        this.createOnboarding(ob);
    }

    addCarToOnboarding(onboarding : Onboarding, carId : Number){
        this.onboardings = this.onboardings.filter(c=>c.id!==onboarding.id);
        let ob = onboarding;
        ob.associatedCarId = carId;
        this.createOnboarding(ob);
    }

    addRatecardToOnboarding(onboarding : Onboarding, ratecardId : Number){
        this.onboardings = this.onboardings.filter(c=>c.id!==onboarding.id);
        let ob = onboarding;
        ob.associatedRatecardId = ratecardId;
        this.createOnboarding(ob);
    }

    */


}