import {Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {UserComponent} from '../user/user.component';
import {TableComponent} from '../table/table.component';
import {TypographyComponent} from '../typography/typography.component';
import {IconsComponent} from '../icons/icons.component';
import {MapsComponent} from '../maps/maps.component';
import {NotificationsComponent} from '../notifications/notifications.component';
import {UpgradeComponent} from '../upgrade/upgrade.component';
import {DomSanitizer} from '@angular/platform-browser';
import {Injectable} from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  url: string;
  class: string;
  isRomoteView: boolean;
}

export const ROUTE_INFO: RouteInfo[] = [
  {path: 'dashboard', title: 'Dashboard', icon: 'ti-panel', url: '', class: '', isRomoteView: false},
  {path: 'user', title: 'User Profile', icon: 'ti-user', url: '', class: '', isRomoteView: false},
  {path: 'table', title: 'Table List', icon: 'ti-view-list-alt', url: 'router', class: '', isRomoteView: false},
  {path: 'typography', title: 'Typography', icon: 'ti-text', url: '', class: '', isRomoteView: false},
  {path: 'icons', title: 'Icons', icon: 'ti-pencil-alt2', url: '', class: '', isRomoteView: false},
  {path: 'maps', title: 'Maps', icon: 'ti-map', url: '', class: '', isRomoteView: false},
  {path: 'notifications', title: 'Notifications', icon: 'ti-bell', url: '', class: '', isRomoteView: false},
  {path: 'baidu', title: 'Baidu', icon: 'ti-export', url: 'https://www.baidu.com/', class: '', isRomoteView: true},
  {path: 'sina', title: 'Sina', icon: 'ti-export', url: 'http://www.sina.com.cn/', class: '', isRomoteView: true},
  {path: 'k8s-icon', title: 'K8s Icon', icon: 'ti-export', url: 'http://angular.demo.cscloud.com/#/icons', class: '', isRomoteView: true},
  {path: 'k8s-user', title: 'K8s User', icon: 'ti-export', url: 'http://angular.demo.cscloud.com/#/user', class: '', isRomoteView: true},
  {path: 'upgrade', title: 'Upgrade to PRO', icon: 'ti-export', url: '', class: 'active-pro', isRomoteView: false}
];



@Injectable()
export class CurrentRouteService {

  private currRoute: RouteInfo;

  constructor(private sanitizer: DomSanitizer) {

    this.currRoute = null;
  }

  setCurrentRoute(currentSelectedRoute: RouteInfo) {
    this.currRoute = currentSelectedRoute;
  }

  getUrl() {
    return this.currRoute.url;
  }

  getTitle() {
    return this.currRoute.title;
  }

  isRemotePageView() {
    return this.currRoute.isRomoteView;
  }

  getRemotePageUrl() {

    const url = this.sanitizer.bypassSecurityTrustResourceUrl(this.currRoute.url + '?isRemoteReq=true');

    return url;
  }

}

