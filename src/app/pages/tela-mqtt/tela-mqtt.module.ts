import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TelaMqttPageRoutingModule } from './tela-mqtt-routing.module';
import { TelaMqttPage } from './tela-mqtt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaMqttPageRoutingModule
  ],
  declarations: [TelaMqttPage]
})
export class TelaMqttPageModule {}