
import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private isLocalRequest: boolean;



  ngOnInit() {


    const url = location.href;

    const inx = url.indexOf('?');

    this.isLocalRequest = true;

    if (inx > 0) {
      const rl = url.slice(inx + 1);
      if (rl === "isRemoteReq=true") {
        this.isLocalRequest = false;
      }

    }

  }

  isLocalReq() {
    return this.isLocalRequest;
  }

}


