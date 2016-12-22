import {Injectable} from '@angular/core';
import {Operator} from "../models/operator";

@Injectable()
export class OperatorService{
    operators : Operator[] = [
        {
            email : 'operator1@gmail.com',
            address1 : 'marathahalli',
            address2 : 'bangalore',
            phoneNumber : '9876990099',
            logo : '',
            documents : '',
            city : 'Bengaluru',
            country : 'Karnataka',
            website : 'http://www.izicom.net',
            password : 'password',
            role : 'operator'
        }
    ];
    createOperator(operator:Operator){
        this.operators.push(operator);
        return operator;
    }

    getOperators (){
        return this.operators;
    }

    operatorExists(operator){
        var op = this.operators.find(o=>o.email===operator.email);
        return !!(op && op.password === operator.password);
    }
}