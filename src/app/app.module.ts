import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import {NguiMapModule} from '@ngui/map';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {TableComponent} from './table/table.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {RemotePageViewComponent} from './view/remote.page.view.component';
import {AppRoutes} from './app.routing';
import {CurrentRouteService} from './route/routes';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {SidebarModule} from 'ng-sidebar';
import {CSSidebarComponent} from './cssidebar/sidebar.component';
import {MenuComponent} from './menu/menu.component';
import {MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule} from '@angular/material';
import {SidenavComponent} from './sidenav/sidenav.component';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    RemotePageViewComponent,
    CSSidebarComponent, 
    MenuComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    SidebarModule.forRoot(),
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [CurrentRouteService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
