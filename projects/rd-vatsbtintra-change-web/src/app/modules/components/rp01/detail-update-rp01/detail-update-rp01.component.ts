import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CommonService } from 'projects/rd-vatsbtintra-change-web/src/app/service/common.service';
import { HttpService } from 'projects/rd-vatsbtintra-change-web/src/app/service/http.service';

@Component({
  selector: 'app-detail-update-rp01',
  templateUrl: './detail-update-rp01.component.html',
  styleUrls: ['./detail-update-rp01.component.scss']
})
export class DetailUpdateRp01Component implements OnInit {
  @ViewChild('modal') modal!: ModalDirective;
  @ViewChild('modalSave') modalSave!: ModalDirective;
  formGroup!: FormGroup;
  nid!: string;
  type!: string;
  braNo!: string;
  regTst!: string;
  disabledFormC!: boolean;
  disabledFormU!: boolean;
  formInvalid = false;
  taxtyp!: string;
  mas!: string
  odlnBatDat!: string
  toKenId = JSON.parse(JSON.stringify(this.httpService.getDecodeTokenAccessToken()));
  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private routerActive: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
  ) {
    this.nid = this.routerActive.snapshot.queryParams.nid;
    this.type = this.routerActive.snapshot.queryParams.type;
    this.braNo = this.routerActive.snapshot.queryParams.braNo;
    this.regTst = this.routerActive.snapshot.queryParams.regTst;
    console.log(this.type, 'LOG <<< nid tpye >>>::', this.nid)
    this.getType();
    this.buildForm();
    this.getDisplay();
  }

  ngOnInit(): void {
  }

  private getType() {
    if (this.type == 'C') {
      this.disabledFormC = true;
    } else {
      this.disabledFormC = true;
      this.disabledFormU = true;
    }
  }

  getDisplay() {
    this.httpService.getDisplayRp01(this.regTst).subscribe((data) => {
      this.setTaxpayer(data.responseData);
    });
  }

  setTaxpayer(data: any) {
    let nid = data.nid.trim();
    this.taxtyp = data.taxTyp;
    if (data.taxTyp == 'S') {
      this.formGroup.controls.vatStatus.setValue(null);
      this.formGroup.controls.sbtStatus.setValue('1');
    } else {
      this.formGroup.controls.sbtStatus.setValue(null);
      this.formGroup.controls.vatStatus.setValue('1');
    }
    this.odlnBatDat = data.odlNBatDat;
    this.formGroup.controls.odlnForCod.setValue(data.odlNfoRCod);
    this.formGroup.controls.odlnBatOffCod.setValue(data.odlNbaTOffCod);
    this.formGroup.controls.odlnHomeOffCod.setValue(data.odlNhoMOffCod);
    this.formGroup.controls.odlnSubTyp.setValue(data.odlNSubTyp);
    this.formGroup.controls.odlnCompCod.setValue(data.odlNComPCod);
    this.formGroup.controls.odlnBatDat.setValue(data.odlNBatDat ? this.getFormatDate(data.odlNBatDat) : null);
    this.formGroup.controls.odlnLtoSta.setValue(data.odlNLtoSta);
    this.formGroup.controls.odlnForSta.setValue(data.odlNForSta);
    this.formGroup.controls.odlnBatNo.setValue(data.odlNBatNo);
    this.formGroup.controls.odlnBatSeqNo.setValue(data.odlNBatSeqNo);
    this.formGroup.controls.oldNid.setValue(data.oldNid);
    this.formGroup.controls.oldBraNo.setValue(data.oldBraNo);
    this.formGroup.controls.oldTaxMon.setValue(data.oldTaxMon);
    this.formGroup.controls.oldTaxYea.setValue(data.oldTaxYea);
    if (nid == '-') {
      this.formGroup.controls.nid.setValue('');
    } else {
      this.formGroup.controls.nid.setValue(nid);
    }
    this.formGroup.controls.braNo.setValue(data.braNo);
    this.formGroup.controls.taxMon.setValue(data.taxMon);
    this.formGroup.controls.taxYea.setValue(data.taxYea);
    this.formGroup.controls.taxTyp.setValue(data.taxTyp);
    this.formGroup.controls.calCod.setValue(data.calCod);
    this.formGroup.controls.reqOffCod.setValue(data.reqOffCod);
    this.formGroup.controls.ofrCod.setValue(data.ofrCod);
    this.formGroup.controls.aprDat.setValue(data.aprDat ? this.getFormatDate(data.aprDat) : null);
    this.formGroup.controls.aprRemark.setValue(data.aprRemark);
    this.formGroup.controls.aprSta.setValue(data.aprSta);
    if (this.type == 'U') {
      this.formGroup.controls.aprSta.setValue('0');
    }

  }

  buildForm() {
    this.formGroup = this.fb.group({
      odlnForCod: [null], //1
      odlnBatDat: [null], //1
      odlnBatOffCod: [null],//3
      odlnLtoSta: [null],//4
      odlnHomeOffCod: [null],//5
      odlnForSta: [null], //6
      odlnSubTyp: [null], //7
      odlnBatNo: [null], //8
      odlnCompCod: [null], //9
      odlnBatSeqNo: [null], //10
      oldNid: [null], //11
      nid: [null], //12
      oldBraNo: [null], //13
      braNo: [null], //14
      oldTaxMon: [null],//15
      oldTaxYea: [null],//16
      taxMon: [null],//17
      taxYea: [null],//18

      sendForSta: [null],
      oldTitCod: [null],
      oldBraNam: [null],
      titCod: [null],
      braNam: [null],
      oldEngNam: [null],
      engNam: [null],
      oldBusFirDat: [null],
      oldBusCptAmo: [null],
      oldEstMonincAmo: [null],
      busFirDat: [null],
      busCptAmo: [null],
      estMonincAmo: [null],

      taxTyp: [null], //19
      reqOffCod: [null],//20
      ofrCod: [null],//21
      ltoFlg: [null],//22
      sbtStatus: [null],//23
      vatStatus: [null],//24
      aprSta: [null],//25
      aprDat: [null],//26
      aprRemark: [null],//27


      calCod: [null],//28 ++
    });
  }

  clear() {
    this.formGroup.controls.titCod.setValue(null);
    this.formGroup.controls.braNam.setValue(null);
    this.formGroup.controls.engNam.setValue(null);
    this.formGroup.controls.busFirDat.setValue(null);
    this.formGroup.controls.busCptAmo.setValue(null);
    this.formGroup.controls.estMonincAmo.setValue(null);
  }

  cancel() {
    this.router.navigate(['rp01/search']);
  }

  logOut() {
    this.router.navigate(['rp01/search']);
  }

  save() {
    if (this.validateForm()) {
      let aprDat = null;
      if (this.formGroup.value.aprDat) {
        if (this.formGroup.value.aprDat.length == 8) {
          aprDat = this.formGroup.value.aprDat.substring(0, 2) + '/' + this.formGroup.value.aprDat.substring(2, 4) + '/' + this.formGroup.value.aprDat.substring(4, 8);
        } else {
          aprDat = this.formGroup.value.aprDat
        }
      }
      let body = {
        aprDat: aprDat ? aprDat : null,
        aprRemark: this.formGroup.value.aprRemark ? this.formGroup.value.aprRemark : null,
        aprSta: this.type == 'C' ? null : this.formGroup.value.aprSta,
        braNo: String(this.formGroup.value.braNo),
        calCod: this.formGroup.value.calCod,
        deUserId: this.toKenId.id.userId,
        dln: null,
        loginOffCod: this.toKenId.id.userOfficeCode,
        ltoFlg: this.formGroup.value.ltoFlg ? this.formGroup.value.ltoFlg : 0,
        nid: this.formGroup.value.nid,
        odlnBatDat: this.odlnBatDat,
        odlnBatNo: this.formGroup.value.odlnBatNo,
        odlnBatOffCod: this.formGroup.value.odlnBatOffCod,
        odlnBatSeqNo: this.formGroup.value.odlnBatSeqNo,
        odlnCompCod: this.formGroup.value.odlnCompCod,
        odlnForCod: this.formGroup.value.odlnForCod,
        odlnForSta: this.formGroup.value.odlnForSta,
        odlnHomOffCod: this.formGroup.value.odlnHomeOffCod,
        odlnLtoSta: this.formGroup.value.odlnLtoSta,
        odlnSubTyp: this.formGroup.value.odlnSubTyp,
        ofrCod: this.toKenId.id.userId.substring(2, 8),
        oldBraNo: String(this.formGroup.value.oldBraNo),
        oldNid: this.formGroup.value.oldNid,
        oldTaxMon: this.formGroup.value.oldTaxMon,
        oldTaxYea: this.formGroup.value.oldTaxYea,
        reqOffCod: this.toKenId.id.userOfficeCode,
        sendForSta: this.type == 'C' ? 'EA' : this.formGroup.value.aprSta == '1' ? 'MA' : 'CA',
        taxMon: this.formGroup.value.taxMon,
        taxTyp: this.formGroup.value.taxTyp,
        taxYea: this.formGroup.value.taxYea,
        uid: null,
      }
      this.httpService.saveFormRp01(body).subscribe((data) => {
        if (data.responseCode == 'OK') {
          this.modal.show();
        } else {
          this.mas = 'บันทึกไม่สำเร็จ'
          this.modalSave.show();
        }
      });
    }
  }

  validateForm() {
    if (this.formGroup.value.nid || this.formGroup.value.taxMon || this.formGroup.value.taxYea || this.formGroup.value.braNo) {
      this.formInvalid = true;
      return this.formInvalid;
    } else {
      this.formInvalid = false;
      this.mas = 'ต้องกรอกอย่างน้อย 1 ช่อง'
      this.modalSave.show();
      return this.formInvalid;
    }
  }

  onAccept() {
    this.router.navigate(['rp01/search'], { queryParams: { nid: this.nid } });
  }

  getFormatDate(date: any) {
    const format = moment(date).format('YYYY-MM-DD');
    return this.commonService.getFormatDateTH(format);
  }
}