import {Component, OnInit} from '@angular/core';
import {CurrentRouteService} from '../route/routes';

@Component({
  selector: 'app-remotepageview-cmp',
  moduleId: module.id,
  templateUrl: 'remote.page.view.component.html'
})

export class RemotePageViewComponent implements OnInit {



  constructor(private currRouteService: CurrentRouteService) {

  }

  ngOnInit() {
  }

  getRemotePageUrl() {

    return this.currRouteService.getRemotePageUrl();
  }


}
