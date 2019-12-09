import { Component, OnInit } from '@angular/core';
import { Passengers } from '../../Interfaces/Passengers.interface';
import { PassengersDashBoardService } from '../../passengers-dashboard.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-pasdash',
    templateUrl: './passengers-dashboard.component.html',
    styleUrls: ['./passengers-dashboard.component.scss']
})
export class PassengersDashboardComponent implements OnInit {

    passengers: Passengers[];
    constructor(private router: Router, private service: PassengersDashBoardService) {
        console.log('constructor called');
     }
    ngOnInit() {
        console.log('ngOnInit called');
        this.service.getPassengers().subscribe(i => this.passengers = i);
    }
    handleRm(event) {
        console.log(event);
        this.passengers = this.passengers.filter(i => i.id !== event.id);
    }
    handleEd(event) {
        this.service.updatePassengers(event).subscribe(i => console.log('udpated'));
        this.passengers = this.passengers.map((passenger: Passengers) => {
            if (passenger.id === event.id) {
                passenger = Object.assign({}, passenger, event);
            }
            return passenger;
        });
        console.log('updated data ', this.passengers);
    }
    handleView(event) {
        this.router.navigate(['/passenger', event.id]);
    }
}
