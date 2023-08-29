const INTER_URL = 'https://vsintra.pccth.com/';
const INTRA_URL = 'https://vsintra.pccth.com/';

export const environment = {
  production: false,
  uat: false,
  sit: true,
  env: 'sit',

  vat: 'VATDESIT',
  sbt: 'SBTDESIT',
  interUrl: INTER_URL,
  intraUrl: INTRA_URL,
  rdUserOauthServiceUrl: INTRA_URL + 'rd-user-oauth-service',
  nidServiceUrl: INTRA_URL + 'rd-nid-service',
  comMonUrl: INTRA_URL + 'rd-common-service',
  rdVBtbUrl: INTRA_URL + 'rd-vatsbtintra-change-service',
};
