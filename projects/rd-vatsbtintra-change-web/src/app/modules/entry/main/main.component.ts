import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../service/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  dataSetTemp!: Array<any>;
  constructor(
    private router: Router,
    private routerActive: ActivatedRoute,
    private httpService: HttpService,

  ) {
  }

  ngOnInit(): void {
    this.getToken();
    const snap = this.routerActive.snapshot.queryParams;
    console.log('object queryParams : ', snap);
    sessionStorage.setItem('appr', snap.appr ? snap.appr : 'n');
    if (snap.form == 'cd01') {
      this.router.navigate(['cd01/serach']);
    } if (snap.form == 'ch01') {
      this.router.navigate(['ch01/serach']);
    } if (snap.form == 'dt01') {
      this.router.navigate(['dt01/serach']);
    } if (snap.form == 'rp01') {
      this.router.navigate(['rp01/serach']);
    }
  }

  getToken() {
    console.log('data >>>::', JSON.parse(JSON.stringify(this.httpService.getDecodeTokenAccessToken())));
  }

  getScreen(data: any) {
    if (data == 'cd01') {
      this.router.navigate(['cd01/serach']);
    } if (data == 'ch01') {
      this.router.navigate(['ch01/serach']);
    } if (data == 'dt01') {
      this.router.navigate(['dt01/serach']);
    } if (data == 'rp01') {
      this.router.navigate(['rp01/serach']);
    }
  }

  appr(data: string) {
    sessionStorage.setItem('appr', data);
  }

  token() {
    sessionStorage.setItem('token_id', 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6eyJzeXN0ZW1JZCI6IlZBVERFU0lUIiwic3lzdGVtTmFtZSI6IuC4o-C4sOC4muC4muC4muC4seC4meC4l-C4tuC4geC4guC5ieC4reC4oeC4ueC4peC4oOC4suC4qeC4teC4oeC4ueC4peC4hOC5iOC4suC5gOC4nuC4tOC5iOC4oSAoVUFUKSIsInN5c3RlbVRyYW5zYWN0aW9ucyI6W3sidHJhbnNhY3Rpb24iOiJQUklWLTAxMCIsInN5c3RlbVByaXZpbGVnZXMiOlsiMCJdfSx7InRyYW5zYWN0aW9uIjoiUFJJVi0wMjAiLCJzeXN0ZW1Qcml2aWxlZ2VzIjpbIjEiLCIyIiwiNSJdfSx7InRyYW5zYWN0aW9uIjoiUFJJVi0wNDAiLCJzeXN0ZW1Qcml2aWxlZ2VzIjpbIjIiLCI1Il19LHsidHJhbnNhY3Rpb24iOiJQUklWLTA1MCIsInN5c3RlbVByaXZpbGVnZXMiOlsiMSIsIjIiXX1dLCJzeXN0ZW1Vc2VyR3JvdXAiOlsiR1JQLTAxMCIsIkdSUC0wMjAiLCJHUlAtMDQwIl0sInN5c3RlbUxvY2F0aW9uR3JvdXAiOiJDbGlDMDAxIiwidXNlcklkIjoiV1MyMzMyMDAiLCJ1c2VyRnVsbE5hbWUiOiLguKfguLHguKXguKLguLIg4Liq4LiU4LmB4Liq4LiH4LiI4Lix4LiZ4LiX4Lij4LmMIiwidXNlclJkT2ZmaWNlQ29kZSI6bnVsbCwidXNlck9mZmljZUNvZGUiOiIwMTAwMTEzMCIsImNsaWVudExvY2F0aW9uIjoiMDEwMDExMzAiLCJsb2NhdGlvbk1hY2hpbmVOdW1iZXIiOiJDTEkwMDAwMDcxOC0wNzYyIiwidG9rZW5JZCI6ImV5SnpkV0lpT2lJeE1qTTBJaXdpWVhWa0lqcGJJbUZrYldsdUlsMHNJbWx6Y3lJNkltMWhjMjl1TG0xbGRHRnRkV2N1Ym1WMElpd2laWGh3SWpveE5UYzBOVEV5TnpZMUxDSnBZWFFpT2pFMU5qWTNNelkzTmpVc0ltcDBhU0k2SW1ZM1ltWmxNek5tTFRkaVpqY3ROR1ZpTkMwNFpUVTVMVGs1TVRjNU9XSTFaV0k0WVNKOSJ9LCJleHAiOjE2NjIzODk3OTcsInVzZXJJZCI6IldTMjMzMjAwIiwiaWF0IjoxNjYyMzY4MTk3fQ.xVyciWxP1qwWJEmbFz4UrFmQY8A3_JLM8FIUCkpXMLc');
  }

}
