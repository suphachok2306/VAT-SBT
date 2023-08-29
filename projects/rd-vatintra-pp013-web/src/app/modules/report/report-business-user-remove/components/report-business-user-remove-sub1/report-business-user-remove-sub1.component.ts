import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-business-user-remove-sub1',
  templateUrl: './report-business-user-remove-sub1.component.html',
  styleUrls: ['./report-business-user-remove-sub1.component.scss']
})
export class ReportBusinessUserRemoveSub1Component implements OnInit {


  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  setPage() {
    this.router.navigate(['/main/report/report-business-user-remove/page-two']);
  }

}
