import {Injectable} from "@angular/core";
import {Onboarding} from "../models/onboarding";

@Injectable()
export class OnboardingService{
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

    addCarToOnboarding(onboarding : Onboarding, carId : Number){
        this.onboardings = this.onboardings.filter(c=>c.id!==onboarding.id);
        let ob = onboarding;
        ob.associatedCarId = carId;
        this.createOnboarding(ob);
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
}