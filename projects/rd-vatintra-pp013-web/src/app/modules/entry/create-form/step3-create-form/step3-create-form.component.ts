import { Component, OnInit } from '@angular/core';
import { CreateFormComponent } from '../create-form.component';
import { Router } from '@angular/router';
import { CreateFormService } from '../services/create-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step3-create-form',
  templateUrl: './step3-create-form.component.html',
  styleUrls: ['./step3-create-form.component.scss']
})
export class Step3CreateFormComponent implements OnInit {
  public formGroupMain!: FormGroup;
  constructor(
    private createFormComponent: CreateFormComponent,
    private createFormService: CreateFormService,
    private router: Router
  ) {
    this.createFormComponent.titlePage = 'แบบคำขอการประกอบกิจการค้าทองคำ (ภ.พ.01.3)';
    this.createFormComponent.step = '3';
  }

  ngOnInit(): void {
    this.formGroupMain = this.createFormService.getForm();
  }

  goBack() {
    this.router.navigate(['/create-form/form/step2']);
  }

  goNext() {
    this.router.navigate(['/create-form/form/step4']);
  }
}
