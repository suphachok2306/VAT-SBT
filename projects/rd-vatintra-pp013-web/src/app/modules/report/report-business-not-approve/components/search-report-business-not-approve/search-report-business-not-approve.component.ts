import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-report-business-not-approve',
  templateUrl: './search-report-business-not-approve.component.html',
  styleUrls: ['./search-report-business-not-approve.component.scss']
})
export class SearchReportBusinessNotApproveComponent implements OnInit {


  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  setPage() {
    this.router.navigate(['/main/report/report-business-not-approve/page-one']);
  }

}
