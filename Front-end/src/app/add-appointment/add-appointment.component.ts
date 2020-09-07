import { Component, OnInit } from '@angular/core';
import {DiagnosisService} from '../diagnosis.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  msg:string;
  errorMsg:string;

  constructor(private diagnosisService:DiagnosisService, private route:ActivatedRoute) {}

  ngOnInit(){

          this.route.paramMap.subscribe(
            params=>{let slotId= params.get("slotid");
            let userId=params.get("userid");
             this.diagnosisService.makeAppointment(userId,slotId).subscribe(
                      data=>{this.msg= data.message;console.log(data);this.errorMsg=undefined},
                      error=>{this.errorMsg= error.error.message;console.log(error);this.msg=undefined}
          );}
       
);
}


}
