import {Component, OnInit} from '@angular/core';
import {ROUTE_INFO, CurrentRouteService} from '../route/routes';


declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-cssidebar-cmp',
  styleUrls: ['./sidebar.component.css'],
  template: `

<ng-sidebar-container style="height: 100vh;">

   <div ng-sidebar-content>
    <button (click)="_toggleSidebar()">Toggle sidebar</button>
  </div>

   <ng-sidebar [(opened)] = "_opened" position="left">
       <ul>
     <li>Menu Item</li>
      <li>Menu Item</li>
      <li>Menu Item</li>
    </ul>
   </ng-sidebar>
</ng-sidebar-container>
  `
})

export class CSSidebarComponent implements OnInit {

  public _opened: boolean;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor(private currRouteService: CurrentRouteService) {

  }



  isTest() {
    return true;
  }

  ngOnInit() {
    this._opened = true;
  }

}
