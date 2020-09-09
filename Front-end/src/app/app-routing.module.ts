import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ViewslotComponent } from './viewslot/viewslot.component';
import{ViewcentreComponent} from './viewcentre/viewcentre.component';
import{ViewtestsComponent} from './viewtests/viewtests.component';

const routes: Routes = [

      {path:"addappointment/:slotid/:userid", component:AddAppointmentComponent},
      {path:"getappointment/:slotid",component:ViewAppointmentComponent},
      {path:"viewslots/:tid",component:ViewslotComponent},
      {path:"getcentres",component:ViewcentreComponent},
      {path:"gettests/:cid", component:ViewtestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
