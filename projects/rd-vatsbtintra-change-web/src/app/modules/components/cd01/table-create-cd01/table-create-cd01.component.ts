import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'projects/rd-vatsbtintra-change-web/src/app/service/http.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModalService } from 'projects/rd-vatsbtintra-change-web/src/app/service/alert-modal.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import * as moment from 'moment';
import { CommonService } from 'projects/rd-vatsbtintra-change-web/src/app/service/common.service';
import { environment } from 'projects/rd-vatsbtintra-change-web/src/environments/environment';
import { CustomValidator } from 'projects/rd-vatsbtintra-change-web/src/app/shared/config/custom-validator';

@Component({
  selector: 'app-table-create-cd01',
  templateUrl: './table-create-cd01.component.html',
  styleUrls: ['./table-create-cd01.component.scss']
})
export class TableCreateCd01Component implements OnInit {
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
      this.formGroup.controls.nid.setValue('0105515000918');
    }
  }

  getSearch() {
    if (!this.validateForm()) {
      this.httpService.getTaxpayerInfoPp('', '', this.formGroup.value.nid, '').subscribe((data) => {
        console.log(data.sbtStatus, data.vatStatus);
        if (data.sbtStatus == 'Y') {
          this.taxtyp = 'S';
          this.httpService.getSBTInfoCd01(this.formGroup.value.nid).subscribe((data) => {
            this.listOfData = [...data.responseData];
            this.setItemSeleteList();
          });
        } else {
          this.taxtyp = 'V';
          this.httpService.getVATInfoCd01(this.formGroup.value.nid).subscribe((data) => {
            this.listOfData = [...data.responseData];
            this.setItemSeleteList();
          }, (error) => {
          });
        }
      });
    }
  }

  private setItemSeleteList() {
    this.listOfData.forEach((item: any) => {
      item.checked = false;
      item.disabled = false;
    });
    this.chkForStaCd01();
  }

  chkForStaCd01() {
    for (let index = 0; index < this.listOfData.length; index++) {
      this.httpService.chkForStaCd01(this.listOfData[index].branchNo, this.listOfData[index].nid).subscribe(data => {
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
      nid: ['', [Validators.required, Validators.min(13), CustomValidator.numberValidator, CustomValidator.nidValidator, CustomValidator.nid09912]],
    });
  }

  clear() {
    this.formGroup.controls.nid.setValue(null);
    this.listOfData = [];
  }

  checkbox1(i: any): void {
    this.listOfData[i].checked = !this.listOfData[i].checked;
  }

  create() {
    for (let index = 0; index < this.listOfData.length; index++) {
      if (this.listOfData[index].checked) {
        this.length++
      }
    }
    this.modal.show();
  }

  back() {
    this.router.navigate(['cd01/search']);
  }

  onAccept() {
    let length = 0;
    for (let index = 0; index < this.listOfData.length; index++) {
      if (this.listOfData[index].checked) {
        let body = {
          nid: this.listOfData[index].nid,
          braNo: this.listOfData[index].branchNo,
          sendForSta: 'AA',
          oldTitCod: this.listOfData[index].titleCode,
          oldBraNam: this.listOfData[index].branchName,
          titCod: null,
          braNam: null,
          oldEngNam: this.listOfData[index].juristicEngName,
          engNam: null,
          oldBusFirDat: this.listOfData[index].businessFirstDate,
          busFirDat: null,
          oldBusCptAmo: this.listOfData[index].businessCapitalAmount ? this.listOfData[index].businessCapitalAmount : '0',
          busCptAmo: '0',
          oldEstMonincAmo: this.listOfData[index].estimateMonthIncomeAmount ? this.listOfData[index].estimateMonthIncomeAmount : '0',
          estMonincAmo: '0',
          taxtyp: this.taxtyp,
          reqoffCod: this.toKenId.id.userOfficeCode,
          ofrCod: this.toKenId.id.userId.substring(2, 8),
          ltoFlg: this.listOfData[index].ltoStatus,
          aprSta: null,
          aprDat: null,
          aprRemark: null,
          loginOffCod: this.toKenId.id.userOfficeCode,
          deUserId: this.toKenId.id.userId,
        }
        this.httpService.saveFormCd01(body).subscribe((data) => {
          console.log('LOG <<< create saveFormCd01 >>>::', data);
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

}
