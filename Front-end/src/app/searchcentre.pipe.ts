import { Pipe, PipeTransform } from '@angular/core';
import { Diagnosiscentre } from "./diagnosiscentre";
import {filter} from 'rxjs';

@Pipe({
  name: 'searchcentre'
})
export class SearchcentrePipe implements PipeTransform {

  transform(centres:Diagnosiscentre, searchstr:string):unknown{

    return centres.filter(c=>c.centreName.toLowerCase().includes(searchstr.toLowerCase())||
              c.city.toLowerCase().includes(searchstr.toLowerCase())||
              c.area.toLowerCase().includes(searchstr.toLowerCase() ));
    
  }

}
