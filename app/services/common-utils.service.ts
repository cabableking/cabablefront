import {Injectable} from "@angular/core";
@Injectable()
export class CommonUtilsService{
    static rateCardTypes = {
        'INTRANORM' : 'INTRANORM',
        'INTRARENTAL' : 'INTRARENTAL',
        'INTERNORM' : 'INTERNORM',
        'INTERRENTAL' : 'INTERRENTAL'
    };

    static timeHours = ['00','01','02','03','04','05','06','07','08','09','10','11','12']

}