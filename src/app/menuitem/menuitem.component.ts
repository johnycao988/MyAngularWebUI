import {Component, OnInit} from '@angular/core';
import {MenuitemService} from '../menuitem/menuitem.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-menuitem-cmp',
  moduleId: module.id,
  templateUrl: 'menuitem.component.html'
})

export class MenuitemComponent implements OnInit {



  constructor(private miService: MenuitemService, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
  }

  getMenuitemUrl() {
    console.log(this.miService.getSelectedItemUrl());
    const url = this.sanitizer.bypassSecurityTrustResourceUrl(this.miService.getSelectedItemUrl());
    console.log(url);
    return url;
  }


}
