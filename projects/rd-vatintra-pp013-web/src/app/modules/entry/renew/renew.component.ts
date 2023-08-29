import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.scss']
})
export class RenewComponent implements OnInit {
  @Input() profileData!: { name: string, programId: string, date: string };
  public titlePage!: string;
  public taxPayerName!: string;
  public flagStatus!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
