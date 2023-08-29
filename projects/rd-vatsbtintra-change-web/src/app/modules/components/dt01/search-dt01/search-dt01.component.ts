import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'projects/rd-vatsbtintra-change-web/src/app/service/http.service';
import { CommonService } from 'projects/rd-vatsbtintra-change-web/src/app/service/common.service';
import * as moment from 'moment';
import { environment } from 'projects/rd-vatsbtintra-change-web/src/environments/environment';
import { ModalDirective } from 'ngx-bootstrap-th';
import { CustomValidator } from 'projects/rd-vatsbtintra-change-web/src/app/shared/config/custom-validator';

@Component({
  selector: 'app-search-dt01',
  templateUrl: './search-dt01.component.html',
  styleUrls: ['./search-dt01.component.scss']
})
export class SearchDt01Component implements OnInit {

  @ViewChild('modalSearch') modalSearch!: ModalDirective;
  public searchbt = false;
  public createbt = false;
  public showbt = true;
  public slabel = false;
  public dt01Form!: FormGroup;
  public dataTemp: any = [];
  public listOfData: any = [];
  public mas!: string;
  taxtyp!: string;
  appr!: any;
  toKenId = JSON.parse(JSON.stringify(this.httpService.getDecodeTokenAccessToken()));

  public listStatusSelect: any = [];

  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private httpService: HttpService,
    private commonService: CommonService,
    private routerActive: ActivatedRoute,
  ) {
    this.buildForm();
    this.appr = sessionStorage.getItem('appr');
    if (this.appr === 'y') {
      this.listStatusSelect = [
        { name: 'ทั้งหมด', value: 'TL' },
        { name: 'บันทึกแบบแล้ว', value: 'EA' },
        { name: 'ลงนามการอนุมัติแล้ว', value: 'MA' },
        { name: 'ลงนามไม่อนุมัติแล้ว', value: 'CA' },
      ];
    } else {
      this.listStatusSelect = [
        { name: 'ทั้งหมด', value: 'TL' },
        { name: 'สร้างแบบแล้ว', value: 'AA' },
        { name: 'บันทึกแบบแล้ว', value: 'EA' },
      ];
    }
  }

  ngOnInit(): void {
    const param = this.routerActive.snapshot.queryParams;
    if (param.nid) {
      this.dt01Form.controls.nid.patchValue(param.nid);
      this.onSearch();
    }
  }

  buildForm() {
    this.dt01Form = this.fb.group({
      nid: ['', [Validators.required, Validators.min(13)]],
      searchStatus: 'TL',
      createDate: '',
      fullName: '',
      dispRoomNo: '',
      dispAddNo: '',
      dispFloorNo: '',
      dispPostCode: '',
      dispBraNo: '',
      dispForSta: '',
    });
  }

  onSearch() {
    this.getTaxpayerInfo();
  }

  onCreate() {
    this.router.navigate(['/dt01/create']);
  }

  onClear() {
    this.dt01Form.reset();
    this.buildForm();
  }

  gotoEdit(sta: any, role: any, data: any) {
    console.log('data search  : ', data);
    this.dataTemp.push(data);
    this.dataTemp.forEach((item: any) => {
      item.taxTyp = this.taxtyp;
    });
    if (this.appr === 'y') {
      if (sta === 'MA' || sta === 'CA' || sta === 'EA') {
        this.router.navigate(['/dt01/detail-approve'],
          {
            queryParams: {
              nid: this.dt01Form.controls.nid.value,
              braNo: data.braNo,
              regTst: data.regTst,
              forSta: sta,
            }
          });
      }
    } else {
      if (sta === 'AA' || sta === 'EA') {
        this.router.navigate(['/dt01/detail'],
          {
            queryParams: {
              nid: this.dt01Form.controls.nid.value,
              braNo: data.braNo,
              regTst: data.regTst,
              forSta: sta,
            }
          });
      }
    }
  }

  //'0105515000918'
  getTaxpayerInfo() {
    this.chckNid();
    // this.httpService.getTaxpayerInfoPp('', '', this.dt01Form.controls.nid.value, '').subscribe((data) => {
    //   console.log('data: ', data);
    //   this.dt01Form.controls.nid.setValue(data.tin);
    //   if (data.sbtStatus === 'Y') {
    //     this.taxtyp = 'S';
    //   } else {
    //     this.taxtyp = 'V';
    //   }
    //   this.getSearch();
    // },
    //   (error) => {
    //   this.getSearch();
    //   })
  }

  getSearch() {
    this.httpService.getSearchPP05(this.dt01Form.controls.nid.value, this.toKenId.id.userOfficeCode, this.dt01Form.controls.searchStatus.value, this.appr).subscribe((res) => {
      if (res.responseCode === 'ERROR') {
        this.mas = 'ไม่พบข้อมูลตรงตามเงื่อนไขที่กำหนด';
        this.modalSearch.show();
        this.listOfData = [];
      } else {
        if (res.responseData) {
          this.listOfData = [...res.responseData];
        }
      }
      console.log('res search : ', this.listOfData);
    }, (error) => {

    })
  }

  chckNid() {
    let nid = this.dt01Form.controls.nid?.value
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
            this.modalSearch.show();
          }
        } else {
          this.getSearch();
        }
      } else {
        this.listOfData = [];
        this.mas = 'เลขประจำตัวผู้เสียภาษีอากร (13 หลัก) จะต้องบันทึกเป็นตัวเลขจำนวน 13 หลัก'
        this.modalSearch.show();
      }
    } else {
      this.listOfData = [];
      this.mas = 'โปรดบันทึก'
      this.modalSearch.show();
    }
  }

  getFormatDate(date: any) {
    const format = moment(date).format('YYYY-MM-DD');
    return this.commonService.getFormatDateTH(format);
  }
}
