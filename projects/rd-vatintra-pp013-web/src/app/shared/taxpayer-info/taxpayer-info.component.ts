import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxpayer-info',
  templateUrl: './taxpayer-info.component.html',
  styleUrls: ['./taxpayer-info.component.scss']
})
export class TaxpayerInfoComponent implements OnInit {
  @Input() taxpayerInfo!: TaxpayerInfoModel;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface TaxpayerInfoModel {
  recRegNo: string;
  recDate: string;
  nid: string;
  branchName: string;
  branchAddress: string;
  telNo: string;
  corRegNo: string;
  corRegDate: string;
  vatRegDate: string;
  branchNum: string;
}
