import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateFormHttpService } from './create-form-http.service';


@Injectable()
export class CreateFormResolve implements Resolve<any> {

  constructor(
    private router: Router,
    private creatFormHttpService: CreateFormHttpService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const branchNo = route.paramMap.get('branchNo');
    const nid = route.paramMap.get('nid');
    if (route.firstChild && route.firstChild.routeConfig && route.firstChild.routeConfig.path === 'step1') {
      if (branchNo && nid) {
        const vatInfo = this.creatFormHttpService.getVATInfo(branchNo, nid);
        return forkJoin([vatInfo]).pipe(
          map(res => {
            return {
              vatInfo: res[0],
            };
          })
        );
      } else {
        this.router.navigate(['/create-form/search']);
      }
    }
    return of(null);
  }
}
