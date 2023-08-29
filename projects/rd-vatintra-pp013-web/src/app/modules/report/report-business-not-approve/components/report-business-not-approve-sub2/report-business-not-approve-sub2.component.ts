import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-/report-business-not-approve-sub2',
  templateUrl: './report-business-not-approve-sub2.component.html',
  styleUrls: ['./report-business-not-approve-sub2.component.scss']
})
export class ReportBusinessNotApproveSub2Component implements OnInit {

  constructor(private router: Router, private readonly location : Location) { }

  ngOnInit(): void { }

  setPage() {
    this.location.back();
  }
}