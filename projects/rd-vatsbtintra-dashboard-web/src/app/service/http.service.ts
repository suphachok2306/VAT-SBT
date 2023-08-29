import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryStringUtils } from 'projects/rd-vatsbtintra-lib/src/lib/shared/query-string-util';
import { map } from 'rxjs/operators';
import { ResponseReqUserOauth } from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _userOauthUrl = 'https://vsintra.pccth.com/rd-user-oauth-service';
  private _vatsbtdeUrl = 'https://vsdataentry.pccth.com/rd-vatsbtde-dln-service';

  constructor(
    private http: HttpClient
  ) { }

  public validateToken(_tokenId: string, _userId: string) {
    const req = { tokenId: _tokenId, userId: _userId };
    return this.http.post<ResponseReqUserOauth>(`${this._userOauthUrl}/oauth/validateToken${QueryStringUtils.get(req)}`, null).pipe(map(res => res.responseData));
  }
}
