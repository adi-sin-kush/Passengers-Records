import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PassengersDashBoardService } from '../../passengers-dashboard.service';
import { Passengers } from '../../Interfaces/Passengers.interface';
@Component({
    selector: 'app-pass-viewer',
    templateUrl: './passenger-viewer.component.html',
    styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {

    passenger: Passengers;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: PassengersDashBoardService
        ) { }
    ngOnInit() {
        this.route.params
                    .pipe(
                         switchMap((data: Passengers) => this.service.searchPassengers(data.id))
                    ).subscribe(i => this.passenger = i);
        console.log(this.passenger);
    }
    goBack() {
        this.router.navigate(['/passenger']);
    }

}
