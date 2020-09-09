import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ViewslotComponent } from './viewslot/viewslot.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ViewcentreComponent } from './viewcentre/viewcentre.component';
import { ViewtestsComponent } from './viewtests/viewtests.component';
import { SearchcentrePipe } from './searchcentre.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ViewAppointmentComponent, ViewslotComponent,
     AddAppointmentComponent, ViewcentreComponent,
      ViewtestsComponent, SearchcentrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
