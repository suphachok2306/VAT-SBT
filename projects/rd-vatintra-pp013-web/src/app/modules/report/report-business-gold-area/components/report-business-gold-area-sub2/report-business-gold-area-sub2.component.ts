import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-business-gold-area-sub2',
  templateUrl: './report-business-gold-area-sub2.component.html',
  styleUrls: ['./report-business-gold-area-sub2.component.scss']
})
export class ReportBusinessGoldAreaSub2Component implements OnInit {

  constructor(private router: Router, private readonly location : Location) { }

  ngOnInit(): void { }

  setPage() {
    this.location.back();
  }
}