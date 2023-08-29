import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accept-transfer',
  templateUrl: './accept-transfer.component.html',
  styleUrls: ['./accept-transfer.component.scss']
})
export class AcceptTransferComponent implements OnInit {
  @Input() profileData!: { name: string, programId: string, date: string };
  public titlePage!: string;
  public taxPayerName!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
