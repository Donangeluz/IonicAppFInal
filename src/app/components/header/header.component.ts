import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public menuController: MenuController) {}
  readonly toogleMenu = async () => {
    await this.menuController.toggle();
  };

  ngOnInit() {}

}
