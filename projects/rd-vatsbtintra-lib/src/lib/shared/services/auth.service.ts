import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { UserModel, UserService } from './user.service';
import { CommonService } from 'projects/rd-vatsbtintra-dashboard-web/src/app/service/common.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private TOKEN_ID = 'token_id';
  private USER_ID = 'user_id';
  private USER_DETAIL = 'user_detail';
  public isLoggedIn = false;
  public checkSystemId = true;
  public redirectUrl = '/request-form';

  constructor(private http: HttpClient,
              private router: Router,
              private userService: UserService,
              private commonService: CommonService, ) { }

  generateToken(rdUserOauthServiceUrl: string, params: any): Observable<any> {
    if (this.isLoggedIn) {
      return of(true);
    }

    if (params) {
      const urlGenerateToken = `${rdUserOauthServiceUrl}/oauth/generateToken`;
      return this.http.post<ResponseData<ResponseGenerateToken>>(urlGenerateToken, params)
        .pipe(
          mergeMap(response => {
            const urlValidateToken = `${rdUserOauthServiceUrl}/oauth/validateToken?tokenId=${response.responseData.tokenId}&userId=${response.responseData.userId}`;
            return this.http.post<ResponseData<ResponseValidateToken>>(urlValidateToken, null)
              .pipe(
                map(response2 => {
                  this.setSessionStorage(response, response2);
                  this.setUserOnsuccess(this.getTokenId(), this.getUserId(), response2);
                }),
                catchError(error => {
                  this.isLoggedIn = false;
                  return throwError(error);
                }));
          }),
          catchError(error => {
            this.isLoggedIn = false;
            return throwError(error);
          })
        );
    } else {
      return of(false);
    }
  }

  setSessionStorage(response: ResponseData<ResponseGenerateToken>, response2: ResponseData<ResponseValidateToken>): Observable<boolean> {
    if (response && response2 && response2.responseCode === 'OK') {
      sessionStorage.removeItem(this.TOKEN_ID);
      sessionStorage.removeItem(this.USER_ID);

      sessionStorage.setItem(this.TOKEN_ID, response.responseData.tokenId);
      sessionStorage.setItem(this.USER_ID, response.responseData.userId);

      this.userService.setTokenId(response.responseData.tokenId);
      this.userService.setUserId(response.responseData.userId);
      this.userService.setUserModel(response2.responseData);

      this.isLoggedIn = true;
      return of(this.isLoggedIn);
    } else {
      throw throwError(response);
    }
  }

  logOut(): void {
    sessionStorage.removeItem(this.TOKEN_ID);
    sessionStorage.removeItem(this.USER_ID);
  }

  checkAuthen(rdUserOauthServiceUrl: string): Observable<boolean | Observable<boolean>> {
    const tokenId = this.getTokenId();
    const userId = this.getUserId();
    if (tokenId && userId) {
      const url = `${rdUserOauthServiceUrl}/oauth/validateToken?tokenId=${tokenId}&userId=${userId}`;
      return this.http.post<ResponseData<ResponseValidateToken>>(url, null)
        .pipe(
          map(response => {
            if (response.responseCode !== 'OK') {
              return of(false);
            } else {
              this.setUserOnsuccess(tokenId, userId, response);
              this.redirectPage();
              return of(this.isLoggedIn);
            }
          }),
          catchError(() => {
            return of(false);
          }));
    }
    return of(false);
  }

  redirectPage(): void {
    const redirect = this.redirectUrl ? this.redirectUrl : '/';
    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    this.router.navigate([redirect], navigationExtras);
  }

  getTokenId(): string {
    return sessionStorage.getItem(this.TOKEN_ID) || '';
  }

  getUserId(): string {
    return sessionStorage.getItem(this.USER_ID) || '';
  }

  getUserDetail(): UserModel {
    return JSON.parse(sessionStorage.getItem(this.USER_DETAIL) || '');
  }

 setUserOnsuccess(tokenId: string, userId: string, response: any): void{
    this.userService.setTokenId(tokenId);
    this.userService.setUserId(userId);
    this.userService.setUserModel(response.responseData);
    this.commonService.setProfieData({ vat: 'VMN0010001', sbt: 'SMN0010001' });
    this.isLoggedIn = true;
  }
}

export interface ResponseData<T> {
  responseCode: string;
  responseData: T;
}

export interface ResponseGenerateToken {
  userId: string;
  tokenId: string;
}

export interface ResponseValidateToken {
  systemId: string;
  systemName: string;
  systemTransactions: SystemTransaction[];
  systemUserGroup: string[];
  systemLocationGroup: string;
  userId: string;
  userFullName: string;
  userRdOfficeCode?: any;
  userOfficeCode: string;
  clientLocation: string;
  locationMachineNumber: string;
  tokenId: string;
}
export interface SystemTransaction {
  transaction: string;
  systemPrivileges: string[];
}

