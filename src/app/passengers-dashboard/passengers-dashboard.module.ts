import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PassengersDashboardComponent } from './container/passenger-dashboard/passengers-dashboard.component';
import { PassengersCountComponent } from './components/passengers-count/passengers-count.component';
import { PassengersDetailsComponent } from './components/passengers-details/passengers-details.component';
import { PassengersDashBoardService } from './passengers-dashboard.service';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { PassengerViewerComponent } from './container/passenger-viewer/passenger-viewer.component';

@NgModule({
    declarations: [
        PassengersDashboardComponent,
        PassengersCountComponent,
        PassengersDetailsComponent,
        SearchComponent,
        PassengerViewerComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [
        PassengersDashboardComponent
    ],
    providers: [
        PassengersDashBoardService
    ]
})
export class PassengersDashboardModule { }
