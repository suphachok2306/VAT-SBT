import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'projects/rd-vatsbtintra-dashboard-web/src/environments/environment';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  public url = '';
  public rdVatsbtintraChangeWeb = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.url = environment.intraUrl;
    this.rdVatsbtintraChangeWeb = environment.rdVatsbtintraChangeWeb;
  }

  onClickA(event: Event, url: string, pExtUrl: string, pForm: string, pProgName: string): void{
    this.commonService.tmp = this.commonService.tmp + 1;
    this.commonService.setSubjectString('url[' + url + '] param[' + pExtUrl + '] form[' + pForm + ']');
    event.preventDefault();
    // this.router.navigate([url], { queryParams: { extUrl: pExtUrl, form: pForm, progName: pProgName}, relativeTo: this.activatedRoute});
  }

}
