import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-report-business-not-transfer-sub1',
  templateUrl: './report-business-not-transfer-sub1.component.html',
  styleUrls: ['./report-business-not-transfer-sub1.component.scss']
})
export class ReportBusinessNotTransferSub1Component implements OnInit {


  constructor(private router: Router,private readonly location : Location) { }
  ngOnInit(): void {
  }
  setPage() {
    this.router.navigate(['/main/report/report-business-not-transfer/page-two']);
  }

  setPageBack() {
    this.location.back();
  }

}
