import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcceptTransferComponent } from '../accept-transfer.component';

@Component({
  selector: 'app-search-accept-transfer',
  templateUrl: './search-accept-transfer.component.html',
  styleUrls: ['./search-accept-transfer.component.scss']
})
export class SearchAcceptTransferComponent implements OnInit {

  constructor(
    private acceptTransferComponent: AcceptTransferComponent,
    private router: Router
  ) {
    this.acceptTransferComponent.titlePage = 'รับโอนสถานประกอบการ';
    this.acceptTransferComponent.taxPayerName = '';
  }

  ngOnInit(): void {
  }

  goToSave() {
    this.router.navigate(['/accept-transfer/save']);
  }
}
