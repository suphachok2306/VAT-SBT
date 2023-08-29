import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { HttpService } from 'projects/rd-vatsbtintra-change-web/src/app/service/http.service';
import { environment } from 'projects/rd-vatsbtintra-change-web/src/environments/environment';

@Component({
  selector: 'app-detail-dt01',
  templateUrl: './detail-dt01.component.html',
  styleUrls: ['./detail-dt01.component.scss']
})
export class DetailDt01Component implements OnInit {
  intraUrl = environment.intraUrl;
  @ViewChild('modal') modal!: ModalDirective;
  public mas!: string;
  dt01Form!: FormGroup;
  role!: any;
  taxtyp!: string;
  forSta!: string;
  toKenId = JSON.parse(JSON.stringify(this.httpService.getDecodeTokenAccessToken()));
  constructor(
    private httpService: HttpService,
    private routerActive: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    let snap = this.routerActive.snapshot.queryParams;

    // this.routerActive.queryParams.subscribe(params => {
    console.log(snap);
    this.initData(snap)
    // });
    // if (environment.env == 'sit') {
    //   this.dt01Form.controls.nid.setValue('0105515000918');
    // }
  }

  getDisplay() {
    this.httpService.getDisplayPP05(this.dt01Form.controls.regTst.value).subscribe((data) => {
      console.log('getDisplay >>>::', data);
      if (data.responseCode === 'OK') {
        this.dt01Form.controls.reqOffCod.patchValue(data.responseData.reqOffCod);
        this.dt01Form.controls.ofrCod.patchValue(data.responseData.ofrCod);
        this.dt01Form.controls.braNo.patchValue(data.responseData.braNo);
        this.dt01Form.controls.braPosCod.patchValue(data.responseData.braPosCod);
        this.dt01Form.controls.braFloorNo.patchValue(data.responseData.braFloorNo);
        this.dt01Form.controls.braAddNo.patchValue(data.responseData.braAddNo);
        this.dt01Form.controls.braRoomNo.patchValue(data.responseData.braRoomNo);
        this.dt01Form.controls.loginOffCod.patchValue(data.responseData.loginOffCod);
        this.dt01Form.controls.fullName.patchValue(data.responseData.fullName);
        this.dt01Form.controls.braTitle.patchValue(data.responseData.braTitle);
        this.dt01Form.controls.braNam.patchValue(data.responseData.braNam);
        this.dt01Form.controls.ltoFlg.patchValue(data.responseData.ltoFlg);
        this.dt01Form.controls.deUserId.patchValue(data.responseData.deUserId);
        this.dt01Form.controls.roomNo.patchValue(data.responseData.roomNo);
        this.dt01Form.controls.taxTyp.patchValue(data.responseData.taxTyp);
        this.dt01Form.controls.addNo.patchValue(data.responseData.addNo);
        this.dt01Form.controls.posCod.patchValue(data.responseData.posCod);
        this.dt01Form.controls.floorNo.patchValue(data.responseData.floorNo);

      }
    });
  }

  buildForm() {
    this.dt01Form = this.fb.group({
      nid: [null],
      roomNo: [null],
      floorNo: [null],
      addNo: [null],
      posCod: [null],
      braNo: [null],
      braRoomNo: [null],
      braFloorNo: [null],
      braAddNo: [null],
      braPosCod: [null, [Validators.required]],
      taxTyp: [null],
      reqOffCod: [null],
      ofrCod: [null],
      regTst: [null],
      loginOffCod: [null],
      fullName: [null],
      braTitle: [null],
      braNam: [null],
      ltoFlg: [null],
      deUserId: [null],
    });
  }

  initData(data: any) {
    console.log('initData', data);
    if (data) {
      this.dt01Form.controls.braNo.setValue(data.braNo);
      this.dt01Form.controls.braRoomNo.setValue(data.braRoomNo);
      this.dt01Form.controls.braFloorNo.setValue(data.braFloorNo);
      this.dt01Form.controls.braAddNo.setValue(data.braAddNo);
      this.dt01Form.controls.braPosCod.setValue(data.braPosCod);
      this.dt01Form.controls.nid.setValue(data.nid);
      this.dt01Form.controls.regTst.setValue(moment(data.regTst).format('YYYY-MM-DD HH:mm:ss.SSSSSS'));
      this.dt01Form.controls.taxTyp.setValue(data.taxTyp);
      this.forSta = data.forSta;
      if (this.dt01Form.controls.taxTyp.value === 'S') {
        document?.getElementById('sbt')?.setAttribute('value', '1');
      } else {
        document?.getElementById('vat')?.setAttribute('value', '1');
      }
      this.getDisplay();
      console.log('FROM : ', this.dt01Form);
    }

  }


  onExit() {
    this.router.navigate(['/dt01/search']);
  }

  onClear() {
    this.dt01Form.controls.nid.reset();
    this.dt01Form.controls.braRoomNo.reset();
    this.dt01Form.controls.braFloorNo.reset();
    this.dt01Form.controls.braAddNo.reset();
    this.dt01Form.controls.braPosCod.reset();
  }

  onLogOut() {
    window.location.href = this.intraUrl + 'rd-vatsbtintra-dashboard-web/request-form';
  }

  onSave() {
    const body = this.genParam(this.dt01Form.value);
    console.log('body save form : ', body);
    if (this.dt01Form.invalid) {
      this.mas = 'โปรดบันทึกข้อมูลให้ครบถ้วน';
      this.modal.show();
    } else {
      this.httpService.savePP05TCONCD01(body).subscribe(data => {
        if (data.responseCode === 'OK') {
          this.mas = 'บันทึกข้อมูลเรียบร้อย';
          this.modal.show();
        } else {
          this.mas = 'บันทึกไม่สำเร็จ';
          this.modal.show();
        }
        console.log('data savePP05TCONCD01 : ', data);
      });
    }

  }

  genParam(obj: any) {
    if (!obj.floorNo || obj.floorNo === '') {
      obj.floorNo = '-';
    }
    if (!obj.roomNo || obj.roomNo === '') {
      obj.roomNo = '-';
    }
    if (!obj.addNo || obj.addNo === '') {
      obj.addNo = '-';
    }
    if (!obj.posCod || obj.posCod === '') {
      obj.posCod = '-';
    }
    if (obj.braFloorNo === '') {
      obj.braFloorNo = null;
    }
    const body = {
      nid: obj.nid,
      braNo: obj.braNo.toString(),
      sendForSta: 'EA',
      braTitle: obj.braTitle,
      braNam: obj.braNam,
      fullName: obj.fullName,
      roomNo: obj.roomNo,
      floorNo: obj.floorNo,
      addNo: obj.addNo,
      posCod: obj.posCod,
      braRoomNo: obj.braRoomNo,
      brafloorNo: obj.braFloorNo,
      braAddNo: obj.braAddNo,
      braPosCod: obj.braPosCod,
      taxtyp: obj.taxTyp,
      reqoffCod: this.toKenId.id.userOfficeCode,
      ofrCod: this.toKenId.id.userId.substring(2, 8),
      ltoFlg: obj.ltoFlg,
      aprSta: null,
      aprDat: null,
      aprRemark: null,
      loginOffCod: this.toKenId.id.userOfficeCode,
      deUserId: this.toKenId.id.userId,
    };
    return body;
  }
  onHide() {
    this.modal.hide();
    let nid = this.dt01Form.controls.nid.value
    this.router.navigate(['/dt01/search'],
      { skipLocationChange: true, queryParams: { nid } });
  }


}
