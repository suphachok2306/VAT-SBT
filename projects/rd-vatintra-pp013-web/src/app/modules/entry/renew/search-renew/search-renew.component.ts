import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RenewComponent } from '../renew.component';

@Component({
  selector: 'app-search-renew',
  templateUrl: './search-renew.component.html',
  styleUrls: ['./search-renew.component.scss']
})
export class SearchRenewComponent implements OnInit {

  constructor(
    private renewComponent: RenewComponent,
    private router: Router
  ) {
    this.renewComponent.titlePage = 'แจ้งต่อสิทธิสมาชิก';
    this.renewComponent.taxPayerName = '';
  }

  ngOnInit(): void {
  }

  goToSave() {
    this.router.navigate(['/renew/save']);
  }
}
