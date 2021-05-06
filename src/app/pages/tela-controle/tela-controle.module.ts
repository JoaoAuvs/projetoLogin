import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TelaControlePageRoutingModule } from './tela-controle-routing.module';
import { TelaControlePage } from './tela-controle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaControlePageRoutingModule
  ],
  declarations: [TelaControlePage]
})
export class TelaControlePageModule {}
