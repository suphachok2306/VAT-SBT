import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-report-gold-vat-approve',
  templateUrl: './search-report-gold-vat-approve.component.html',
  styleUrls: ['./search-report-gold-vat-approve.component.scss']
})
export class SearchReportGoldVatApproveComponent implements OnInit {


  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  // setPage() {
  //   this.router.navigate(['/main/report/report-gold-vat-approve/page-one']);
  // }

}
