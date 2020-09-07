import { Component, OnInit } from '@angular/core';
import {DiagnosisService} from '../diagnosis.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
contactNo:string;
  errorMsg:string;
   appointments:any=[];
 constructor(private diagnosisService:DiagnosisService, private route:ActivatedRoute) {}
  
ngOnInit(){

          this.route.paramMap.subscribe(
            params=>{let slotId= params.get("slotid");
             this.diagnosisService.viewAppointments(slotId).subscribe(
                      data=>{this.appointments= data;console.log(data);this.errorMsg=undefined},
                      error=>{this.errorMsg= error.error.message;console.log(error);}
          );}
       
);
}
}

