import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenu, MatButton, MatIcon, MatCard, MatSidenav, MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
   @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

}
