import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userModel?: UserModel;
  private _tokenId!: string;
  private _userId!: string;

  get userModel(): UserModel {
    if (!this._userModel) {
      this._userModel = new UserModel();
    }

    return this._userModel;
  }

  set userModel(userModel: UserModel) {
    this._userModel = userModel;
  }

  get userId(): string {
    return this._userId;
  }

  get tokenId(): string {
    return this._tokenId;
  }

  setTokenId(tokenId: string) {
    this._tokenId = tokenId;
  }

  setUserId(userId: string) {
    this._userId = userId;
  }

  setUserModel(userModel: any) {
    if (userModel) {
      this.userModel = userModel;
    } else {
      this._userModel = new UserModel();
    }
  }
}

export class UserModel {
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

  constructor() {
    this.systemId = '';
    this.systemName = '';
    this.systemTransactions = [];
    this.systemUserGroup = [];
    this.systemLocationGroup = '';
    this.userId = '';
    this.userFullName = '';
    this.userRdOfficeCode = '';
    this.userOfficeCode = '';
    this.clientLocation = '';
    this.locationMachineNumber = '';
    this.tokenId = '';
  }
}

export class SystemTransaction {
  transaction: string;
  systemPrivileges: string[];

  constructor() {
    this.transaction = '';
    this.systemPrivileges = [];
  }
}
