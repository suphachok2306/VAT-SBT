import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidator } from 'projects/rd-vatsbtintra-change-web/src/app/shared/config/custom-validator';
import { HttpService } from 'projects/rd-vatsbtintra-change-web/src/app/service/http.service';
import * as moment from 'moment';
import { CommonService } from 'projects/rd-vatsbtintra-change-web/src/app/service/common.service';
import { environment } from 'projects/rd-vatsbtintra-change-web/src/environments/environment';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-search-cd01',
  templateUrl: './search-cd01.component.html',
  styleUrls: ['./search-cd01.component.scss']
})
export class SearchCd01Component implements OnInit {
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
    if (this.nid) {
      this.formGroup.controls.nid.setValue(this.nid);
      this.getSearch();
    }
    if (environment.env == 'sit') {
      this.formGroup.controls.nid.setValue('0105515000918');
    }
  }

  getSearch() {
    if (!this.validateForm()) {
      this.nid = this.formGroup.value.nid;
      this.httpService.getSearchCd01(this.formGroup.value.nid, this.toKenId.id.userOfficeCode, this.formGroup.value.searchStatus, this.appr).subscribe((data) => {
        console.log(data.responseData.length);
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
          }
        }
      });
    };
  }

  buildForm() {
    this.formGroup = this.fb.group({
      nid: ['', [Validators.required, Validators.min(13), CustomValidator.numberValidator, CustomValidator.nidValidator, CustomValidator.nid09912]],
      searchStatus: ['TL'],
    });
  }

  createCd01(data: any) {
    if (this.appr == 'n') {
      this.router.navigate(['cd01/detail-u'], { queryParams: { nid: this.nid, type: 'C', braNo: data.braNo } });
    } if (this.appr == 'y') {
      this.router.navigate(['cd01/detail-u'], { queryParams: { nid: this.nid, type: 'U', braNo: data.braNo } });
    }
  }

  create() {
    this.router.navigate(['cd01/create']);
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
      let nid = this.formGroup.controls.nid?.value
      if (nid) {
        const nidRaw = nid.split('-').join('');
        if (nidRaw.length === 13) {
          for (var i = 0, sum = 0; i < 12; i++) {
            sum += parseFloat(nid.charAt(i)) * (13 - i);
          }
          if ((11 - sum % 11) % 10 !== parseFloat(nid.charAt(12))) {
            if (nid.charAt(12)) {
              this.listOfData = [];
              this.mas = 'เลขประจำตัวผู้เสียภาษีอากร (13 หลัก) จะต้องบันทึกเป็นตัวเลขจำนวน 13 หลัก'
              this.modalSave.show();
              return this.formInvalid;
            }
          } else {
            this.formInvalid = false;
            return this.formInvalid;
          }
        } else {
          this.listOfData = [];
          this.mas = 'เลขประจำตัวผู้เสียภาษีอากร (13 หลัก) จะต้องบันทึกเป็นตัวเลขจำนวน 13 หลัก'
          this.modalSave.show();
          return this.formInvalid;
        }
      } else {
        this.listOfData = [];
        this.mas = 'โปรดบันทึก'
        this.modalSave.show();
        return this.formInvalid;
      }
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
