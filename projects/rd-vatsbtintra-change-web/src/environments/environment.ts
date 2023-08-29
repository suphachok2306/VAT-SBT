// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const INTER_URL = 'https://vsintra.pccth.com/';
const INTRA_URL = 'https://vsintra.pccth.com/';

export const environment = {
  production: false,
  uat: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
