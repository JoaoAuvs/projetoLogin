import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaEmbarcadosListarPageRoutingModule } from './tela-embarcados-listar-routing.module';

import { TelaEmbarcadosListarPage } from './tela-embarcados-listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaEmbarcadosListarPageRoutingModule
  ],
  declarations: [TelaEmbarcadosListarPage]
})
export class TelaEmbarcadosListarPageModule {}
