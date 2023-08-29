import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateFormComponent } from '../create-form.component';
import { CreateFormService } from '../services/create-form.service';

@Component({
  selector: 'app-step4-create-form',
  templateUrl: './step4-create-form.component.html',
  styleUrls: ['./step4-create-form.component.scss']
})
export class Step4CreateFormComponent implements OnInit {
  public formGroupMain!: FormGroup;
  public taxpayerInfo = {
    recRegNo: '0001/2565',
    recDate: '01/03/2565',
    nid: '0-1035-64000-03-7',
    branchName: 'บริษัท ABC จำกัด',
    branchAddress: 'เลขที่ 233 หมู่ที่ 13 ถนน ลำบาง-เชียงใหม่ ตำบลปงยางคก อำเภอห้างฉัตร จังหวัดลำปาง รหัสไปรษณีย์ 52190',
    telNo: '02-999-9999',
    corRegNo: '0-1035-64000-03-7',
    corRegDate: '15/01/2560',
    vatRegDate: '15/01/2560',
    branchNum: '2'
  };

  public taxpayerAddress = {
    branchNoB: '',
    branchAddressB: 'เลขที่ 233 หมู่ที่ 13 ถนน ลำบาง-เชียงใหม่ ตำบลปงยางคก อำเภอห้างฉัตร จังหวัดลำปาง รหัสไปรษณีย์ 52190',
    telNoB: '02-999-9999'
  };

  public taxpayerProperty = {
    member: 'สมาชิกสมาคมค้าทองคำแห่งประเทศไทย',
    memberDate: '01/03/2565',
    memberExpDate: '01/03/2568',
    memberRefNo: '00001',
    memberRef: '01/2565',
    memberRefDate: '01/03/2565',
    memberRefExpDate: '01/03/2568',
    filType: '',
    filJoinBranchNo: '',
    filDate: '01/03/2565'
  };

  constructor(
    private createFormComponent: CreateFormComponent,
    private createFormService: CreateFormService,
    private router: Router
  ) {
    this.createFormComponent.titlePage = 'แบบคำขอการประกอบกิจการค้าทองคำ (ภ.พ.01.3)';
    this.createFormComponent.step = '4';
  }

  ngOnInit(): void {
    this.formGroupMain = this.createFormService.getForm();
  }

  goBack() {
    this.router.navigate(['/create-form/form/step3']);
  }

  goNext() {
    this.router.navigate(['/create-form/form/step5']);
  }
}
