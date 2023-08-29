import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from "projects/rd-vatsbtintra-change-web/src/environments/environment";
import { of, throwError } from "rxjs";
// import { environment } from "@env/environment";
// import * as Config from "./../config/constants";
// import { UserService } from "./user.service";
// import { NotificationValidationMessageService } from "app/shared/services/notification-validation-message.service";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    // private _contextPath = environment.api.defaultContextPath
    // private _url_token = this._contextPath + environment.api.egpCost.url.tokenUtil.createToken
    // private _url_getRefEgpToken = this._contextPath + environment.api.egpCost.url.tokenUtil.getRefEgpToken

    private jwtHelper: JwtHelperService = new JwtHelperService();
    private refreshToken: any
    private refreshTokenTimeout: any

    header = new HttpHeaders()

    constructor(private http: HttpClient,) {
    }

    // getRefEgpToken(egpRefId: string) {
    //     let param = {
    //         egpRefId: egpRefId
    //     }

    //     return this.http.post<any>(this._url_getRefEgpToken, param, {
    //         headers: this.header
    //     }).pipe(map((val: any) => {
    //         return val.data
    //     }))
    // }


    callCreateToken(_body?: any) {
        let param = {}

        if (!_body) {
            param = {
                "deptId": "0304",
                "deptSubId": "0300400000",
                "egpToken": "Guest",
                "loginId": "U01",
                "roleId": "U01",
                "tokenType": "1",
                "firstName": "ยามาโดะ",
                "lastName": "โคอิจิ"
            }
        } else {
            // if (_body.token || _body.egpToken) {
            //     param = {
            //         "deptId": 'dummy',
            //         "deptSubId": 'dummy',
            //         "egpToken": _body.token ? _body.token : _body.egpToken,
            //         "loginId": 'dummy',
            //         "roleId": 'dummy',
            //         "tokenType": '0',
            //         "firstName": 'dummy',
            //         "lastName": 'dummy'
            //     }
            // } else {
            param = {
                "deptId": _body.deptId,
                "deptSubId": _body.deptSubId,
                // "egpToken": _body.token,
                "loginId": _body.loginId,
                "roleId": _body.roleId,
                "tokenType": '1',
                "firstName": _body.firstName,
                "lastName": _body.lastName
            }
            // }
        }

        // return this.http.post<any>(this._url_token, param, {
        //     headers: this.header
        // }).subscribe((response) => {
        //     if (this.setResponse(response)) {
        //         this.startRefreshTokenTimer()
        //     }
        // }, error => {
        //     this.notis.notiMessageError('CALL_TOKEN_ERROR');
        // })
    }

    // private callRefreshToken() {
    //     if (this.checkAccessTokenAndRefreshToken()) {
    //         const token: UserDetailToken = JSON.parse(JSON.stringify(this.getDecodeTokenAccessToken()))

    //         let _body = {
    //             "deptId": token.deptId,
    //             "deptSubId": token.deptSubId,
    //             "egpToken": this.refreshToken,
    //             "loginId": token.loginId,
    //             "roleId": token.roleId,
    //             "tokenType": '1',
    //             "firstName": token.given_name,
    //             "lastName": token.family_name
    //         }

    //         return this.http.post<any>(this._url_token, _body, {
    //             headers: this.header
    //         }).subscribe((response) => {
    //             if (this.setResponse(response)) {
    //                 this.startRefreshTokenTimer()
    //             }
    //         }, error => {
    //             this.notis.notiMessageError('CALL_TOKEN_ERROR');
    //         })
    //     } else {
    //         this.notis.notiMessageError('TOKEN_IS_NOT_MATCH');
    //         return null
    //     }
    // }

    private checkAccessTokenAndRefreshToken() {
        let status: boolean = true
        let accessTokenTemp: UserDetailToken = JSON.parse(JSON.stringify(this.getDecodeTokenAccessToken()))
        let refreshTokenTemp: UserDetailToken = JSON.parse(JSON.stringify(this.getDecodeRafreshTokenAccessToken()))

        if (accessTokenTemp && refreshTokenTemp) {
            if (accessTokenTemp.name !== refreshTokenTemp.name) {
                status = false
            }

            if (accessTokenTemp.deptId !== refreshTokenTemp.deptId) {
                status = false
            }

            if (accessTokenTemp.preferred_username !== refreshTokenTemp.preferred_username) {
                status = false
            }

            if (accessTokenTemp.employeeType !== refreshTokenTemp.employeeType) {
                status = false
            }

            if (accessTokenTemp.deptSubId !== refreshTokenTemp.deptSubId) {
                status = false
            }

            if (accessTokenTemp.loginId !== refreshTokenTemp.loginId) {
                status = false
            }

            if (accessTokenTemp.roleId !== refreshTokenTemp.roleId) {
                status = false
            }

            if (accessTokenTemp.family_name !== refreshTokenTemp.family_name) {
                status = false
            }

            if (accessTokenTemp.given_name !== refreshTokenTemp.given_name) {
                status = false
            }
        } else {
            status = false
        }

        return status
    }


    // private startRefreshTokenTimer() {
    //     this.refreshTokenTimeout = this.timeoutRefreshToken()
    // }


    // private timeoutRefreshToken() {
    //     return setTimeout(() => { this.callRefreshToken() }, (60000 * 20));
    // }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }


    // private setResponse(response: any) {
    //     let accessTokenResp = response.data.costAccessToken
    //     let refreshTokenResp = response.data.costRefreshToken

    //     if (accessTokenResp && refreshTokenResp) {

    //         sessionStorage.removeItem(Config.ACCESS_TOKEN_KEY);

    //         sessionStorage.setItem(Config.ACCESS_TOKEN_KEY, accessTokenResp.toString());
    //         this.refreshToken = refreshTokenResp

    //         const userDetailToken: UserDetailToken = this.jwtHelper.decodeToken(accessTokenResp)
    //         this.userService.$userDetailObsver = of(userDetailToken)

    //         return true
    //     } else {
    //         throw throwError(response.response.description);
    //     }
    // }

    private getDecodeTokenAccessToken(): any {
        return this.jwtHelper.decodeToken(JSON.stringify(sessionStorage.getItem('token_id')))
    }

    private getDecodeRafreshTokenAccessToken() {
        return this.jwtHelper.decodeToken(this.refreshToken)
    }

    getRafreshTokenAccessToken() {
        return this.refreshToken
    }
}

export interface UserDetailToken {
    refId?: string;
    loginId?: string;
    employeeType?: string;
    name?: string;
    deptId?: string;
    deptSubId?: string;
    preferred_username?: string;
    given_name?: string;
    family_name?: string;
    roleId?: string;
    roleName?: string;
    sub?: string;
    iat?: number;
    exp?: number;
}