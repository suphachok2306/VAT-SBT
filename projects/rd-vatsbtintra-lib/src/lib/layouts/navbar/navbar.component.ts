import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() profileData!: { name: string, programId: string, date: string };
  @Output() clickBanner = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit(): void {

  }

  onClick(): void {
    this.clickBanner.emit(true);
  }

}
