import { Injectable } from '@angular/core';
import { ErrorMessageConfig } from '../config/error-message';

@Injectable({
  providedIn: 'root'
})
export class Pp013CommonService {

  constructor() { }

  getErrorMsg(errorCode: string, ...params: string[]) {
    const msg = ErrorMessageConfig[errorCode as keyof typeof ErrorMessageConfig] ?
      errorCode + ' : ' + ErrorMessageConfig[errorCode as keyof typeof ErrorMessageConfig] : errorCode;
    if (params.length > 0) {
      return this.stringFormat(msg, params);
    }
    return msg;
  }

  private stringFormat(str: string, args: string[]) {
    return str.replace(/{(\d+)}/g, (match, varNumber) => {
      return typeof args[varNumber] !== 'undefined' ? args[varNumber] : match;
    });
  }
}
