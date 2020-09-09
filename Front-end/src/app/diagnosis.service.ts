
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DiagnosisConstants } from './diagnosis-constants';
import {Observable} from 'rxjs';
//import {AppointmentForm } from "./appointment-form";

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  constructor(private http: HttpClient){}

       public makeAppointment(userid:string,testslotid:string):Observable<any>{
           
             return this.http.get(DiagnosisConstants.MAKE_APMT_URL+"/"+testslotid+"/"+userid);
            }


     
      public viewAppointments(slotId:string):Observable<any>{
             return this.http.get(DiagnosisConstants.VIEW_APMTS_URL+slotId);
          }


      public viewSlots(centreTest:string):Observable<any>{
          return this.http.get(DiagnosisConstants.VIEW_SLOTS_URL+"/"+centreTest);
       }

      public viewCentres():Observable<any>{

                return this.http.get(DiagnosisConstants.VIEW_CENTRE_URL);
              }
  
       public viewTests(centreId:string):Observable<any>{
            
             return this.http.get(DiagnosisConstants.VIEW_TEST_URL+"/"+centreId);
           }

}
