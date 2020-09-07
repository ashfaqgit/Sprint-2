import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {DiagnosisService} from '../diagnosis.service';


@Component({
  selector: 'app-viewslot',
  templateUrl: './viewslot.component.html',
  styleUrls: ['./viewslot.component.css']
})
export class ViewslotComponent implements OnInit {

  slots:any =[]
  adminFlag=false;
  errormsg:string; 
  constructor(private diagnosisService:DiagnosisService,private route:ActivatedRoute) {}
     ngOnInit(){
           /* let token = localStorage.getItem('token');
          if(token != null){
     let role = DiagnosisService.decrypt(token.split("-")[2]);
     if( role ==this.adminFlag)
              this.adminFlag=true;
     else
            this.adminFlag=false;
}*/
         this.route.paramMap.subscribe(params=>{let centreTest= params.get('tid');
         console.log(centreTest);
//let testId=params.get('tid');
    this.diagnosisService.viewSlots(centreTest).subscribe(data=>{console.log(data); this.slots=data;  },
    error =>{console.log(error); this.errormsg=error.error.message; });
});
}

  }
