import { Component, Input } from '@angular/core';
import { Passengers } from '../../Interfaces/Passengers.interface';
import { Baggage } from '../../Interfaces/baggage.interface';

@Component({
    selector: 'app-pass-form',
    templateUrl: './passengers-form.component.html',
    styleUrls: ['passengers-form.component.scss']
})
export class PassengersFormsComponent {

    @Input()
    detail: Passengers;

    baggage: Baggage[] = [
        {
            key: 'None',
            value: 'No value'
        },
        {
            key: 'Hand-only',
            value: 'Hand Baggage'
        },
        {
            key: 'Hand-only',
            value: 'Rolling Baggage'
        },
    ];

    constructor() { }
    toggleCheckIn(event: boolean) {
        if (event) {
            console.log(event);
            this.detail.checkInDate = Date.now();
        }
    }
}
