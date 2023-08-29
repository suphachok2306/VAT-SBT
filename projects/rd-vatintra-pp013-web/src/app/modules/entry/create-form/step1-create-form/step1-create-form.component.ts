import { Location } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertModalService } from 'projects/rd-vatintra-pp013-web/src/app/service/alert-modal.service';
import { Pp013CommonService } from 'projects/rd-vatintra-pp013-web/src/app/service/pp013-common.service';
import { CreateFormComponent } from '../create-form.component';
import { CreateFormService } from '../services/create-form.service';

@Component({
  selector: 'app-step1-create-form',
  templateUrl: './step1-create-form.component.html',
  styleUrls: ['./step1-create-form.component.scss']
})
export class Step1CreateFormComponent implements OnInit {
  public formGroupMain!: FormGroup;
  public formInvalid = false;
  constructor(
    private createFormComponent: CreateFormComponent,
    private createFormService: CreateFormService,
    private alertModalService: AlertModalService,
    private pp013CommonService: Pp013CommonService,
    private renderer: Renderer2,
    private router: Router,
    private location: Location
  ) {
    this.createFormComponent.titlePage = 'แบบคำขอการประกอบกิจการค้าทองคำ (ภ.พ.01.3)';
    this.createFormComponent.step = '1';
    this.location.replaceState('/create-form/form/step1');
  }

  ngOnInit(): void {
    this.formGroupMain = this.createFormService.getForm();
  }

  goBack() {
    this.router.navigate(['/create-form/search']);
  }

  goNext() {
    this.formInvalid = false;
    let message = '';
    let messageField = '';
    let focusField = '';
    if (this.formGroupMain.get('recRegNo')?.invalid) {
      message = 'E0026';
      messageField = 'เลขที่ทะเบียนรับ';
      focusField = 'recRegNo';
      this.formInvalid = true;
    }
    // กรณีข้อมูลเลขทะเบียนรับซ้ำกับในระบบ ให้ระบบแจ้งเตือน “E0514 : เลขที่ทะเบียนรับ ซ้า กรุณากรอกข้อมูลใหม่”

    // กรณีกรอกวันที่รับแบบมากกว่าวันที่ปัจจุบันให้ระบบแจ้งเตือน “E0360 : วันที่ รับแบบ ต้องน้อยกว่าหรือเท่ากับ วันที่ปัจจุบัน”

    else if (this.formGroupMain.get('recDate')?.invalid) {
      message = 'E0026';
      messageField = 'วันที่รับแบบ';
      focusField = 'recDate';
      this.formInvalid = true;
    } else if (this.formGroupMain.get('nid')?.invalid) {
      const errMsg = Object.keys(this.formGroupMain.get('nid')?.errors || {})[0];
      message = errMsg !== 'required' ? errMsg : 'E0026';
      messageField = 'เลขประจำตัวผู้เสียภาษีอากร';
      focusField = 'nid';
      this.formInvalid = true;
    }

    // ระบบต้องตรวจสอบเลขประจำตัวผู้เสียภาษีอากรนี้ว่าจด VAT หรือไม่หากไม่จดทะเบียน VAT ให้ระบบแจ้งเตือน “E9008 : ไม่พบข้อมูล กรุณาตรวจสอบอีกครั้ง”


    if (this.formInvalid) {
      this.alertModalService.show({ message: this.pp013CommonService.getErrorMsg(message, messageField), cb: () => { this.focusFieldError(focusField); }, show: true });
    } else {
      this.router.navigate(['/create-form/form/step2']);
    }
  }

  focusFieldError(field: string) {
    const nativeElement = this.renderer.selectRootElement(`[formControlName='` + field + `']`, true);
    if (nativeElement) {
      nativeElement.focus();
    }
  }
}
