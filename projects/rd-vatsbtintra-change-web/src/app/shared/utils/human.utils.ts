export class HumanUtils {
  static nidValidate(nid: string): boolean {
    let i = 0;
    let TmpInt = 0;
    if (nid.length !== 13) {
      return false;
    }

    for (i = 0; i < 12; i++) {
      TmpInt = TmpInt + Number(nid.charAt(i)) * (13 - i);
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
}
