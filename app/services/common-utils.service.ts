import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Request, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class CommonUtilsService{
    /* id mapping for plan types from db */
    static rateCardTypes = {
        'INTERNORM' : 1,
        'INTRANORM' : 2,
        'INTERRENTAL' : 3,
        'INTRARENTAL' : 4,
        'FLATFEES' : 5
    };

    apiUrl = 'http://13.126.9.157:8080/';
    //apiUrl = 'http://192.168.15.110:8080/';
    static timeHours = ['00','01','02','03','04','05','06','07','08','09','10','11','12'];
    static carParentCategories = ['Hatchback', 'Sedan', 'SMUV', 'Luxury'];
    sessionData = {};
    static flashMessage = '';

    ajax(url, data, method) {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        headers.append("Accept", 'application/json');

        var requestoptions = new RequestOptions({
            method: method,
            url: url,
            headers: headers,
            body: JSON.stringify(data)
        });

        return this.http.request(new Request(requestoptions))
            .toPromise()
            .then(response=> response)
            .catch(this.handleError);
    }

    setSessionData(key,value){
        this.sessionData[key]=value;
    }

    private handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.resolve(error);
    }

    constructor(private http:Http){}

}