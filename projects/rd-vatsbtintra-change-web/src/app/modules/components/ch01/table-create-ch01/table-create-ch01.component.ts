import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { HttpService } from 'projects/rd-vatsbtintra-change-web/src/app/service/http.service';
import { environment } from 'projects/rd-vatsbtintra-change-web/src/environments/environment';

@Component({
  selector: 'app-table-create-ch01',
  templateUrl: './table-create-ch01.component.html',
  styleUrls: ['./table-create-ch01.component.scss']
})
export class TableCreateCh01Component implements OnInit {
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
    private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
    if (environment.env == 'sit') {
      this.formGroup.controls.nid.setValue('0105515000918');
    }
  }

  getSearch() {
    this.httpService.getTaxpayerInfoPp('', '', this.formGroup.value.nid, '').subscribe((data) => {
      console.log(data.sbtStatus, data.vatStatus);
      if (data.sbtStatus == 'Y') {
        this.taxtyp = 'S';
        this.httpService.getSBTInfoCh01(this.formGroup.value.nid, '0').subscribe((data) => {
          this.listOfData = [...data.responseData];
          this.setItemSeleteList();
        });
      } else {
        this.taxtyp = 'V';
        this.httpService.getVATInfoCh01(this.formGroup.value.nid, '0').subscribe((data) => {
          this.listOfData = [...data.responseData];
          this.setItemSeleteList();
        }, (error) => {
        });
      }
    });
  }

  private setItemSeleteList() {
    this.listOfData.forEach((item: any) => {
      item.checked = false;
      item.disabled = false;
    });
    this.chkForStaCh01();
  }

  chkForStaCh01() {
    for (let index = 0; index < this.listOfData.length; index++) {
      this.httpService.chkForStaCh01(this.listOfData[index].nid).subscribe(data => {
        console.log('LOG >>>>>>>>> chkForStaCh01 data >>>>>>>::', data.response.responseStatus);
        if (data.response.responseStatus == "false") {
          this.listOfData[index].disabled = false;
        } else {
          if (data.response.responseStatus == "enable") {
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
      nid: ['']
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
    this.router.navigate(['ch01/search']);
  }

  onAccept() {
    let length = 0;
    for (let index = 0; index < this.listOfData.length; index++) {
      if (this.listOfData[index].checked) {
        let fullName = this.listOfData[index].branchTitleName + ' ' + this.listOfData[index].branchName;
        let body = {
          oldNid: this.formGroup.value.nid,//1
          sendForSta: 'AA',//2
          oldBraTitle: this.listOfData[index].branchTitleName,//3
          oldBraNam: this.listOfData[index].branchName, //4
          oldFullName: fullName.substring(0, 160),//5
          roomNo: this.listOfData[index].roomNo,//6
          floorNo: this.listOfData[index].floorNo,//7
          addNo: this.listOfData[index].addNo,//8
          posCod: this.listOfData[index].postalCode,//9
          nid: '-',//10
          taxtyp: this.taxtyp, //11
          reqOffCod: this.toKenId.id.userOfficeCode, //12
          ofrCod: this.toKenId.id.userId.substring(2, 8), //13
          ltoFlg: this.listOfData[index].ltoStatus, //14
          aprSta: '0', //15
          aprDat: null,//16
          aprRemark: null,//17
          loginOffCod: this.toKenId.id.userOfficeCode,//18
          deUserId: this.toKenId.id.userId,//19
        }
        console.log('LOG <<< create body >>>::', body);
        this.httpService.saveFormCh01(body).subscribe((data) => {

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

  onCancle() {
    this.modal.hide();
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
