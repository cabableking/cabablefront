import {Car} from "../models/car";
let demoCars = [];
for(let i=0;i<20;i++){
    demoCars.push({
        id : i,
        registrationNumber : 'KA03 HX 46'+i,
        model : 'Model '+i,
        associatedDeviceId : i,
        associatedDriverId : i,
        capacity : i%4,
        year : '198'+i,
        color : 'black',
        category : 'Ask',
        operatorId : i,
        make : 'Ask',
        hasAC : i%2==0?true:false,
        isAssigned : false,
        statesPermitMap : i

    });
}
export const CARS: Car[] = demoCars;