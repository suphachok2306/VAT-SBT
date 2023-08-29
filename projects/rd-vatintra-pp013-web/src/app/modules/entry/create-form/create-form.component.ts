import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateFormService } from './services/create-form.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  @Input() profileData!: { name: string, programId: string, date: string };
  public titlePage!: string;
  public step!: string;

  constructor(
    private createFormService: CreateFormService,
    private routerActive: ActivatedRoute,
    private router: Router
  ) {
    this.createFormService.creteForm();
    const resolveData = this.routerActive.snapshot.data.resolveData;
    if (resolveData && resolveData.vatInfo) {
      this.createFormService.getForm().patchValue(resolveData.vatInfo[0]);
    } else {
      this.router.navigate(['/create-form/search']);
    }
  }

  ngOnInit(): void {
  }

}
