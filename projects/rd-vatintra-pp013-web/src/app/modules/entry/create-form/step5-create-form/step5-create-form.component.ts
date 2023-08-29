import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateFormComponent } from '../create-form.component';
import { CreateFormService } from '../services/create-form.service';

@Component({
  selector: 'app-step5-create-form',
  templateUrl: './step5-create-form.component.html',
  styleUrls: ['./step5-create-form.component.scss']
})
export class Step5CreateFormComponent implements OnInit {
  public formGroupMain!: FormGroup;
  constructor(
    private createFormComponent: CreateFormComponent,
    private createFormService: CreateFormService,
    private router: Router
  ) {
    this.createFormComponent.titlePage = 'แบบคำขอการประกอบกิจการค้าทองคำ (ภ.พ.01.3)';
    this.createFormComponent.step = '5';
  }

  ngOnInit(): void {
    this.formGroupMain = this.createFormService.getForm();
  }

  goBack() {
    this.router.navigate(['/create-form/form/step4']);
  }

  goNext() {
    this.router.navigate(['/create-form/form/completed']);
  }
}
