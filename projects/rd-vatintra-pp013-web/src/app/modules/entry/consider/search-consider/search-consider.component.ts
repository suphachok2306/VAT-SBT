import { Component, OnInit } from '@angular/core';
import { ConsiderComponent } from '../consider.component';

@Component({
  selector: 'app-search-consider',
  templateUrl: './search-consider.component.html',
  styleUrls: ['./search-consider.component.scss']
})
export class SearchConsiderComponent implements OnInit {

  constructor(
    private considerComponent: ConsiderComponent
  ) {
    this.considerComponent.titlePage = 'ค้นหาแบบแบบแจ้งการประกอบกิจการค้าทองคำ (ภ.พ.01.3)';
    this.considerComponent.taxPayerName = '';
  }

  ngOnInit(): void {
  }

}
