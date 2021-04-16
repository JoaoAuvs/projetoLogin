import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usuario:string='Nome do Usuário'
  email:string='email@gmail.com'

  public appPages = [
    { title: 'Perfil', url: '/tela-perfil', icon: 'person-circle' },
    { title: 'Ambientes', url: '/tela-ambiente', icon: 'pricetag' },
    { title: 'Embarcados', url: '/tela-embarcado', icon: 'hardware-chip' },
    { title: 'Logout', url: '/dashboard', icon: 'log-out' },
  ];
  
  /*public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}