import { Component, OnInit } from '@angular/core';
import { PassengersDashBoardService } from '../passengers-dashboard.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  id: number;
  constructor(private service: PassengersDashBoardService) { }

  ngOnInit() { }

  searchPassenger() {
    this.service.searchPassengers(this.id).subscribe(i => console.log(i), j => console.log('error thrown from service side :-', j.message));
  }

}
