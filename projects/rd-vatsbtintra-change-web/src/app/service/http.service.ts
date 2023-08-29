import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {
  ResponseReq,
  TaxpayerInfoResponse,
} from '../model/response.model';
import { UserModel } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private nidServiceUrl = environment.nidServiceUrl;
  private comMonUrl = environment.comMonUrl;
  private rdVBtbUrl = environment.rdVBtbUrl;
  private jwtHelper: JwtHelperService = new JwtHelperService();
  appr?: string;
  constructor(
    private http: HttpClient
  ) {
  }

  public getDecodeTokenAccessToken(): any {
    const token = sessionStorage.getItem('token_id');
    return this.jwtHelper.decodeToken(token || '')
  }

  public getTaxpayerInfo(_branchId: string, _refid: string, _tin: string, _vatSbtId: string) {
    const req = { branchId: _branchId, refid: _refid, tin: _tin, vatSbtId: _vatSbtId };
    return this.http.post<ResponseReq<TaxpayerInfoResponse>>(`${this.nidServiceUrl}/nid/getTaxpayerInfo`, req).pipe(map(res => res.responseData));
  }

  public getSearchCd01(nid: string, reqOffCod: string, searchStatus: string, appr: string) {
    const params = new HttpParams().set("nid", nid ? nid : '').set("reqOffCode", reqOffCod).set("sendForSta", searchStatus).set("appr", appr);
    return this.http.get<any>(`${this.rdVBtbUrl}/cd01/getSearch?${params.toString()}`);
  }

  public getSearchCh01(oldNid: string, reqOffCod: string, searchStatus: string, appr: string) {
    const params = new HttpParams().set("oldNid", oldNid ? oldNid : '').set("reqOffCod", reqOffCod).set("searchStatus", searchStatus).set("appr", appr);
    return this.http.get<any>(`${this.rdVBtbUrl}/ch01/getSearch?${params.toString()}`);
  }

  public getDisplayCd01(braNo: string, nid: string) {
    const params = new HttpParams().set("braNo", braNo).set("nid", nid);
    return this.http.get<any>(`${this.rdVBtbUrl}/cd01/getDisplay?${params.toString()}`);
  }

  public getDisplayCh01(reqTst: string) {
    const params = new HttpParams().set("reqTst", reqTst);
    return this.http.get<any>(`${this.rdVBtbUrl}/ch01/getDisplay?${params.toString()}`);
  }

  public getTaxpayerInfoPp(_branchId: string, _refid: string, _tin: string, _vatSbtId: string) {
    const req = { branchId: _branchId, refid: _refid, tin: _tin, vatSbtId: _vatSbtId };
    return this.http.post<ResponseReq<TaxpayerInfoResponse>>(`${this.nidServiceUrl}/nid/getTaxpayerInfo`, req).pipe(map(res => res.responseData));
  }

  public saveFormCd01(req: any,) {
    return this.http.post<any>(`${this.rdVBtbUrl}/cd01/saveForm`, req);
  }

  public saveFormCh01(req: any,) {
    return this.http.post<any>(`${this.rdVBtbUrl}/ch01/saveForm`, req);
  }

  public chkForStaCd01(braNo: string, nid: string) {
    const params = new HttpParams().set("braNo", braNo).set("nid", nid);
    return this.http.get<any>(`${this.rdVBtbUrl}/cd01/chkForSta?${params.toString()}`);
  }

  public chkForStaCh01(oldNid: string) {
    const params = new HttpParams().set("oldNid", oldNid);
    return this.http.get<any>(`${this.rdVBtbUrl}/ch01/chkForSta?${params.toString()}`);
  }

  getVATInfoCd01(nid: any) {
    const params = new HttpParams().set("nid", nid);
    return this.http.get<any>(`${this.comMonUrl}/common/vat/getVATInfo?${params.toString()}`);
  }

  getSBTInfoCd01(nid: any) {
    const params = new HttpParams().set("nid", nid);
    return this.http.get<any>(`${this.comMonUrl}/common/sbt/getSBTInfo?${params.toString()}`);
  }

  getVATInfoCh01(nid: any, branchNo: any) {
    const params = new HttpParams().set("branchNo", branchNo).set("nid", nid);
    return this.http.get<any>(`${this.comMonUrl}/common/vat/getVATInfo?${params.toString()}`);
  }

  getSBTInfoCh01(nid: any, branchNo: any) {
    const params = new HttpParams().set("branchNo", branchNo).set("nid", nid);
    return this.http.get<any>(`${this.comMonUrl}/common/sbt/getSBTInfo?${params.toString()}`);
  }

  public getSearchPP05(nid: string, reqOffCod: string, searchStatus: string, appr: string) {
    const params = new HttpParams().set("nid", nid ? nid : '').set("reqOffCod", reqOffCod).set("searchStatus", searchStatus).set("appr", appr);
    return this.http.get<any>(`${this.rdVBtbUrl}/dt01/getSearch?${params.toString()}`);
  }

  public chkForStaPP05(braNo: string, nid: string) {
    const params = new HttpParams().set("braNo", braNo).set("nid", nid);
    return this.http.get<any>(`${this.rdVBtbUrl}/dt01/chkForSta?${params.toString()}`).pipe(map(res => res));
  }

  public getDisplayPP05(regTst: string) {
    const params = new HttpParams().set("regTst", regTst);
    // return this.http.get<any>(`${this._vatdeCd010Service}/dt01/getDisplay?${params.toString()}`, { headers: this._headers }).pipe(map(res => res));
    return this.http.get<any>(`${this.rdVBtbUrl}/dt01/getDisplay?${params.toString()}`).pipe(map(res => res));
  }

  public savePP05TCONCD01(req: object) {
    return this.http.post<any>(`${this.rdVBtbUrl}/dt01/saveForm`, req).pipe(map(res => res));
  }

  public chkForStaRp01(data: any) {
    const params = new HttpParams().set("odlnBatDat", data.odlnBatDat).set("odlnBatNo", data.odlnBatNo).set("odlnBatOffCod", data.odlnBatOffCod).set("odlnBatSeqNo", data.odlnBatSeqNo).set("odlnCompCod", data.odlnCompCod).set("odlnForCod", data.odlnForCod).set("odlnForSta", data.odlnForSta).set("odlnHomOffCod", data.odlnHomOffCod).set("odlnLtoSta", data.odlnLtoSta).set("odlnSubTyp", data.odlnSubTyp);
    return this.http.get<any>(`${this.rdVBtbUrl}/rp01/chkForSta?${params.toString()}`);
  }

  public getDisplayRp01(regTst: string) {
    const params = new HttpParams().set("regTst", regTst);
    return this.http.get<any>(`${this.rdVBtbUrl}/rp01/getDisplay?${params.toString()}`);
  }

  public getSearchRp01(data: any) {
    const params = new HttpParams().set("appr", data.appr).set("odlnBatDat", data.odlnBatDat).set("odlnBatNo", data.odlnBatNo).set("odlnBatOffCod", data.odlnBatOffCod).set("odlnBatSeqNo", data.odlnBatSeqNo).set("odlnCompCod", data.odlnCompCod).set("odlnForCod", data.odlnForCod).set("odlnForSta", data.odlnForSta).set("odlnHomOffCod", data.odlnHomOffCod).set("odlnLtoSta", data.odlnLtoSta).set("odlnSubTyp", data.odlnSubTyp).set("reqOffCod", data.reqOffCod).set("searchStatus", data.searchStatus);
    return this.http.get<any>(`${this.rdVBtbUrl}/rp01/getSearch?${params.toString()}`);
  }

  public saveFormRp01(req: any,) {
    return this.http.post<any>(`${this.rdVBtbUrl}/rp01/saveForm`, req);
  }

  public getCreate(data: any) {
    const params = new HttpParams().set("odlnBatDat", data.odlnBatDat).set("odlnBatNo", data.odlnBatNo).set("odlnBatOffCod", data.odlnBatOffCod).set("odlnBatSeqNo", data.odlnBatSeqNo).set("odlnCompCod", data.odlnCompCod).set("odlnForCod", data.odlnForCod).set("odlnForSta", data.odlnForSta).set("odlnHomOffCod", data.odlnHomOffCod).set("odlnLtoSta", data.odlnLtoSta).set("odlnSubTyp", data.odlnSubTyp);
    return this.http.get<any>(`${this.rdVBtbUrl}/rp01/getCreate?${params.toString()}`);
  }

}
