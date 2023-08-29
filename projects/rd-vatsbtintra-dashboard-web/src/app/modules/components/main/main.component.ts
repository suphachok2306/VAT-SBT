import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'projects/rd-vatsbtintra-lib/src/lib/shared/services/auth.service';
import { UserService } from 'projects/rd-vatsbtintra-lib/src/lib/shared/services/user.service';
import { environment } from 'projects/rd-vatsbtintra-dashboard-web/src/environments/environment';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public cannotConnect = false;
  public notFoundSystemId = false;
  public profileData!: { name: string, programId: string, date: string };
  private dateTime = '';
  public pathUrl = 'request-form';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private commonService: CommonService,
  ) {
    this.setProfileData();
    this.commonService.getSubjectString().subscribe(res => {
      console.log(res);
    });

    this.authService.checkSystemId = true; // set default
    this.authService.checkAuthen(environment.rdUserOauthServiceUrl).subscribe(res => {
      if (res) {
        if (this.checkSystemId) {
          this.setProfileData();
          if (this.authService.redirectUrl !== '/') {
            this.router.navigate([this.authService.redirectUrl]);
          } else {
            this.router.navigate(['/request-form']);
          }
        } else {
          this.notFoundSystemId = true;
          this.authService.checkSystemId = false;
        }
      } else {
        this.requestTokenNew();
      }
    }, err => {
      console.log('checkAuthen', err);
      this.requestTokenNew();
    });
  }

  ngOnInit(): void {
    this.dateTime = new Date().toLocaleDateString('th-TH', {
      day: 'numeric',
      month: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    this.router.navigate(['/request-form']);
  }

  setProfileData(): void {
    this.commonService.getProfieData().subscribe(res => {
      console.log('setProfileData', res);
      this.profileData = {
        name: this.userService.userModel.userFullName,
        programId: this.userService.userModel.systemId === environment.vat ? res.vat : res.sbt,
        date: this.dateTime
      };
      console.log('profileData', this.profileData);
    });
  }

  requestTokenNew(): void {
    const params = this.activatedRoute.snapshot.queryParams;
    this.authService.generateToken(environment.rdUserOauthServiceUrl, params).subscribe((res) => {
      if (this.authService.isLoggedIn) {
        if (this.checkSystemId) {
          this.setProfileData();
          this.router.navigate(['/request-form']);
        } else {
          this.notFoundSystemId = true;
          this.authService.checkSystemId = false;
        }
      } else {
        this.cannotConnect = true;
      }
    }, err => {
      this.cannotConnect = true;
      console.log(err);
    });
  }

  onClickBanner($event: boolean): void {
    if ($event) {
      this.router.navigate(['/request-form']);
    }
  }

  get checkSystemId(): boolean {
    return this.userService.userModel.systemId === environment.vat || this.userService.userModel.systemId === environment.sbt;
  }

  onClickMenu(event: Event, url: string): void {
    console.log('onClickMenu', url);
    event.preventDefault();
    this.setPathUrl(url);
    this.router.navigate([url], { relativeTo: this.activatedRoute });
  }

  setPathUrl(url: string): void {
    switch (url) {
      case '/request-form': {
        this.pathUrl = 'request-form';
        break;
      }
      case '/consider-request/vat': {
        this.pathUrl = 'vat';
        break;
      }
      case '/consider-request/sbt': {
        this.pathUrl = 'sbt';
        break;
      }
      default: {
        break;
      }
    }
  }
}
