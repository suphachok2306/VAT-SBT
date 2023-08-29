import { stringify } from '@angular/compiler/src/util';
import { Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { join } from 'path';
import { HumanUtils } from '../utils/human.utils';

export class HumanValidator {
  /**  THAI NATIONAL ID CARD  */
  static thaiNid(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    const REGEXP_STEP_1 = /^[0-9]+$/;
    const NUMBER_REGEXP_STEP_2 = /^[0-9]{13}$/;

    if (value) {
      const nidRaw = value.split('-').join('');
      if (!(nidRaw.length === 13)) {
        return { nidLength: true };
      }

      const matchAll = String(value).match(REGEXP_STEP_1);
      if (matchAll && value === matchAll.join()) {
        if (!HumanUtils.nidValidate(nidRaw)) {
          return { nidInvalid: true };
        }
      }
    }
    return null;
  }
}
