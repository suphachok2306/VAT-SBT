import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CommonService } from 'projects/rd-vatsbtintra-change-web/src/app/service/common.service';
import { HttpService } from 'projects/rd-vatsbtintra-change-web/src/app/service/http.service';
import { environment } from 'projects/rd-vatsbtintra-change-web/src/environments/environment';

@Component({
  selector: 'app-search-rp01',
  templateUrl: './search-rp01.component.html',
  styleUrls: ['./search-rp01.component.scss']
})
export class SearchRp01Component implements OnInit {
  @ViewChild('modalSave') modalSave!: ModalDirective;
  mas!: string;
  formGroup!: FormGroup;
  formInvalid = false;
  dataLength!: '2';
  nid!: string;
  appr!: any;
  toKenId = JSON.parse(JSON.stringify(this.httpService.getDecodeTokenAccessToken()));
  public listOfData: any = [];
  public listStatus: any = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpService: HttpService,
    private routerActive: ActivatedRoute,
    private commonService: CommonService,

  ) {
    this.buildForm();
    this.nid = this.routerActive.snapshot.queryParams.nid;
    this.appr = sessionStorage.getItem('appr');
    console.log('log appr >>:', this.appr);
    if (this.appr == 'n') {
      this.listStatus = [
        { name: 'ทั้งหมด', value: 'TL' },
        { name: 'สร้างแบบแล้ว', value: 'AA' },
        { name: 'บันทึกแบบแล้ว', value: 'EA' },
      ];
    } else {
      this.listStatus = [
        { name: 'ทั้งหมด', value: 'TL' },
        { name: 'บันทึกแบบแล้ว', value: 'EA' },
        { name: 'ลงนามการอนุมัติแล้ว', value: 'MA' },
        { name: 'ลงนามไม่อนุมัติแล้ว', value: 'CA' },
      ];
    }
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
    if (this.nid) {
      this.formGroup.controls.nid.setValue(this.nid);
      this.getSearch();
    }
  }

  getSearch() {
    if (!this.validateForm()) {
      this.nid = this.formGroup.value.nid;
      let data = {
        appr: this.appr,
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
      this.httpService.getSearchRp01(data).subscribe((data) => {
        console.log(data.responseData);
        if (data.responseCode == 'ERROR') {
          this.mas = 'ไม่พบข้อมูลตรงตามเงื่อนไขที่กำหนด'
          this.modalSave.show();
          this.listOfData = [];
        } else {
          if (data.responseData.length == 0) {
            this.mas = 'ไม่พบข้อมูลตรงตามเงื่อนไขที่กำหนด'
            this.modalSave.show();
            this.listOfData = [];
          } else {
            this.listOfData = [...data.responseData];
            this.listOfData.forEach(async (data: any) => {
              data.disName = await this.getDisName(data).then((res) => {
                return res;
              });
            });
          }
        }
      });
    };
  }

  async getDisName(data: any) {
    let name: any;
    if (data.taxTyp == 'S') {
      name = this.httpService.getSBTInfoCh01(data.oldNid, data.oldBraNo).subscribe((data) => {
        return data.responseData[0].branchTitleName + ' ' + data.responseData[0].branchName;
      });
    } else {
      name = this.httpService.getVATInfoCh01(data.oldNid, data.oldBraNo).toPromise().then(result => {
        return result.responseData[0].branchTitleName + ' ' + result.responseData[0].branchName;
      });
    }
    return name;
  }

  buildForm() {
    this.formGroup = this.fb.group({
      searchStatus: ['TL', [Validators.required]],
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
      nid: [''],
    });
  }

  createRp01(data: any) {
    if (this.appr == 'n') {
      this.router.navigate(['rp01/detail-u'], { queryParams: { nid: this.nid ? this.nid : data.oldNid, type: 'C', regTst: data.regTst } });
    } if (this.appr == 'y') {
      this.router.navigate(['rp01/detail-u'], { queryParams: { nid: this.nid ? this.nid : data.oldNid, type: 'U', regTst: data.regTst } });
    }
  }

  create() {
    this.router.navigate(['rp01/create']);
  }

  clear() {
    this.formGroup.controls.nid.setValue(null);
    this.formGroup.controls.searchStatus.setValue(null);
    this.listOfData = [];
  }

  validateForm(): any {
    this.formInvalid = false;
    if (this.formGroup?.invalid) {
      this.formInvalid = true;
      this.listOfData = [];
      this.mas = 'โปรดบันทึก'
      this.modalSave.show();
      return this.formInvalid;
    } else {
      this.formInvalid = false;
      return this.formInvalid;
    }
  }

  getFormatDate(date: any) {
    const format = moment(date).format('YYYY-MM-DD');
    return this.commonService.getFormatDateTH(format);
  }
}
