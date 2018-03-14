import {Injectable} from '@angular/core';

@Injectable()
export class MenuitemService {

  private selectedItemUrl: string;

  constructor() {
    this.selectedItemUrl = 'Test';
  }

  setSelectedItemUrl(menuItemUrl) {
    this.selectedItemUrl = menuItemUrl;
  }

  getSelectedItemUrl() {
    return this.selectedItemUrl;
  }
}
