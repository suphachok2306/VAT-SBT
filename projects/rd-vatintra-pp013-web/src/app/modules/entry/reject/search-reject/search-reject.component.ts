import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RejectComponent } from '../reject.component';

@Component({
  selector: 'app-search-reject',
  templateUrl: './search-reject.component.html',
  styleUrls: ['./search-reject.component.scss']
})
export class SearchRejectComponent implements OnInit {

  constructor(
    private rejectComponent: RejectComponent,
    private router: Router
  ) {
    this.rejectComponent.titlePage = 'ลบรายผู้ประกอบการ';
    this.rejectComponent.taxPayerName = '';
  }

  ngOnInit(): void {
  }

  goToSave() {
    this.router.navigate(['/reject/save']);
  }
}
