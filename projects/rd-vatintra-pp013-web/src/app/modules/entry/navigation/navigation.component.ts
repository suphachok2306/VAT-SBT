import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  getScreenReport(data: string) {
    this.router.navigate(['/main/report/' + data]);

  }
  getScreen(data: string) {
    this.router.navigate([data]);
  }
  getScreenEntry(data: string) {
    this.router.navigate(['/main/entry/' + data]);
    console.log('/main/entry/' + data);

  }

}
