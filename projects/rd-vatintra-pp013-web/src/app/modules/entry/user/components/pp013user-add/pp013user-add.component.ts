import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pp013user-add',
  templateUrl: './pp013user-add.component.html',
  styleUrls: ['./pp013user-add.component.scss']
})
export class Pp013userAddComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  setPage() {
    this.location.back();
  }
}
