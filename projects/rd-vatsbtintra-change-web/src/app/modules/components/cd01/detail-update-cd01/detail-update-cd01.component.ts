import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CommonService } from 'projects/rd-vatsbtintra-change-web/src/app/service/common.service';
import { HttpService } from 'projects/rd-vatsbtintra-change-web/src/app/service/http.service';
import { environment } from 'projects/rd-vatsbtintra-change-web/src/environments/environment';

@Component({
  selector: 'app-detail-update-cd01',
  templateUrl: './detail-update-cd01.component.html',
  styleUrls: ['./detail-update-cd01.component.scss']
})
export class DetailUpdateCd01Component implements OnInit {
  intraUrl = environment.intraUrl;
  @ViewChild('modal') modal!: ModalDirective;
  @ViewChild('modalSave') modalSave!: ModalDirective;
  formGroup!: FormGroup;
  nid!: string;
  type!: string;
  braNo!: string;
  disabledFormC!: boolean;
  disabledFormU!: boolean;
  formInvalid = false;
  taxtyp!: string;
  mas!: string
  toKenId = JSON.parse(JSON.stringify(this.httpService.getDecodeTokenAccessToken()));
  booleanEditBusFirDat = false;
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
    console.log(this.type, 'LOG <<< nid tpye >>>::', this.nid)
    this.getType();
    this.buildForm();
    this.getTaxpayerInfo();
  }

  ngOnInit(): void {
    this.checkDefaultAprSta();
  }

  checkDefaultAprSta() {
    if (this.type == 'U') {
      // this.formGroup.controls.aprSta.setValue('0');
    }
  }

  private getType() {
    if (this.type == 'C') {
      this.disabledFormC = true;
    } else {
      this.disabledFormC = true;
      this.disabledFormU = true;
    }
  }

  getTaxpayerInfo() {
    this.httpService.getTaxpayerInfoPp('', '', this.nid, '').subscribe((data) => {
      this.getDisplay();
      if (data.sbtStatus == 'Y') {
        this.taxtyp = 'S';
        this.formGroup.controls.vatStatus.setValue(null);
        this.formGroup.controls.sbtStatus.setValue('1');
      } else {
        this.taxtyp = 'V';
        this.formGroup.controls.sbtStatus.setValue(null);
        this.formGroup.controls.vatStatus.setValue('1');
      }
    });
  }

  getDisplay() {
    this.httpService.getDisplayCd01(this.braNo, this.nid).subscribe((data) => {
      console.log('LOG <<< getDisplay update >>>::', data);
      this.setTaxpayer(data.responseData);
    });
  }

  setTaxpayer(data: any) {
    this.formGroup.controls.nid.setValue(data.nid);
    this.formGroup.controls.braNo.setValue(data.braNo);
    this.formGroup.controls.sendForSta.setValue(data.forSta);
    this.formGroup.controls.aprSta.setValue(this.type == 'U' ? '0' : data.aprSta);
    this.formGroup.controls.oldTitCod.setValue(data.oldTitCod);
    this.formGroup.controls.titCod.setValue(data.titCod);
    this.formGroup.controls.oldBraNam.setValue(data.oldBraNam);
    this.formGroup.controls.braNam.setValue(data.braNam);
    this.formGroup.controls.oldEngNam.setValue(data.oldEngNam);
    this.formGroup.controls.engNam.setValue(data.engNam);
    this.formGroup.controls.oldBusFirDat.setValue(data.oldBusFirDat ? this.getFormatDate(data.oldBusFirDat) : null);
    this.formGroup.controls.busFirDat.setValue(data.busFirDat ? this.getFormatDate(data.busFirDat) : null);
    this.formGroup.controls.oldBusCptAmo.setValue(data.oldBusCptAmo == '0' ? null : String(data.oldBusCptAmo));
    this.formGroup.controls.busCptAmo.setValue(data.busCptAmo == '0' ? null : data.busCptAmo);
    this.formGroup.controls.oldEstMonincAmo.setValue(data.oldEstMonIncAmo == '0' ? null : String(data.oldEstMonIncAmo));
    this.formGroup.controls.estMonincAmo.setValue(data.estMonIncAmo == '0' ? null : data.estMonIncAmo);
    this.formGroup.controls.taxTyp.setValue(data.taxTyp);
    this.formGroup.controls.reqOffCod.setValue(data.reqOffCod);
    this.formGroup.controls.ofrCod.setValue(data.ofrCod);
    this.formGroup.controls.aprDat.setValue(data.aprDat ? this.getFormatDate(data.aprDat) : null);
    this.formGroup.controls.aprRemark.setValue(data.aprRemark);
    this.formGroup.controls.ltoFlg.setValue(data.ltoFlg);
  }

  buildForm() {
    this.formGroup = this.fb.group({
      nid: [null],
      braNo: [null],
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
      taxTyp: [null],
      reqOffCod: [null],
      ofrCod: [null],
      ltoFlg: [null],
      sbtStatus: [null],
      vatStatus: [null],
      aprSta: [null],
      aprDat: [null],
      aprRemark: [null],
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
    this.router.navigate(['cd01/search']);
  }

  logOut() {
    if (this.type == 'C') {
      window.location.href = this.intraUrl + 'rd-vatsbtintra-dashboard-web/request-form';
    } else {
      window.location.href = this.intraUrl + 'rd-vatsbtintra-dashboard-web/consider-request/changes-by-staff';
    }
  }

  save() {
    if (this.validateForm()) {
      let busFirDat = null;
      let aprDat = null;
      if (this.formGroup.value.busFirDat) {
        if (this.formGroup.value.busFirDat.length == 8) {
          busFirDat = this.formGroup.value.busFirDat.substring(0, 2) + '/' + this.formGroup.value.busFirDat.substring(2, 4) + '/' + this.formGroup.value.busFirDat.substring(4, 8);
        } else {
          busFirDat = this.formGroup.value.busFirDat
        }
      }
      if (this.formGroup.value.aprDat) {
        if (this.formGroup.value.aprDat.length == 8) {
          aprDat = this.formGroup.value.aprDat.substring(0, 2) + '/' + this.formGroup.value.aprDat.substring(2, 4) + '/' + this.formGroup.value.aprDat.substring(4, 8);
        } else {
          aprDat = this.formGroup.value.aprDat
        }
      }
      let body = {
        nid: this.formGroup.value.nid,
        braNo: String(this.formGroup.value.braNo),
        sendForSta: this.type == 'C' ? 'EA' : this.formGroup.value.aprSta == '1' ? 'MA' : 'CA',
        oldTitCod: this.formGroup.value.titCod ? this.formGroup.value.oldTitCod : null,
        titCod: this.formGroup.value.titCod ? this.formGroup.value.titCod : null,
        oldBraNam: this.formGroup.value.braNam ? this.formGroup.value.oldBraNam : null,
        braNam: this.formGroup.value.braNam ? this.formGroup.value.braNam : null,
        oldEngNam: this.formGroup.value.engNam ? this.formGroup.value.oldEngNam : null,
        engNam: this.formGroup.value.engNam ? this.formGroup.value.engNam : null,
        oldBusFirDat: this.formGroup.value.busFirDat ? this.formGroup.value.oldBusFirDat : null,
        busFirDat: busFirDat ? busFirDat : null,
        oldBusCptAmo: this.formGroup.value.busCptAmo ? Number(this.formGroup.value.oldBusCptAmo) > 0 ? this.formGroup.value.oldBusCptAmo : '0' : '0',
        busCptAmo: this.formGroup.value.busCptAmo ? this.formGroup.value.busCptAmo : '0',
        oldEstMonincAmo: this.formGroup.value.estMonincAmo ? Number(this.formGroup.value.oldEstMonincAmo) > 0 ? this.formGroup.value.oldEstMonincAmo : '0' : '0',
        estMonincAmo: this.formGroup.value.estMonincAmo ? this.formGroup.value.estMonincAmo : '0',
        taxtyp: this.formGroup.value.taxTyp,
        reqoffCod: this.toKenId.id.userOfficeCode,
        ofrCod: this.toKenId.id.userId.substring(2, 8),
        ltoFlg: this.formGroup.value.ltoFlg,
        aprSta: this.type == 'C' ? null : this.formGroup.value.aprSta,
        aprDat: aprDat ? aprDat : null,
        aprRemark: this.formGroup.value.aprRemark ? this.formGroup.value.aprRemark : null,
        loginOffCod: this.toKenId.id.userOfficeCode,
        deUserId: this.toKenId.id.userId,
      }
      console.log('LOG <<< create body >>>::', body);
      this.httpService.saveFormCd01(body).subscribe((data) => {
        console.log('LOG <<< create saveFormCd01 >>>::', data);
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
    if (this.formGroup.value.titCod || this.formGroup.value.braNam || this.formGroup.value.engNam || this.formGroup.value.busFirDat || this.formGroup.value.busCptAmo || this.formGroup.value.estMonincAmo) {
      if (this.formGroup.value.busFirDat) {
        if ((!this.booleanEditBusFirDat && this.formGroup.value.busFirDat.length == 10) || (this.booleanEditBusFirDat && this.formGroup.value.busFirDat.length == 8)) {
          let data = this.formGroup.value.busFirDat.length == 8 ? this.formGroup.value.busFirDat.substring(0, 2) + '/' + this.formGroup.value.busFirDat.substring(2, 4) + '/' + this.formGroup.value.busFirDat.substring(4, 8) : this.formGroup.value.busFirDat
          let dateEN = new Date(this.getFormatDateTHtoEN(data, 'YYYY-MM-DD'));
          if (Object.prototype.toString.call(dateEN) === "[object Date]") {
            if (isNaN(dateEN.getTime())) { // d.getTime() or d.valueOf() will also work
              console.log(data, 'LOG <<< date if >>>::', dateEN.getTime(), isNaN(dateEN.getTime()));
              this.formInvalid = false;
              this.mas = 'วันเดือนปีที่บันทึกไม่ถูกต้องตามปีปฏิทิน'
              this.modalSave.show();
              return this.formInvalid;
            }
          }
        } else {
          this.formInvalid = false;
          this.mas = 'วันเดือนปีที่บันทึกจะต้องเป็นเลข 8 หลัก'
          this.modalSave.show();
          return this.formInvalid;
        }
      }
      this.formInvalid = true;
      return this.formInvalid;
    } else {
      this.formInvalid = false;
      this.mas = 'ต้องกรอกอย่างน้อย 1 ช่อง'
      this.modalSave.show();
      return this.formInvalid;
    }
  }

  getFormatDateTHtoEN(date: any, format: string): any {
    const thDate = moment(date, 'DD/MM/YYYY');
    thDate.locale('en-US');
    return thDate.add(-543, 'year').format(format);
  }

  onAccept() {
    this.router.navigate(['cd01/search'], { queryParams: { nid: this.nid } });
  }

  getFormatDate(date: any) {
    const format = moment(date).format('YYYY-MM-DD');
    return this.commonService.getFormatDateTH(format);
  }

  editBusFirDat() {
    this.booleanEditBusFirDat = true;
  }
}