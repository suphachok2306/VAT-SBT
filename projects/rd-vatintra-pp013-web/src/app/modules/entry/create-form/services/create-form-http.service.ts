import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { QueryStringUtils } from 'projects/rd-vatsbtintra-lib/src/lib/shared/query-string-util';

@Injectable({
  providedIn: 'root'
})
export class CreateFormHttpService {

  private _commonServce = 'https://vsintra.pccth.com/rd-common-service';

  constructor(
    private http: HttpClient
  ) { }

  public getVATInfo(_branchNo: string, _nid: string) {
    const req = { branchNo: _branchNo, nid: _nid };
    return this.http.get<any>(`${this._commonServce}/common/vat/getVATInfo${QueryStringUtils.get(req)}`).pipe(map(res => res.responseData));
  }
}
