import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }
  closeMenu(){
    console.log("menu cerrado");
  }
  logout(){
    this.navCtrl.navigateRoot("/login")
  }
}
