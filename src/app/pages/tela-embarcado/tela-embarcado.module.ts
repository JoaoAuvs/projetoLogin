import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaEmbarcadoPageRoutingModule } from './tela-embarcado-routing.module';

import { TelaEmbarcadoPage } from './tela-embarcado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaEmbarcadoPageRoutingModule
  ],
  declarations: [TelaEmbarcadoPage]
})
export class TelaEmbarcadoPageModule {}
