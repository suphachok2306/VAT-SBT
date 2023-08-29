import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxpayer-property',
  templateUrl: './taxpayer-property.component.html',
  styleUrls: ['./taxpayer-property.component.scss']
})
export class TaxpayerPropertyComponent implements OnInit {
  @Input() taxpayerProperty!: TaxpayerPropertyModel;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface TaxpayerPropertyModel {
  member: string;
  memberDate: string;
  memberExpDate: string;
  memberRefNo: string;
  memberRef: string;
  memberRefDate: string;
  memberRefExpDate: string;
  filType: string;
  filJoinBranchNo: string;
  filDate: string;
}
