import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcceptTransferComponent } from '../accept-transfer.component';

@Component({
  selector: 'app-save-accept-transfer',
  templateUrl: './save-accept-transfer.component.html',
  styleUrls: ['./save-accept-transfer.component.scss']
})
export class SaveAcceptTransferComponent implements OnInit {
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

  constructor(
    private router: Router,
    private acceptTransferComponent: AcceptTransferComponent
  ) {
    this.acceptTransferComponent.titlePage = 'รับโอนสถานประกอบการ';
    this.acceptTransferComponent.taxPayerName = 'บริษัท ABC จำกัด';
  }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/accept-transfer/search']);
  }
}
