import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pp013-entry-program',
  templateUrl: './pp013-entry-program.component.html',
  styleUrls: ['./pp013-entry-program.component.scss']
})
export class Pp013EntryProgramComponent implements OnInit {
  
  public checkAll:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  logCheckBox(): void {
    const listCheckBoxGetByName = Array.from(document.getElementsByName('checkbox') as unknown as HTMLCollectionOf<HTMLInputElement>);
    listCheckBoxGetByName.forEach(checkBox => checkBox.checked = !this.checkAll);
  }


  

}
