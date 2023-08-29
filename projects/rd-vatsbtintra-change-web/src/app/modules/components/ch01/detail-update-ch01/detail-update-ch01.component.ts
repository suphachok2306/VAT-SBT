import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CommonService } from 'projects/rd-vatsbtintra-change-web/src/app/service/common.service';
import { HttpService } from 'projects/rd-vatsbtintra-change-web/src/app/service/http.service';
import { CustomValidator } from 'projects/rd-vatsbtintra-change-web/src/app/shared/config/custom-validator';
import { environment } from 'projects/rd-vatsbtintra-change-web/src/environments/environment';

@Component({
  selector: 'app-detail-update-ch01',
  templateUrl: './detail-update-ch01.component.html',
  styleUrls: ['./detail-update-ch01.component.scss']
})
export class DetailUpdateCh01Component implements OnInit {
  intraUrl = environment.intraUrl;
  @ViewChild('modal') modal!: ModalDirective;
  @ViewChild('modalSave') modalSave!: ModalDirective;
  mas!: string
  formGroup!: FormGroup;
  nid!: string;
  type!: string;
  regTst!: any;
  disabledFormC!: boolean;
  disabledFormU!: boolean;
  formInvalid = false;
  taxtyp!: string;
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
    this.regTst = this.routerActive.snapshot.queryParams.regTst;
    console.log(this.type, 'LOG <<< nid tpye >>>::', this.nid)
    this.getType();
    this.buildForm();
    this.getTaxpayerInfo();
  }

  ngOnInit(): void {
    this.checkDefaultAprSta();
    const snap = this.routerActive.snapshot;
    console.log(this.type, 'LOG <<< snap >>>::', snap)
  }

  checkDefaultAprSta() {
    if (this.type == 'U') {
      this.formGroup.controls.aprSta.setValue('0');
    }
  }

  private getType() {
    if (this.type == 'C') {
      this.disabledFormC = true;
    } else {
      this.disabledFormU = true;
      this.disabledFormC = true;
    }
  }

  getTaxpayerInfo() {
    this.httpService.getTaxpayerInfoPp('', '', this.nid, '').subscribe((data) => {
      if (data.sbtStatus == 'Y') {
        this.taxtyp = 'S';
        this.formGroup.controls.vatStatus.setValue('');
        this.formGroup.controls.sbtStatus.setValue('1');
      } else {
        this.taxtyp = 'V';
        this.formGroup.controls.vatStatus.setValue('1');
        this.formGroup.controls.sbtStatus.setValue('');
      }
      this.getDisplay();
    })
  }

  setTaxpayer(data: any) {
    this.formGroup.controls.oldNid.setValue(data.oldNid.replace(/\s/g, ""));
    this.formGroup.controls.sendForSta.setValue(data.forSta);
    this.formGroup.controls.oldBraTitle.setValue(data.oldBraTitle);
    this.formGroup.controls.oldBraNam.setValue(data.oldBraNam);
    this.formGroup.controls.oldFullName.setValue(data.oldFullName);
    this.formGroup.controls.roomNo.setValue(data.roomNo);
    this.formGroup.controls.floorNo.setValue(data.floorNo);
    this.formGroup.controls.addNo.setValue(data.addNo);
    this.formGroup.controls.posCod.setValue(data.posCod);
    if (data.nid == '-') {
      this.formGroup.controls.nid.setValue('');
    } else {
      this.formGroup.controls.nid.setValue(data.nid);
    }
    this.formGroup.controls.taxTyp.setValue(data.taxTyp);
    this.formGroup.controls.aprSta.setValue('0');
    this.formGroup.controls.reqOffCod.setValue(data.reqOffCod);
    this.formGroup.controls.ofrCod.setValue(data.ofrCod);
    this.formGroup.controls.ltoFlg.setValue(data.ltoFlg);
    this.formGroup.controls.loginOffCod.setValue(data.reqOffCod);
    this.formGroup.controls.deUserId.setValue(data.ofrCod);
    this.formGroup.controls.aprSta.setValue(data.aprDat ? this.getFormatDate(data.aprDat) : null);
    this.formGroup.controls.aprRemark.setValue(data.aprRemark);
  }

  getDisplay() {
    this.httpService.getDisplayCh01(this.regTst).subscribe((data) => {
      console.log('LOG <<< getDisplay update >>>::', data);
      this.setTaxpayer(data.responseData[0]);
    }, (error) => {
    });
  }

  buildForm() {
    this.formGroup = this.fb.group({
      oldNid: [null],
      sendForSta: [null],
      oldBraTitle: [null],
      oldBraNam: [null],
      oldFullName: [null],
      roomNo: [null],
      floorNo: [null],
      addNo: [null],
      posCod: [null],
      nid: ['', [Validators.required, Validators.min(13), CustomValidator.numberValidator, CustomValidator.nidValidator]],
      taxTyp: [null],
      reqOffCod: [null],
      ofrCod: [null],
      ltoFlg: [null],
      vatStatus: [null],
      sbtStatus: [null],
      aprSta: [null],
      aprDat: [null],
      aprRemark: [null],
      loginOffCod: [null],
      deUserId: [null]
    });
  }

  save() {
    // this.ckeckNid();
    // console.log('LOG <<< getDisplay body >>>::', this.ckeckNid());
    if (!this.validateForm()) {
      if (this.formGroup.value.oldNid == this.formGroup.value.nid) {
        this.mas = 'เลขประจำตัวผู้เสียภาษีอากรตรงกัน'
        this.modalSave.show();
        return
      }
      let aprDat = null;
      if (this.formGroup.value.aprDat) {
        if (this.formGroup.value.aprDat.length == 8) {
          aprDat = this.formGroup.value.aprDat.substring(0, 2) + '/' + this.formGroup.value.aprDat.substring(2, 4) + '/' + this.formGroup.value.aprDat.substring(4, 8);
        }
      }
      let body = {
        oldNid: this.formGroup.value.oldNid,//1
        sendForSta: this.type == 'C' ? 'EA' : this.formGroup.value.aprSta == '1' ? 'MA' : 'CA',//2
        oldBraTitle: this.formGroup.value.oldBraTitle,//3
        oldBraNam: this.formGroup.value.oldBraNam, //4
        oldFullName: this.formGroup.value.oldFullName,//5
        roomNo: this.formGroup.value.roomNo,//6
        floorNo: this.formGroup.value.floorNo,//7
        addNo: this.formGroup.value.addNo,//8
        posCod: this.formGroup.value.posCod,//9
        nid: this.formGroup.value.nid,//10
        taxtyp: this.formGroup.value.taxTyp, //11
        reqOffCod: this.toKenId.id.userOfficeCode, //12
        ofrCod: this.toKenId.id.userId.substring(2, 8), //13
        ltoFlg: this.formGroup.value.ltoFlg, //14
        aprSta: this.formGroup.value.aprSta, //15
        aprDat: aprDat,//16
        aprRemark: this.formGroup.value.aprRemark,//17
        loginOffCod: this.toKenId.id.userOfficeCode,//18
        deUserId: this.toKenId.id.userId,//19
      }
      console.log('LOG <<< getDisplay body >>>::', body);
      this.httpService.saveFormCh01(body).subscribe((data) => {
        if (data.responseCode == 'OK') {
          this.modal.show();
        } else {
          this.mas = 'บันทึกไม่สำเร็จ'
          this.modalSave.show();
        }
      });
    }

  }

  private ckeckNid(): boolean {
    if (this.formGroup.value.oldNid == this.formGroup.value.nid) {
      this.mas = 'ไม่สามารถบันทึกได้เนื่องจาก เลขประจำตัวผู้เสียภาษีอากรตรงกัน'
      this.modalSave.show();
      return true;
    } else {
      return false;
    }
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
    this.router.navigate(['ch01/search']);
  }

  logOut() {
    if (this.type == 'C') {
      window.location.href = this.intraUrl + 'rd-vatsbtintra-dashboard-web/request-form';
    } else {
      window.location.href = this.intraUrl + 'rd-vatsbtintra-dashboard-web/consider-request/changes-by-staff';
    }
  }

  validateForm() {
    this.formInvalid = false;
    if (this.formGroup?.invalid) {
      this.formInvalid = true;
      this.mas = 'เลขประจำตัวผู้เสียภาษีอากรไม่ถูกต้อง'
      this.modalSave.show();
      return this.formInvalid;
    } else {
      this.formInvalid = false;
      return this.formInvalid;
    }
  }

  onAccept() {
    this.router.navigate(['ch01/search'], { queryParams: { nid: this.nid } });
  }

  getFormatDate(date: any) {
    const format = moment(date).format('YYYY-MM-DD');
    return this.commonService.getFormatDateTH(format);
  }
}