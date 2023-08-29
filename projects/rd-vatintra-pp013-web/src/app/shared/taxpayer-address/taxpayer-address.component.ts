import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxpayer-address',
  templateUrl: './taxpayer-address.component.html',
  styleUrls: ['./taxpayer-address.component.scss']
})
export class TaxpayerAddressComponent implements OnInit {
  @Input() taxpayerAddress!: TaxpayerAddressModel;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface TaxpayerAddressModel {
  branchNoB: string;
  branchAddressB: string;
  telNoB: string;
}
