export interface ResponseReq<T> {
  responseData: T;
  responseError: ResponseError;
  responseStatus: string;
}

export interface ResponseError {
  errorDescription: string;
  errorResolve: string;
  errorTitle: string;
}

export interface ResponseReqPP01<T> {
  responseCode: string;
  responseData: ResponseData<T>;
  responseMessage: string;
  responseStatus: string;
}

export interface ResponseData<T> {
  systemId: string;
  data: T;
}

export interface ResponseReqPP01Save {
  responseCode: string;
  responseData: ResponseDataSave;
  responseMessage: string;
  responseStatus: string;
}

export interface ResponseDataSave {
  statusCode: string;
  statusMessage: string;
}
export interface TaxpayerNameInformation {
  titleCode: string;
  firstName: string;
  lastName: string;
  sexType: string;
  homeOfficeCode?: any;
}

export interface CurrentAddressInformation {
  buildingName: string;
  roomIdentifier: string;
  floorIdentifier: string;
  villageName: string;
  entranceIdentifier: string;
  mooIdentifier: string;
  soiName: string;
  streetName: string;
  subDistrictCode: string;
  districtCode: string;
  provinceCode: string;
  postalCode: string;
  telephoneIdentifier: string;
  unitIdentifier: string;
  addressNumber?: any;
  apartmentNumber?: any;
  building?: any;
  floorNumber?: any;
  roomNumber?: any;
  block?: any;
  street?: any;
  city?: any;
  postCode?: any;
  state?: any;
  countryCode?: any;
}

export interface LtoInformation {
  statusCode: string;
}

export interface ImportantDocumentInformation {
  issueCountryCode: string;
  issueDate: string;
  issueOrganizationName: string;
  nationalityCode: string;
  typeCode: string;
  identifier?: any;
}

export interface TaxpayerInfoResponse {
  tin: string;
  refid: string;
  branchIdentifier: string;
  sbtStatus: string;
  taxpayerStatusCode: string;
  tinDormantReason?: any;
  vatStatus: string;
  taxpayerNameInformation: TaxpayerNameInformation;
  currentAddressInformation: CurrentAddressInformation;
  ltoInformation: LtoInformation;
  importantDocumentInformation: ImportantDocumentInformation;
  juristicInformation?: any;
}

export interface TitleResponse {
  titleCode: string;
  titleName: string;
}

export interface SubDistrictCode {
  subDistrictCode: string;
  subDistrict: string;
  districtCode: string;
  district: string;
  provinceCode: string;
  province: string;
  postCodeList: { postCode: string }[];
}

export interface BusType {
  busTypeSeq: string;
  busTypeCode: string;
  goodsTypeCode: string;
  goodsTypeDesc: string;
}

export interface GoodTypeResponse {
  goodTypeCode: string;
  goodTypeDesc: string;
}
export interface SaveTaxpayerReq {
  approveDate: string;
  approveFlag: string;
  batDate: string;
  batNo: string;
  batSequence: string;
  busStartDate: string;
  busType: string;
  comCode: string;
  corfor: string;
  correc: string;
  currentAddressInformation: CurrentAddressInformation;
  deuserid: string;
  dln: string;
  forStatus: string;
  formCode: string;
  headOfficeInformation: HeadOfficeInformation;
  homeOfficeCode: string;
  incomeAmt: number;
  loginoffcod: string;
  ltoStatus: string;
  ltoflg: string;
  nid: string;
  offCode: string;
  pin: string;
  prodate: string;
  status: string;
  supType: string;
  uid: string;
}
export interface CurrentAddressInformation {
  buildingName: string;
  districtCode: string;
  entranceIdentifier: string;
  floorIdentifier: string;
  mooIdentifier: string;
  postalCode: string;
  provinceCode: string;
  roomIdentifier: string;
  soiName: string;
  streetName: string;
  subDistrictCode: string;
  telephoneIdentifier: string;
  villageName: string;
  yaek: string;
}
export interface HeadOfficeInformation {
  addrNo: string;
  alley: string;
  branchName: string;
  branchNo: string;
  buildingName: string;
  correc: string;
  districtCode: string;
  email: string;
  floorNo: string;
  mooNo: string;
  officeOther: string;
  officeType: string;
  postCode: string;
  provinceCode: string;
  roomNo: string;
  street: string;
  subDistrictCode: string;
  telNo: string;
  titleCode: string;
  villageName: string;
  yaek: string;
}
export interface BusinessTypeList {
  busTypeCode: string;
  busTypeSeq: number;
  correc: string;
  goodsTypeCode: string;
}
export interface SaveBusTypeReq {
  approveDate: string;
  batDate: string;
  batNo: string;
  batSequence: string;
  busStartDate: string;
  busType: string;
  businessTypeList: BusinessTypeList[];
  capitalAmt: number;
  comCode: string;
  dln: string;
  forStatus: string;
  formCode: string;
  homeOfficeCode: string;
  incomeAmt: number;
  ltoStatus: string;
  offCode: string;
  supType: string;
}
export interface SaveBranchReq {
  batDate: string;
  batNo: string;
  batSequence: string;
  branchAmt: number;
  branchList: BranchList[];
  comCode: string;
  dln: string;
  forStatus: string;
  formCode: string;
  homeOfficeCode: string;
  ltoStatus: string;
  offCode: string;
  supType: string;
}
export interface BranchList {
  addrNo: string;
  alley: string;
  branchName: string;
  branchNo: string;
  buildingName: string;
  correc: string;
  districtCode: string;
  email: string;
  floorNo: string;
  mooNo: string;
  officeOther: string;
  officeType: string;
  postCode: string;
  provinceCode: string;
  roomNo: string;
  street: string;
  subDistrictCode: string;
  telNo: string;
  titleCode: string;
  villageName: string;
  yaek: string;
}
export interface SavePP01Req {
  batDate: string;
  batNo: string;
  batSequence: string;
  branchAmt: number;
  branchList: BranchList[];
  busStartDate: string;
  busType: string;
  businessTypeList: BusinessTypeList[];
  capitalAmt: number;
  comCode: string;
  currentAddressInformation: CurrentAddressInformation;
  dln: string;
  forStatus: string;
  formCode: string;
  headOfficeInformation: HeadOfficeInformation;
  homeOfficeCode: string;
  incomeAmt: number;
  ltoStatus: string;
  nid: string;
  offCode: string;
  status: string;
  supType: string;
  uid: string;
}
export interface UpdateBranchByBranchNoReq {
  addrNo: string;
  alley: string;
  branchName: string;
  branchNo: string;
  buildingName: string;
  districtCode: string;
  dln: string;
  email: string;
  floorNo: string;
  mooNo: string;
  officeOther: string;
  officeType: string;
  postCode: string;
  provinceCode: string;
  roomNo: string;
  street: string;
  subDistrictCode: string;
  telNo: string;
  titleCode: string;
  villageName: string;
  yaek: string;
}

export interface formSavePP05Req {
  aprDat: string;
  aprRemark: string;
  aprSta: string;
  braNo: string;
  braPosCod: string;
  braRoomNo: string;
  forSta: string;
  nid: string;
}
