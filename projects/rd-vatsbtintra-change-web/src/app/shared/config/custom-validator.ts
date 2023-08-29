import { Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { isEmpty } from 'rxjs/operators';
export class CustomValidator {

   // Validates URL
   static urlValidator(url: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (url.pristine) {
         return null;
      }

      // tslint:disable-next-line:max-line-length
      const URL_REGEXP = /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

      url.markAsTouched();
      if (URL_REGEXP.test(url.value)) {
         return null;
      }

      return {
         invalidUrl: true
      };
   }

   // Validates passwords
   static matchPassword(group: { controls: { password: any; confirm: any; }; markAsTouched: () => void; }): any {
      const password = group.controls.password;
      const confirm = group.controls.confirm;

      if (password.pristine || confirm.pristine) {
         return null;
      }

      group.markAsTouched();

      if (password.value === confirm.value) {
         return null;
      }

      return {
         invalidPassword: true
      };
   }

   // Validates numbers
   // tslint:disable-next-line:variable-name
   static numberValidator(control: AbstractControl): { [key: string]: boolean } | null {
      const NUMBER_REGEXP = /^[0-9]*$/;
      // const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
      if (control.value) {
         if (!NUMBER_REGEXP.test(control.value)) {
            return { numberOnly: true };
         }
      }
      return null;
   }

   static numberNotZero(control: AbstractControl): { [key: string]: boolean } | null {
      // const NUMBER_REGEXP = /^([1-9]([0-9]*)? )|([ ])?$/;
      const NUMBER_REGEXP = /^[0-9]*$/;
      // console.log('NUMBER_REGEXP.test(control.value):', NUMBER_REGEXP.test(control.value));
      if (control.value) {
         if (NUMBER_REGEXP.test(control.value)) {
            if (control.value <= 0) {
               return { numberZero: true };
            }
         } else {
            return { numberOnly: true };
         }
      }
      return null;
   }

   // static currencyNomal(control: AbstractControl): { [key: string]: boolean } | null {
   //    const NUMBER_REGEXP = Regex_Text_Curency;
   //    // const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
   //    if (control.value !== undefined && (isNaN(control.value))) {

   //       if (!NUMBER_REGEXP.test(control.value)) {
   //          return { currencyInvalid: true };
   //       }
   //    }
   //    return null;
   // }

   // static currencyNoneZero(control: AbstractControl): { [key: string]: boolean } | null {
   //    const NUMBER_REGEXP = Regex_Text_Curency;
   //    // console.log(control.value, isNaN(control.value) , control);

   //    if (control.value) {
   //       // console.log('step 2 ', control.value);
   //       if (!NUMBER_REGEXP.test(control.value)) {
   //          return { currencyInvalid: true };
   //       } else {
   //          if (control.value <= 0) {
   //             return { currencyZero: true };
   //          }
   //       }
   //    }
   //    return null;
   // }

   // Validates numbers
   // tslint:disable-next-line:variable-name
   static nidValidator(control: AbstractControl): { [key: string]: boolean } | null {

      const value = control.value;
      const NUMBER_REGEXP_STEP_1 = /^[0-9]+$/;
      const NUMBER_REGEXP_STEP_2 = /^[0-9]{13}$/;

      if (value) {
         const nidRaw = value.split('-').join('');
         if (!(nidRaw.length === 13)) {
            return { nidLength: true };
         }
         if (NUMBER_REGEXP_STEP_1.test(nidRaw)) {
            if (!CustomValidator.checkNid(nidRaw)) {
               return { nidInvalid: true };
            }
         }
      }
      return null;
   }

   // เลขประจำตัวผู้เสียภาษีอากรของผู้มีเงินได้จะต้องไม่ขึ้นต้นด้วย 099 ยกเว้น 0991
   static nid09912(control: AbstractControl) {
      const re = new RegExp(/^099[12]\d{9}$/);
      if (control.value) {
         if (re.test(control.value)) {
            return { nidInvalid: true };
         }
      }
      return null;
   }



   // Validates numbers
   // tslint:disable-next-line:variable-name
   static personNameValidator(control: AbstractControl): { [key: string]: boolean } | null {

      const value = control.value;
      const NAME_REGEXP = /^[a-zA-Z\u0E01-\u0E39\u0E40-\u0E4E]*$/;

      // const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
      if (value !== undefined) {

         if (!NAME_REGEXP.test(value)) {
            return { alphabetOnly: true };
         }

      }
      return null;
   }

   static corporateNameValidator(control: AbstractControl): { [key: string]: boolean } | null {

      const value = control.value;
      const NAME_REGEXP = /^(([ก-๏A-z0-9]+[ ]?[ .\@\-\&]?[\,]?[ ]?)+([\(][ก-๏A-z0-9]+[\)][ ]?)?)+$/;
      if (control.value) {

         if (!NAME_REGEXP.test(value)) {
            return { textFullNameInvalid: true };
         }

      }
      return null;
   }

   static corporateEngName(control: AbstractControl): { [key: string]: boolean } | null {

      const value = control.value;
      const NAME_REGEXP = /^(([A-z0-9]+[ ]?[ .\@\-\&]?[\,]?[ ]?)+([\(][A-z0-9]+[\)][ ]?)?)+$/;
      if (control.value) {

         if (!NAME_REGEXP.test(value)) {
            return { textFullNameInvalid: true };
         }

      }
      return null;
   }

   static corporateEngNameII(control: AbstractControl): { [key: string]: boolean } | null {

      const value = control.value;
      const BLOCK_REGEXP = /[\'\"\/\?\!\#\$\*\{\}]/;
      if (control.value) {
         if (String(value).match(BLOCK_REGEXP)) {
            return { textMultiLineInvalid: true };
         }
      }
      return null;
   }

   static corporateEngNameIII(control: AbstractControl): { [key: string]: boolean } | null {

      const value = String(control.value);
      const ALLOW_REGEXP = /^([A-z0-9]+([\@\%\^\&\(\)\-\_\+\=\|\\\:\;\<\>\,\. ]+)?)+$/g;
      const BLOCK_REGEXP = /[\'\"\/\?\!\#\$\*\{\}]/;

      if (control.value) {

         const b = String(value).match(BLOCK_REGEXP);
         // console.log('BLOCK_REGEXP', control.value, b);

         if (b) {
            return { textMultiLineInvalid: true };
         }

         const m = ALLOW_REGEXP.test(value);
         // console.log('ALLOW_REGEXP', control.value, m);

         if (m) {
            // console.log('return null');
            return null;
         }
         return { textFullNameInvalid: true };
      }
      return null;
   }

   static corporateEngOnly(control: AbstractControl): { [key: string]: boolean } | null {

      const value = control.value;
      const BLOCK_REGEXP = /[ก-๏๐-๙]/;
      if (control.value) {
         // console.log('value).match', String(value).match(BLOCK_REGEXP));
         // if (NAME_REGEXP.test(value)) {
         if (String(value).match(BLOCK_REGEXP)) {
            return { textFullNameHasNotThai: true };
         }
      }
      return null;
   }

   // Validates US SSN
   static ssnValidator(ssn: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (ssn.pristine) {
         return null;
      }

      const SSN_REGEXP = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;

      ssn.markAsTouched();

      if (SSN_REGEXP.test(ssn.value)) {
         return null;
      }

      return {
         invalidSsn: true
      };
   }

   // Validates US phone numbers
   // tslint:disable-next-line:variable-name
   static phoneValidator(number: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (number.pristine) {
         return null;
      }

      const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

      number.markAsTouched();

      if (PHONE_REGEXP.test(number.value)) {
         return null;
      }

      return {
         invalidNumber: true
      };
   }

   // Validates zip codes
   static zipCodeValidator(zip: { pristine: any; markAsTouched: () => void; value: string; }): any {
      if (zip.pristine) {
         return null;
      }

      const ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;

      zip.markAsTouched();

      if (ZIP_REGEXP.test(zip.value)) {
         return null;
      }

      return {
         invalidZip: true
      };
   }


   static checkNid(nid: any): boolean {
      let i = 0;
      let TmpInt = 0;
      if (nid.length !== 13) {
         return false;
      }

      for (i = 0; i < 12; i++) {
         // tslint:disable-next-line:radix
         TmpInt = TmpInt + Number.parseInt(nid.charAt(i)) * (13 - i);
      }
      const ChkValue: number = 11 - (TmpInt % 11);
      let ChkChar: string = ChkValue.toString();
      if (ChkChar.length > 1) {
         ChkChar = ChkChar.charAt(1);
      }
      if (ChkChar === nid.charAt(12)) {
         return true;
      }
      return false;
   }

   // Date Validate
   static dateValid(currentDate: Date): ValidatorFn {
      return (control: AbstractControl): { [key: string]: boolean } | null => {
         if (control.value) {
            currentDate = new Date(currentDate.setHours(0, 0, 0, 0));
            // console.log('[dateValid] currentDate: ', currentDate);
            if (control.value < currentDate) {
               return { dateInvalid: true };
            }
         }
         return null;
      };
   }

   static checkBranchNo(control: AbstractControl) {
      const BUILDING_REGEXP = /^([0-9]{1,5})$/;
      if (!BUILDING_REGEXP.test(control.value)) {
         return { branchFormat: true };
      }
      return null;
   }

   static buildingNumber(control: AbstractControl) {
      // const BUILDING_REGEXP = /^([0-9]*([\/\-][0-9]+)?([\/\-][0-9]+)?)$/;
      const BUILDING_REGEXP = /^([ก-๏A-z0-9]*([\/\-][ก-๏A-z0-9]+)?([\/\-][ก-๏A-z0-9]+)?)$/;
      if (control.value) {
         if (!BUILDING_REGEXP.test(control.value)) {
            return { dataInvalid: true };
         }
      }
      return null;
   }

   static textAddress(control: AbstractControl) {
      // const BUILDING_REGEXP = /^([0-9]*([\/\-][0-9]+)?([\/\-][0-9]+)?)$/;
      // tslint:disable-next-line:max-line-length
      const ADDRESS_REGEXP = /^([ก-๏A-z]+[ ]?[\.\/\-]?[ก-๏๐-๙A-z0-9]?([ ]?[\(]?[\.\/\-]?[ ]?[ก-๏๐-๙A-z0-9]+)*[\)]?)$/;
      if (control.value) {
         if (!ADDRESS_REGEXP.test(control.value)) {
            return { dataInvalid: true };
         }
      }
      return null;
   }

   static junctionName(control: AbstractControl) {
      // const BUILDING_REGEXP = /^([0-9]*([\/\-][0-9]+)?([\/\-][0-9]+)?)$/;
      // tslint:disable-next-line:max-line-length
      const NAME_REGEXP = /^([ก-๏๐-๙A-z0-9]+[ ]?[\.\/\-]?[ก-๏๐-๙A-z0-9]?([ ]?[\(]?[\.\/\-]?[ ]?[ก-๏๐-๙A-z0-9]+)*[\)]?)$/;
      if (control.value) {
         if (!NAME_REGEXP.test(control.value)) {
            return { dataInvalid: true };
         }
      }
      return null;
   }

   static textMultiLine(control: AbstractControl) {
      const regex = /([\"\'\\])/;
      if (regex.test(control.value)) {
         return { textHasSpecialAlphabet: true };
      }
      return null;
   }

   static textNomal(control: AbstractControl) {
      const regex = /([\t\n\"\'\\])/;
      if (control.value) {
         if (regex.test(control.value)) {
            return { textHasSpecialAlphabet: true };
         }
      }
      return null;
   }

   static textContractNumber(control: AbstractControl) {
      const regex = /^(([ก-๏A-z0-9])+[ \.\/\-]?)*$/;
      if (control.value) {
         if (!regex.test(control.value)) {
            return { dataInvalid: true };
         }
      }
      return null;
   }

   static textFullName(control: AbstractControl) {
      const regex = /^(([ก-๏A-z])+[\.]?)*[ ]?([ก-๏A-z]+)[ ]?([ก-๏A-z]*)?[ ]?([ก-๏A-z]*)?$/;
      if (control.value) {
         if (!regex.test(control.value)) {
            return { textFullNameInvalid: true };
         }
      }
      return null;
   }

   static textPassword(control: AbstractControl) {
      const regex = /([ \t\n\"\'\\\-])/;
      if (regex.test(control.value)) {
         return { textHasSpecialAlphabet: true };
      }
      return null;
   }

   static payCode(control: AbstractControl) {
      const regex = /([ \t\n\"\'\\\-])/;
      const revert = /$9$8$13$4$5$1$2$3$10$12$11$7$6/;
      const input = control.value;
      if (control.value) {
         if (control.value.length === 20) {

            const code = input.substring(19, 20);
            const sumRef = Number.parseInt(input.substring(13, 14), 0)
               + Number.parseInt(input.substring(14, 15), 0)
               + Number.parseInt(input.substring(15, 16), 0)
               + Number.parseInt(input.substring(16, 17), 0)
               + Number.parseInt(input.substring(17, 18), 0)
               + Number.parseInt(input.substring(18, 19), 0);

            const nid = input.substring(0, 13);
            const reverseNid = nid.substring(8, 9) + nid.substring(7, 8) + nid.substring(12, 13) + nid.substring(3, 4)
               + nid.substring(4, 5) + nid.substring(0, 1) + nid.substring(1, 2) + nid.substring(2, 3)
               + nid.substring(9, 10) + nid.substring(11, 12) + nid.substring(10, 11)
               + nid.substring(6, 7) + nid.substring(5, 6);

            const chkcode = `${sumRef % 6}`;
            // console.log('payCode ', input , reverseNid,  chkcode , code);
            if (chkcode !== code || !CustomValidator.checkNid(reverseNid)) {
               return { payCodeInvalid: true };
            }
         } else {
            return { payCodeLength: true };
         }
      }
      return null;
   }

   static chkpayCode(control: AbstractControl) {

      const multiplier = [3, 5, 7, 17, 19, 43, 41, 37, 31, 29, 23, 53, 59, 3, 5, 7, 17];
      const modValue = 1000;
      const regex = /^[0-9]{20}$/;

      const input = control.value;
      if (control.value) {
         if (control.value.length === 20) {

            if (!regex.test(control.value)) { }

            let userMod = '';
            let sum = 0;
            let i = 0;

            Object.values(control.value).forEach(
               item => {
                  if (multiplier[i]) {
                     // console.log(item, ' X ', multiplier[i]);
                     sum += Number(item) * Number(multiplier[i]);

                  } else {
                     userMod += `${item}`;
                  }
                  i++;
               }
            );

            const modResult = sum % modValue;
            // console.log('[sum]', sum, ' [modResult]', modResult, ' [userMod]',userMod);
            if (modResult !== Number(userMod)) {
               return { payCodeInvalid: true };
            }

         } else {
            return { payCodeLength: true };
         }
      }
      return null;
   }

   static textSpecialAlphabet(control: AbstractControl) {
      const regex = /[\'\"\/\?\!\#\$\*\{\}]/;
      if (regex.test(control.value)) {
         return { textHasSpecialAlphabet: true };
      }
      return null;
   }
}
