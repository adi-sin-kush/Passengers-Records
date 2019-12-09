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
import { PassengersFormsComponent } from './components/passengers-form/passengers-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'passenger',
        children: [
            {
                path: '',
                component: PassengersDashboardComponent
            },
            {
                path: ':id',
                component: PassengerViewerComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        PassengersDashboardComponent,
        PassengersCountComponent,
        PassengersDetailsComponent,
        SearchComponent,
        PassengerViewerComponent,
        PassengersFormsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        PassengersDashboardComponent,
        PassengerViewerComponent
    ],
    providers: [
        PassengersDashBoardService
    ]
})
export class PassengersDashboardModule { }
