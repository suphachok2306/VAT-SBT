import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/rd-vatsbtintra-dashboard-web/src/environments/environment';

@Component({
  selector: 'app-changes-by-staff',
  templateUrl: './changes-by-staff.component.html',
  styleUrls: ['./changes-by-staff.component.scss']
})
export class ChangesByStaffComponent implements OnInit {
  public url = '';
  constructor() { 
    this.url = environment.intraUrl;
  }

  ngOnInit(): void {
  }

}
