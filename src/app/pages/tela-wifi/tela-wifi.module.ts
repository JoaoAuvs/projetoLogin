import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TelaWifiPageRoutingModule } from './tela-wifi-routing.module';
import { TelaWifiPage } from './tela-wifi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaWifiPageRoutingModule
  ],
  declarations: [TelaWifiPage]
})
export class TelaWifiPageModule {}