import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ErrorMessageConfig } from '../config/error-message';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public tmp = 0;

  private profieData: Subject<{ vat: string, sbt: string }> = new Subject<{ vat: string, sbt: string }>();
  private subjectString: Subject<string> = new Subject<string>();

  constructor() { }

  public getProfieData(): Observable<{vat: string; sbt: string; }> { return this.profieData.asObservable(); }
  public setProfieData(value: { vat: string, sbt: string }): void { this.profieData.next(value); }

  public getSubjectString(): Observable<string>  { return this.subjectString.asObservable(); }
  public setSubjectString(value: string): void { this.subjectString.next(value); }

  getErrorMsg(errorCode: string, ...params: string[]): string {
    if (params.length > 0) {
      const msg = ErrorMessageConfig[errorCode as keyof typeof ErrorMessageConfig] || errorCode;
      return this.stringFormat(msg, params);
    }
    return ErrorMessageConfig[errorCode as keyof typeof ErrorMessageConfig] || errorCode;
  }

  getErrorWithSum(errorMsg1: string, errorMsg2: string): string {
    return errorMsg1 + ': ' + errorMsg2;
  }

  private stringFormat(str: string, args: string[]): string {
    return str.replace(/{(\d+)}/g, (match, num) => {
      return typeof args[num] !== 'undefined' ? args[num] : match;
    });
  }

}
