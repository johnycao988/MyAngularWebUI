import {Component, OnInit} from '@angular/core';
import {ROUTE_INFO, CurrentRouteService} from '../route/routes';


declare var $: any;



@Component({
  moduleId: module.id,
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public topMenuTitle: String;

  constructor(private currRouteService: CurrentRouteService) {
  }

  isTest() {
    return true;
  }

  ngOnInit() {
    this.menuItems = ROUTE_INFO.filter(menuItem => menuItem);
    this.topMenuTitle = 'My Test';
  }

  isNotMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  menuItemClick(menuItem) {
    this.currRouteService.setCurrentRoute(menuItem);
  }
}
