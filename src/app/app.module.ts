import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PassengersDashboardModule } from './passengers-dashboard/passengers-dashboard.module';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    // custom module
    PassengersDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
