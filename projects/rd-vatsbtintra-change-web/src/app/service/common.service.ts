import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ErrorMessageConfig } from '../shared/config/error-message';
import { SubDistrictCode } from '../model/response.model';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private profieData: Subject<{ vat: string, sbt: string }> = new Subject<{ vat: string, sbt: string }>();
  private _titleList: { titleCode: string, titleName: string }[] = [];
  private _subDistrictCodeList: SubDistrictCode[] = [];

  constructor(
  ) { }

  public getProfieData() { return this.profieData.asObservable(); }
  public setProfieData(value: { vat: string, sbt: string }) { this.profieData.next(value); }

  public get titleList() { return this._titleList; }
  public set titleList(value: { titleCode: string, titleName: string }[]) { this._titleList = value; }

  public get subDistrictCodeList() { return this._subDistrictCodeList; }
  public set subDistrictCodeList(value: SubDistrictCode[]) { this._subDistrictCodeList = value; }

  getErrorMsg(errorCode: string, ...params: string[]) {
    if (params.length > 0) {
      const msg = ErrorMessageConfig[errorCode as keyof typeof ErrorMessageConfig] || errorCode;
      return this.stringFormat(msg, params);
    }
    return ErrorMessageConfig[errorCode as keyof typeof ErrorMessageConfig] || errorCode;
  }

  getDateFormat(date: string) {
    return date.substring(6, 8) + '/' + date.substring(4, 6) + '/' + date.substring(0, 4);
  }

  private stringFormat(str: string, args: string[]) {
    return str.replace(/{(\d+)}/g, (match, number) => {
      return typeof args[number] !== 'undefined' ? args[number] : match;
    });
  }

  getMonthFullName(monthSeq: any) {
    let monthTH = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
    return monthTH[monthSeq - 1];
  }

  getFormatDateTH(date: any) {
    let y = Number(date.substring(0, 4)) + 543;
    return date.substring(8, 10) + '/' + date.substring(5, 7) + '/' + (y);
  }

}
