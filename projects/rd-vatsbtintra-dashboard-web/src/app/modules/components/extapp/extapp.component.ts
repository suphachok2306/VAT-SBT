import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-extapp',
  templateUrl: './extapp.component.html',
  styleUrls: ['./extapp.component.scss']
})
export class ExtappComponent implements OnInit {
  public extUrl = '';
  public headerName = '';
  public progName = '';
  public rootUrl = '';
  public innerHtml: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
        this.extUrl = params.extUrl + '?form=' + params.form;
        console.log('extUrl : '+this.extUrl);
        this.headerName = params.progName.split('-');
        this.progName = params.progName;
        this.rootUrl = params.rootUrl;
        // this.innerHtml = '<iframe class="responsive-iframe" id="iframe-page" src="' + this.extUrl + '"></iframe>';
        // console.log(this.extUrl);
      }
    );
  }

  onClickA(event: Event): void{
    event.preventDefault();
    this.router.navigate([this.rootUrl], { relativeTo: this.route });
  }

  extURL(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.extUrl);
  }

}
