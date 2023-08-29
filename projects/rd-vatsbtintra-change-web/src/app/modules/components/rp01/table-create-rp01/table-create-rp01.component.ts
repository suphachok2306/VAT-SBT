import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CommonService } from 'projects/rd-vatsbtintra-change-web/src/app/service/common.service';
import { HttpService } from 'projects/rd-vatsbtintra-change-web/src/app/service/http.service';
import { environment } from 'projects/rd-vatsbtintra-change-web/src/environments/environment';

@Component({
  selector: 'app-table-create-rp01',
  templateUrl: './table-create-rp01.component.html',
  styleUrls: ['./table-create-rp01.component.scss']
})
export class TableCreateRp01Component implements OnInit {
  @ViewChild('modal') modal!: ModalDirective;
  @ViewChild('modalSave') modalSave!: ModalDirective;
  mas!: string;
  formInvalid = false;
  formGroup!: FormGroup;
  public listOfData: any = [];
  taxtyp!: string;
  toKenId = JSON.parse(JSON.stringify(this.httpService.getDecodeTokenAccessToken()));
  length = 0;
  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private commonService: CommonService,
    private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
    if (environment.env == 'sit') {
      this.formGroup.controls.odlnForCod.setValue('PP30');
      this.formGroup.controls.odlnBatOffCod.setValue('03027210');
      this.formGroup.controls.odlnHomOffCod.setValue('03027210');
      this.formGroup.controls.odlnSubTyp.setValue('1');
      this.formGroup.controls.odlnCompCod.setValue('04');
      this.formGroup.controls.odlnBatDat.setValue('08/04/2565');
      this.formGroup.controls.odlnLtoSta.setValue('0');
      this.formGroup.controls.odlnForSta.setValue('5');
      this.formGroup.controls.odlnBatNo.setValue('0030');
      this.formGroup.controls.odlnBatSeqNo.setValue('00');
    }
    if (environment.env == 'uat') {
      this.formGroup.controls.odlnForCod.setValue('PP30');
      this.formGroup.controls.odlnBatOffCod.setValue('04120010');
      this.formGroup.controls.odlnHomOffCod.setValue('04120061');
      this.formGroup.controls.odlnSubTyp.setValue('1');
      this.formGroup.controls.odlnCompCod.setValue('31');
      this.formGroup.controls.odlnBatDat.setValue('2021-03-15');
      this.formGroup.controls.odlnLtoSta.setValue('0');
      this.formGroup.controls.odlnForSta.setValue('4');
      this.formGroup.controls.odlnBatNo.setValue('0001');
      this.formGroup.controls.odlnBatSeqNo.setValue('02');
    }
  }

  getSearch() {
    if (!this.validateForm()) {
      let data = {
        // appr: this.appr,
        odlnBatDat: this.formGroup.value.odlnBatDat,
        odlnBatNo: this.formGroup.value.odlnBatNo,
        odlnBatOffCod: this.formGroup.value.odlnBatOffCod,
        odlnBatSeqNo: this.formGroup.value.odlnBatSeqNo,
        odlnCompCod: this.formGroup.value.odlnCompCod,
        odlnForCod: this.formGroup.value.odlnForCod,
        odlnForSta: this.formGroup.value.odlnForSta,
        odlnHomOffCod: this.formGroup.value.odlnHomOffCod,
        odlnLtoSta: this.formGroup.value.odlnLtoSta,
        odlnSubTyp: this.formGroup.value.odlnSubTyp,
        reqOffCod: this.toKenId.id.userOfficeCode
      }
      this.httpService.getCreate(data).subscribe((data) => {
        console.log(data.responseData);
        if (data.responseCode == 'ERROR') {
          this.mas = 'ไม่พบข้อมูลตรงตามเงื่อนไขที่กำหนด'
          this.modalSave.show();
          this.listOfData = [];
        } else {
          if (!data.responseData.uid) {
            this.mas = 'ไม่พบข้อมูลตรงตามเงื่อนไขที่กำหนด'
            this.modalSave.show();
            this.listOfData = [];
          } else {
            this.listOfData = [data.responseData];
            this.listOfData.forEach(async (data: any) => {
              data.businessFirstDate = '2022-04-08'
            });
            console.log('33333333', this.listOfData);
            this.setItemSeleteList();
          }
        }
      });
    }
  }

  async getDisName(data: any) {
    let name: any;
    if (data.taxTyp == 'S') {
      name = this.httpService.getSBTInfoCh01(data.oldNid, data.oldBraNo).subscribe((data) => {
        return data.responseData[0];
      });
    } else {
      name = this.httpService.getVATInfoCh01(data.oldNid, data.oldBraNo).toPromise().then(result => {
        console.log('data', result.responseData[0].firstName);
        return result.responseData[0];
      });
    }
    return name;
  }

  getOldTaxYea(data: any) {
    let sum: any;
    sum = Number(data) + 543;
    return sum;
  }

  private setItemSeleteList() {
    this.listOfData.forEach((item: any) => {
      item.checked = false;
      item.disabled = false;
    });
    this.chkForStaRp01();
  }

  chkForStaRp01() {
    for (let index = 0; index < this.listOfData.length; index++) {
      let data = {
        // appr: this.appr,
        odlnBatDat: this.formGroup.value.odlnBatDat,
        odlnBatNo: this.formGroup.value.odlnBatNo,
        odlnBatOffCod: this.formGroup.value.odlnBatOffCod,
        odlnBatSeqNo: this.formGroup.value.odlnBatSeqNo,
        odlnCompCod: this.formGroup.value.odlnCompCod,
        odlnForCod: this.formGroup.value.odlnForCod,
        odlnForSta: this.formGroup.value.odlnForSta,
        odlnHomOffCod: this.formGroup.value.odlnHomOffCod,
        odlnLtoSta: this.formGroup.value.odlnLtoSta,
        odlnSubTyp: this.formGroup.value.odlnSubTyp,
        reqOffCod: this.toKenId.id.userOfficeCode,
        searchStatus: this.formGroup.value.searchStatus,
      }
      this.httpService.chkForStaRp01(data).subscribe(data => {
        console.log(data);
        if (data.responseCode == "ERROR") {
          this.listOfData[index].disabled = false;
        } else {
          if (data.responseCode == "enable") {
            this.listOfData[index].disabled = false;
          } else {
            this.listOfData[index].disabled = true;
          }
        }
      });
    }
  }

  buildForm() {
    this.formGroup = this.fb.group({
      odlnForCod: ['', [Validators.required]],
      odlnBatOffCod: ['', [Validators.required]],
      odlnHomOffCod: ['', [Validators.required]],
      odlnSubTyp: ['', [Validators.required]],
      odlnCompCod: ['', [Validators.required]],
      odlnBatDat: ['', [Validators.required]],
      odlnLtoSta: ['', [Validators.required]],
      odlnForSta: ['', [Validators.required]],
      odlnBatNo: ['', [Validators.required]],
      odlnBatSeqNo: ['', [Validators.required]],
    });
  }

  clear() {
    this.buildForm();
    this.listOfData = [];
  }

  checkbox1(i: any): void {
    this.listOfData[i].checked = !this.listOfData[i].checked;
  }

  create() {
    let data = true;
    for (let index = 0; index < this.listOfData.length; index++) {
      if (this.listOfData[index].checked) {
        this.length++
        data = false;
      }
    }
    if (!data) {
      this.modal.show();
    } else {
      this.mas = 'ต้องเลือกอย่างน้อย 1 รายการ'
      this.modalSave.show();
    }
  }

  back() {
    this.router.navigate(['rp01/search']);
  }

  onAccept() {
    let length = 0;
    for (let index = 0; index < this.listOfData.length; index++) {
      if (this.listOfData[index].checked) {
        let body = {
          aprDat: null, //
          aprRemark: null,//
          aprSta: null, //
          braNo: '', //
          calCod: this.formGroup.value.calCod,
          deUserId: this.toKenId.id.userId, //
          dln: null, //
          loginOffCod: this.toKenId.id.userOfficeCode, //
          ltoFlg: this.formGroup.value.ltoFlg ? this.formGroup.value.ltoFlg : 0,
          nid: '-', //
          odlnBatDat: this.formGroup.value.odlnBatDat, //
          odlnBatNo: this.formGroup.value.odlnBatNo, //
          odlnBatOffCod: this.formGroup.value.odlnBatOffCod, // 
          odlnBatSeqNo: this.formGroup.value.odlnBatSeqNo, //
          odlnCompCod: this.formGroup.value.odlnCompCod, //
          odlnForCod: this.formGroup.value.odlnForCod, //
          odlnForSta: this.formGroup.value.odlnForSta, // 
          odlnHomOffCod: this.formGroup.value.odlnHomOffCod, //
          odlnLtoSta: this.formGroup.value.odlnLtoSta, //
          odlnSubTyp: this.formGroup.value.odlnSubTyp, //
          ofrCod: this.toKenId.id.userId.substring(2, 8), //
          oldBraNo: String(this.listOfData[index].oldBraNo), //
          oldNid: this.listOfData[index].oldNid, //
          oldTaxMon: this.listOfData[index].oldTaxMon, //
          oldTaxYea: this.listOfData[index].oldTaxYea, //
          reqOffCod: this.toKenId.id.userOfficeCode, //
          sendForSta: 'AA', //
          taxMon: '', // 1
          taxTyp: this.listOfData[index].taxTyp,
          taxYea: '', // 2
          uid: null, //
        }
        this.httpService.saveFormRp01(body).subscribe((data) => {
          length++;
          if (length == this.length) {
            this.modal.hide();
            this.getSearch();
            this.length = 0;
          }
        });
      }
    }
  }

  getFormatDate(date: any) {
    const format = moment(date).format('YYYY-MM-DD');
    return this.commonService.getFormatDateTH(format);
  }

  validateForm(): any {
    this.formInvalid = false;
    if (this.formGroup?.invalid) {
      this.formInvalid = true;
    } else {
      this.formInvalid = false;
      return this.formInvalid;
    }
  }

}
