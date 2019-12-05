import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengersDashboardModule } from './passengers-dashboard/passengers-dashboard.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // custom module
    PassengersDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
