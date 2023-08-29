import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { HttpService } from 'projects/rd-vatsbtintra-change-web/src/app/service/http.service';

@Component({
  selector: 'app-create-dt01',
  templateUrl: './create-dt01.component.html',
  styleUrls: ['./create-dt01.component.scss']
})
export class CreateDt01Component implements OnInit {

  @ViewChild('modal') modal!: ModalDirective;
  @ViewChild('modalOnSave') modalOnSave!: ModalDirective;
  @ViewChild('modalSave') modalSave!: ModalDirective;
  formInvalid = false;
  public mas!: string;
  public dt01Form!: FormGroup;
  public dataTemp!: Array<any>;
  public listOfData: any = [];
  taxtyp!: string;
  toKenId = JSON.parse(JSON.stringify(this.httpService.getDecodeTokenAccessToken()));
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpService: HttpService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.dt01Form = this.fb.group({
      nid: '',
      fullName: '',
      RoomNo: '',
      floorNo: '',
      addNo: '',
      posCod: '',
      braNo: '',
    });
  }


  onSearch() {
    this.getTaxpayerInfo();
  }

  onExit() {
    this.router.navigate(['/dt01/search']);
  }

  genParam(obj: any) {
    console.log(' obj  : ', obj);
    const body = {
      nid: obj.pin,
      braNo: obj.branchNo.toString(),
      sendForSta: 'AA',
      braTitle: obj.branchTitleName,
      braNam: obj.branchName,
      fullName: obj.branchTitleName + ' ' + obj.branchName,
      roomNo: obj.roomNo,
      floorNo: obj.floorNo,
      addNo: obj.addNo,
      posCod: obj.postalCode,
      braRoomNo: null,
      brafloorNo: null,
      braAddNo: null,
      braPosCod: null,
      taxtyp: this.taxtyp,
      reqoffCod: this.toKenId.id.userOfficeCode,
      ofrCod: this.toKenId.id.userId.substring(2, 8),
      ltoFlg: obj.ltoStatus,
      aprSta: null,
      aprDat: null,
      aprRemark: null,
      loginOffCod: this.toKenId.id.userOfficeCode,
      deUserId: this.toKenId.id.userId,
    };
    return body;
  }

  onAccept() {
    for (let i = 0; i < this.listOfData.length; i++) {
      if (this.listOfData[i].checked) {
        const body = this.genParam(this.listOfData[i]);
        console.log('body save form : ', body);

        this.httpService.savePP05TCONCD01(body).subscribe(data => {
          console.log('data savePP05TCONCD01 : ', data);
          if (data.responseCode === 'OK') {
            this.onSearch();
          } else {
            this.mas = 'บันทึกไม่สำเร็จ';
            this.modalOnSave.show();
          }
        });
      }
    }
    this.modal.hide();
  }

  onCancle() {
    this.modal.hide();
  }

  onCreate() {
    this.modal.show();
  }

  onClear() {
    this.dt01Form.reset();
    this.buildForm();
    this.listOfData = [];
  }

  getTaxpayerInfo() {
    this.httpService.getTaxpayerInfoPp('', '', this.dt01Form.controls.nid.value, '').subscribe((data) => {
      console.log('data: ', data);
      this.dt01Form.controls.nid.setValue(data.tin);
      if (data.sbtStatus === 'Y') {
        this.taxtyp = 'S';
        this.httpService.getSBTInfoCd01(this.dt01Form.controls.nid.value).subscribe((data) => {
          console.log('data sbt : ', data);
          this.listOfData = [...data.responseData];
          this.setItemSeleteList();
        });
      } else {
        this.taxtyp = 'V';
        this.httpService.getVATInfoCd01(this.dt01Form.controls.nid.value).subscribe((data) => {
          console.log('data vat : ', data);
          this.listOfData = [...data.responseData];
          this.setItemSeleteList();
        }, (error) => {
        });
      }
    },
      (error) => {

      })
  }

  private setItemSeleteList() {
    this.listOfData.forEach((item: any) => {
      item.checked = false;
      item.disabled = false;
    });
    this.chkForStaDt01();
  }

  chkForStaDt01() {
    for (let index = 0; index < this.listOfData.length; index++) {
      this.httpService.chkForStaPP05(this.listOfData[index].branchNo, this.listOfData[index].nid).subscribe(data => {
        console.log('data chkForStaPP05 : ', data);
        if (data.responseCode === "ERROR") {
          this.listOfData[index].disabled = false;
        } else {
          if (data.responseCode === "enable") {
            this.listOfData[index].disabled = false;
          } else {
            this.listOfData[index].disabled = true;
          }
        }

      });
    }
  }

  checkbox(i: any): void {
    this.listOfData[i].checked = !this.listOfData[i].checked;
  }

  onHide() {
    this.modalOnSave.hide();
    this.onSearch();
  }

  validateForm(): any {
    this.formInvalid = false;
    if (this.dt01Form?.invalid) {
      this.formInvalid = true;
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
