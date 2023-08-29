import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-create-form',
  templateUrl: './search-create-form.component.html',
  styleUrls: ['./search-create-form.component.scss']
})
export class SearchCreateFormComponent implements OnInit {
  @Input() profileData!: { name: string, programId: string, date: string };
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newForm() {
    this.router.navigate(['/create-form/form', { branchNo: '0', nid: '0105549001615' }]);
  }
}
