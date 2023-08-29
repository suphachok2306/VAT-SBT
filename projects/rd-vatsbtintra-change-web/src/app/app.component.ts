import { Component } from '@angular/core';
import { AuthService } from 'projects/rd-vatsbtintra-lib/src/lib/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public userId: any;

  constructor(
    private authService: AuthService
  ) {
    this.userId = this.authService.getUserId();
    console.log('userId', this.userId);
  }
}
