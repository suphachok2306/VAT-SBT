import { Component, OnInit } from '@angular/core';
import { CreateFormComponent } from '../create-form.component';

@Component({
  selector: 'app-create-form-completed',
  templateUrl: './create-form-completed.component.html',
  styleUrls: ['./create-form-completed.component.scss']
})
export class CreateFormCompletedComponent implements OnInit {

  constructor(
    private createFormComponent: CreateFormComponent
  ) {
    this.createFormComponent.titlePage = 'แบบคำขอการประกอบกิจการค้าทองคำ (ภ.พ.01.3)';
    this.createFormComponent.step = 'completed';
  }

  ngOnInit(): void {
  }

}
