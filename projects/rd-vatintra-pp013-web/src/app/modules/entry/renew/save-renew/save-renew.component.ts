import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RenewComponent } from '../renew.component';

@Component({
  selector: 'app-save-renew',
  templateUrl: './save-renew.component.html',
  styleUrls: ['./save-renew.component.scss']
})
export class SaveRenewComponent implements OnInit {
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
    private router: Router,
    private renewComponent: RenewComponent
  ) {
    this.renewComponent.titlePage = 'แจ้งต่อสิทธิสมาชิก';
    this.renewComponent.taxPayerName = 'บริษัท ABC จำกัด';
    this.renewComponent.flagStatus = 'หมดอายุ';
  }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/renew/search']);
  }
}
