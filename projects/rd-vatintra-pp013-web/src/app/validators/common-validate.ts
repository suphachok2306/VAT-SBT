import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validatorNid(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const val = control.value;

    const notCompleted = String(val).length !== 13;
    if (notCompleted) {
      return { E0366: true };
    }

    const isDigitsInvalid = !checkDigits(val);
    if (isDigitsInvalid) {
      return { E0365: true };
    }

    return null;
  };
}

function checkDigits(value: string): boolean {
  let isValueValid = true;
  if (value) {
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseFloat(value.charAt(i)) * (13 - i);
    }
    if ((11 - (sum % 11)) % 10 !== parseFloat(value.charAt(12))) {
      if (value.charAt(12)) {
        isValueValid = false;
      }
    }
  }
  return isValueValid;
}
