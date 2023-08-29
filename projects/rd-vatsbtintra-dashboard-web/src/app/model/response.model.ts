export interface ResponseReq<T> {
  messageCode: string;
  messageDescription: string;
  responseCode: string;
  responseData: T;
  responseError: ResponseError;
  responseStatus: string;
}

export interface ResponseError {
  errorDescription: string;
  errorResolve: string;
  errorTitle: string;
}

export interface FormCodeList {
  formCodeList: FormCodeListDetail[];
}

export interface FormCodeListDetail {
  formCode: string;
  formCodeMap: string;
  formName: string;
  shortName: string;
}

export interface ResponseReqUserOauth {
  responseCode: string;
  responseData: ResponseData;
}

export interface ResponseData {
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

export interface DlnListResponse {
  numberOfDlns: string;
  bln: string;
  forms: Form[];
}

export interface Form {
  formDetails: FormDetail[];
}
export interface FormDetail {
  uid: string;
  formStatusCode: string;
  dln?: any;
  taxType?: any;
  formCode?: any;
  tin: string;
  nid: string;
  branch?: any;
  ltoStatus?: any;
  homeOfficeCode?: any;
  periodForm?: any;
  periodTo: string;
  taxAmount?: any;
  penaltyAmount?: any;
  surchargeAmount?: any;
  localTaxAmount?: any;
  totalPayAmount?: any;
  refundStatus?: any;
  effectiveDate?: any;
  sequenceNumber: string;
  tempFlag?: any;
}

export interface FormDetailMockup {
  uid: string;
  formStatusCode: string;
  dln?: any;
  taxType?: any;
  formCode?: any;
  tin: string;
  nid: string;
  branch?: any;
  ltoStatus?: any;
  homeOfficeCode?: any;
  periodForm?: any;
  periodTo: string;
  taxAmount?: any;
  penaltyAmount?: any;
  surchargeAmount?: any;
  localTaxAmount?: any;
  totalPayAmount?: any;
  refundStatus?: any;
  effectiveDate?: any;
  sequenceNumber: string;
  tempFlag?: any;
  formStatusCodeMock: string;
  listItem: any[];
}

export interface DlnWaitApproveListResponse {
  blnFormList: BlnFormList[];
}

export interface BlnFormList {
  bln: string;
  numberOfDlns: string;
  numberOfDlnsWarning: string;
  numberOfDlnsComplete: string;
  numberOfDlnsError: string;
}

export interface BlnFormListMockup {
  id: number;
  bln: string;
  numberOfDlns: string;
  numberOfDlnsWarning: string;
  numberOfDlnsComplete: string;
  numberOfDlnsError: string;
}

export interface OfficeCodeList {
  officeCodeList: OfficeCodeListDetail[];
}

export interface OfficeCodeListDetail {
  officdeCode: string;
  officdeName?: string;
}
