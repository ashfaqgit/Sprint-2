import { Component, OnInit } from '@angular/core';
import {DiagnosisService} from '../diagnosis.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewtests',
  templateUrl: './viewtests.component.html',
  styleUrls: ['./viewtests.component.css']
})
export class ViewtestsComponent implements OnInit {

  errorMsg:string;
  centreId:string;
  tests:any=[];
  constructor(private diagnosisService:DiagnosisService, private route:ActivatedRoute) {}

  ngOnInit(){

          this.route.paramMap.subscribe(
            params=>{this.centreId= params.get("cid");
             this.diagnosisService.viewTests(this.centreId).subscribe(
                      data=>{this.tests= data;console.log(data);this.errorMsg=undefined},
                      error=>{this.errorMsg= error.error.message;console.log(error);}
          );}
       
);
}

}
