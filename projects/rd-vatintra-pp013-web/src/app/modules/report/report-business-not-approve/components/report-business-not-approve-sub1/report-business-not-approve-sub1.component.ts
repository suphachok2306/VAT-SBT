import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-report-business-not-approve-sub1',
  templateUrl: './report-business-not-approve-sub1.component.html',
  styleUrls: ['./report-business-not-approve-sub1.component.scss']
})
export class ReportBusinessNotApproveSub1Component implements OnInit {


  constructor(private router: Router,private readonly location : Location) { }
  ngOnInit(): void {
  }
  setPage() {
    this.router.navigate(['/main/report/report-business-not-approve/page-two']);
  }

  setPageBack() {
    this.location.back();
  }

}
