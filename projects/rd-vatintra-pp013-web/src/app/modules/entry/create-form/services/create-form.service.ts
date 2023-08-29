import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validatorNid } from 'projects/rd-vatintra-pp013-web/src/app/validators/common-validate';

@Injectable({
  providedIn: 'root'
})
export class CreateFormService {
  private formGroupMain!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  public getForm(): FormGroup {
    return this.formGroupMain;
  }

  public resetForm() {
    this.formGroupMain.reset();
  }

  public creteForm() {
    this.formGroupMain = this.fb.group({
      // /common/vat/getVATInfo
      addNo: null,
      amalgamateDate: null,
      amphurCode: null,
      amphurName: null,
      branchName: null,
      branchTitleCode: null,
      branchTitleName: null,
      businessCapitalAmount: null,
      businessFirstDate: null,
      businessStatus: null,
      businessStatusDesc: null,
      cancelCloseDate: null,
      cancelJoinFillingBranchDate: null,
      closeDate: null,
      crossOutDate: null,
      disDate: null,
      estimateMonthIncomeAmount: null,
      firstDateType: null,
      goodExportFirstDate: null,
      goodExportFlag: null,
      goodExportLastDate: null,
      joinFillingBranchDate: null,
      joinFillingBranchDln: null,
      joinFillingBranchNo: null,
      joinFillingBranchStatus: null,
      juristicEngName: null,
      juristicRegDate: null,
      juristicRegNo: null,
      ltoStatus: null,
      offcode: null,
      offname: null,
      oldTransformNid: null,
      pin: null,
      postalCode: null,
      provinceName: null,
      regionOffcode: null,
      regionOffname: null,
      superOffcode: null,
      superOffname: null,
      tambolCode: null,
      tambolName: null,
      thnNam: null,
      titleCode: null,
      transferDate: null,
      transformDate: null,
      vatApproveDate: null,
      vatRate: null,

      // /pp013/insertPP013
      addrNo: null,
      birthDate: null,
      branchNo: null,
      branchNum: null,
      branchRegInfo: this.fb.group({
        addrNo: null,
        branchName: null,
        branchNo: null,
        buildingName: null,
        districtCode: null,
        floorNo: null,
        mooNo: null,
        nid: null,
        postCode: null,
        provinceCode: null,
        roomNo: null,
        soiName: null,
        street: null,
        subDistrictCode: null,
        telNo: null,
        titleCode: null,
        village: null
      }),
      buildingName: null,
      corRegDate: null,
      corRegNo: null,
      districtCode: null,
      docDate: null,
      filDate: null,
      filJoinBranchNo: null,
      filType: null,
      firstName: null,
      flagStatus: null,
      floorNo: null,
      lastName: null,
      member: null,
      memberDate: null,
      memberExpDate: null,
      memberRef: null,
      memberRefDate: null,
      memberRefExpDate: null,
      memberRefNo: null,
      mooNo: null,
      nat: null,
      nationality: null,
      nid: [null, Validators.compose([Validators.required, validatorNid()])],
      postCode: null,
      provinceCode: null,
      recDate: [null, Validators.compose([Validators.required])],
      recRegNo: [null, Validators.compose([Validators.required])],
      roomNo: null,
      soiName: null,
      street: null,
      subDistrictCode: null,
      telNo: null,
      titleName: null,
      updStatus: null,
      vatRegDate: null,
      village: null
    });
  }
}

