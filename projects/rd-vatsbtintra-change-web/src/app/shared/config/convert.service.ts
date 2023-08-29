import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() { }

  convertThaiDate(date: Date) {
    let data = null;
    if (date) {
      const day = new Date(date).getDate();
      const month = new Date(date).getMonth() + 1;
      const year = new Date(date).getFullYear() + 543;
      data = day + '/' + month + '/' + year;
    }
    return data;
  }
}
