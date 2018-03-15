import {Component, OnInit} from '@angular/core';
import {MenuitemService} from '../menuitem/menuitem.service';


declare var $: any;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  url: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: 'dashboard', title: 'Dashboard', icon: 'ti-panel', url: '', class: '', },
  {path: 'user', title: 'User Profile', icon: 'ti-user', url: '', class: ''},
  {path: 'table', title: 'Table List', icon: 'ti-view-list-alt', url: 'router', class: ''},
  {path: 'typography', title: 'Typography', icon: 'ti-text', url: '', class: ''},
  {path: 'icons', title: 'Icons', icon: 'ti-pencil-alt2', url: '', class: ''},
  {path: 'maps', title: 'Maps', icon: 'ti-map', url: '', class: ''},
  {path: 'notifications', title: 'Notifications', icon: 'ti-bell', url: '', class: ''},
  {path: 'baidu', title: 'Baidu', icon: 'ti-export', url: 'https://www.baidu.com/', class: ''},
  {path: 'sina', title: 'Sina', icon: 'ti-export', url: 'http://www.sina.com.cn/', class: ''},
  {path: 'k8s-icon', title: 'K8s Icon', icon: 'ti-export', url: 'http://angular.demo.cscloud.com/#/icons', class: ''},
  {path: 'k8s-user', title: 'K8s User', icon: 'ti-export', url: 'http://angular.demo.cscloud.com/#/user', class: ''},
  {path: 'upgrade', title: 'Upgrade to PRO', icon: 'ti-export', url: '', class: 'active-pro'}
];

@Component({
  moduleId: module.id,
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public topMenuTitle: String;

  constructor(private miService: MenuitemService) {
  }

  isTest() {
    return true;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.topMenuTitle = 'My Test';
  }

  isNotMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  menuItemClick(menuItemUrl: string) {
   this.miService.setSelectedItemUrl(menuItemUrl);
  }
}
