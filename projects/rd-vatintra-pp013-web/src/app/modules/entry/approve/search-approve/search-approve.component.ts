import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApproveComponent } from '../approve.component';

@Component({
  selector: 'app-search-approve',
  templateUrl: './search-approve.component.html',
  styleUrls: ['./search-approve.component.scss']
})
export class SearchApproveComponent implements OnInit {

  constructor(
    private approveComponent: ApproveComponent,
    private router: Router
  ) {
    this.approveComponent.titlePage = 'อนุมัติแบบ ภ.พ.01.3';
    this.approveComponent.taxPayerName = '';
  }

  ngOnInit(): void {
  }

  goToSave() {
    this.router.navigate(['/approve/save']);
  }
}
