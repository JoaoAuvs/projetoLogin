import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecuperacaoDeSenhaPageRoutingModule } from './recuperacao-de-senha-routing.module';
import { RecuperacaoDeSenhaPage } from './recuperacao-de-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacaoDeSenhaPageRoutingModule
  ],
  declarations: [RecuperacaoDeSenhaPage]
})
export class RecuperacaoDeSenhaPageModule {}