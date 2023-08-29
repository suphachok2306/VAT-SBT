import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-report-business-not-transfer',
  templateUrl: './search-report-business-not-transfer.component.html',
  styleUrls: ['./search-report-business-not-transfer.component.scss']
})
export class SearchReportBusinessNotTransferComponent implements OnInit {


  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  setPage() {
    this.router.navigate(['/main/report/report-business-not-transfer/page-one']);
  }

}
