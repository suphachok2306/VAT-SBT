import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferComponent } from '../transfer.component';

@Component({
  selector: 'app-search-transfer',
  templateUrl: './search-transfer.component.html',
  styleUrls: ['./search-transfer.component.scss']
})
export class SearchTransferComponent implements OnInit {

  constructor(
    private transferComponent: TransferComponent,
    private router: Router
  ) {
    this.transferComponent.titlePage = 'โอนสถานประกอบการ';
    this.transferComponent.taxPayerName = '';
  }

  ngOnInit(): void {
  }

  goToSave() {
    this.router.navigate(['/transfer/save']);
  }
}
