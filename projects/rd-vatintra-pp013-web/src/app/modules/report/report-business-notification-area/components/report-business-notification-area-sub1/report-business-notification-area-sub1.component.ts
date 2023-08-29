import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-business-notification-sub1',
  templateUrl: './report-business-notification-area-sub1.component.html',
  styleUrls: ['./report-business-notification-area-sub1.component.scss']
})
export class ReportBusinessNotificationAreaSub1Component implements OnInit {


  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  setPage() {
    this.router.navigate(['/main/report/report-business-notification-area/page-two']);
  }

}
