import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'thaiDate'
})
export class ThaiDatePipe implements PipeTransform {

  transform(value: string, format: string): string {
  
    if(value == '' || value == null){
      return null;
    }else{
      let returnDate:string;
      if(format == 'DD/MM/YYYY'){
        returnDate = moment(value).add(543, 'year').format('DD/MM/YYYY');
      }
      return returnDate;
    }
  }

}
