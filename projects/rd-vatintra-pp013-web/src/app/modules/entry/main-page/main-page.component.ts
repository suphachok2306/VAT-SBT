import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public profileData = { name: '', programId: '', date: '' };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getScreen(data: string) {
    this.router.navigate(['/main/' + data]);
  }
}
