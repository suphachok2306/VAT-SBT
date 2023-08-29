import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setPage() {
    this.router.navigate(['/main/entry/user/page-one'])
  }

}
