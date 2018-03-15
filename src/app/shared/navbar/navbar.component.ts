import {Component, OnInit, Renderer, ViewChild, ElementRef} from '@angular/core';
import {ROUTE_INFO} from '../../route/routes';
import {Router, ActivatedRoute} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {CurrentRouteService} from '../../route/routes';

@Component({
  moduleId: module.id,
  selector: 'navbar-cmp',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;

  @ViewChild("navbar-cmp") button;

  constructor(location: Location, private renderer: Renderer, private element: ElementRef, private currRouteService: CurrentRouteService) {
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTE_INFO.filter(listTitle => listTitle);
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
  }
  getTitle() {
    //        var titlee = window.location.pathname;
    //        titlee = titlee.substring(1);
    //        for(var item = 0; item < this.listTitles.length; item++){
    //            if(this.listTitles[item].path === titlee){
    //                return this.listTitles[item].title;
    //      }
    //        }

    let title = this.currRouteService.getTitle();

    if (this.currRouteService.isRemotePageView() ) {
      title = title + '[' + this.currRouteService.getUrl() + ']';
    }
    return title;
  }
  sidebarToggle() {
    var toggleButton = this.toggleButton;
    var body = document.getElementsByTagName('body')[0];

    if (this.sidebarVisible == false) {
      setTimeout(function() {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
}
