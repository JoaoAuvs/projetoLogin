import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaAmbientePageRoutingModule } from './tela-ambiente-routing.module';

import { TelaAmbientePage } from './tela-ambiente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaAmbientePageRoutingModule
  ],
  declarations: [TelaAmbientePage]
})
export class TelaAmbientePageModule {}
