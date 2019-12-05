import { Component, Input } from '@angular/core';
import { Passengers } from '../../Interfaces/Passengers.interface';

@Component({
    selector: 'app-passcount',
    templateUrl: './passengers-count.component.html',
    styleUrls: ['./passengers-count.component.scss']
})
export class PassengersCountComponent {
    @Input()
    items: Passengers[];
    checkInCount(): number {
        if (!this.items) {
            return;
        }
        return this.items.filter((i: Passengers) => i.checkIn).length;
    }
}
