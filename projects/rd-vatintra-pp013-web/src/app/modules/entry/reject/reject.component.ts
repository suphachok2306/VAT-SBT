import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.scss']
})
export class RejectComponent implements OnInit {
  @Input() profileData!: { name: string, programId: string, date: string };
  public titlePage!: string;
  public taxPayerName!: string;
  public flagStatus!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
