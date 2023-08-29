const INTER_URL = 'https://vsintra-uat.rd.go.th/';
const INTRA_URL = 'https://vsintra-uat.rd.go.th/';
// const INTER_URL = 'https://10.5.34.7/';
// const INTRA_URL = 'https://10.5.34.7/';

export const environment = {
  production: false,
  uat: true,
  env: 'uat',

  vat: 'VATDESIT',
  sbt: 'SBTDESIT',
  interUrl: INTER_URL,
  intraUrl: INTRA_URL,
  rdUserOauthServiceUrl: INTRA_URL + 'rd-user-oauth-service',
  nidServiceUrl: INTRA_URL + 'rd-nid-service',
  comMonUrl: INTRA_URL + 'rd-common-service',
  rdVBtbUrl: INTRA_URL + 'rd-vatsbtintra-change-service',
};
