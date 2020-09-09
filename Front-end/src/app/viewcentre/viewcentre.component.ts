import { Component, OnInit } from '@angular/core';
import {DiagnosisService} from '../diagnosis.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewcentre',
  templateUrl: './viewcentre.component.html',
  styleUrls: ['./viewcentre.component.css']
})
export class ViewcentreComponent implements OnInit {

  searchstr:string;
  errorMsg:string;
  centres:any=[];
  constructor(private diagnosisService:DiagnosisService, private route:ActivatedRoute) {}

  ngOnInit(){

        
             this.diagnosisService.viewCentres().subscribe(
                      data=>{this.centres= data;console.log(data);this.errorMsg=undefined},
                      error=>{this.errorMsg= error.error.message;console.log(error);}
          );}
}


