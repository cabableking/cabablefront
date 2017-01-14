import {Injectable, EventEmitter} from "@angular/core";
@Injectable()
export class EventEmitterService{
    public showNavBar : EventEmitter<boolean> = new EventEmitter();
    public loginPage : EventEmitter<boolean> = new EventEmitter();
}