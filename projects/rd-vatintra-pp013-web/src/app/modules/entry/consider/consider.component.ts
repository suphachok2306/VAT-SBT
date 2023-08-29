import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consider',
  templateUrl: './consider.component.html',
  styleUrls: ['./consider.component.scss']
})
export class ConsiderComponent implements OnInit {
  @Input() profileData!: { name: string, programId: string, date: string };
  public titlePage!: string;
  public taxPayerName!: string;
  public flagStatus!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
