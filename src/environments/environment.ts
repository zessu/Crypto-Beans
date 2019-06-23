// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { Crypto } from '../app/types/crpyto';


const constructUrl = (url: string, currency: string) => {
  return `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${url}&tsyms=${currency}&api_key=${environment.apiKey}`
}

export const environment = {
  production: false,
  apiKey: 'eb69a41495871dafd40fc4094ed84d14bd219fbc0dcffc9923813e2f69f0c2f1', // LOLZZ XOXO :P
  apiUrl: constructUrl
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
