import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-business-gold-area-sub1',
  templateUrl: './report-business-gold-receive-sub1.component.html',
  styleUrls: ['./report-business-gold-receive-sub1.component.scss']
})
export class ReportBusinessGoldReceiveSub1Component implements OnInit {


  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  setPage() {
    this.router.navigate(['/main/report/report-business-gold-receive/page-two']);
  }

}
